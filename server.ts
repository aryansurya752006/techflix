import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";

const db = new Database("hospital.db");

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS patients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    dob TEXT,
    gender TEXT
  );

  CREATE TABLE IF NOT EXISTS emr_visits (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    patient_id INTEGER NOT NULL,
    visit_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    blood_pressure TEXT,
    temperature TEXT,
    weight TEXT,
    clinical_notes TEXT,
    diagnosis TEXT,
    prescription TEXT,
    doctor_name TEXT,
    FOREIGN KEY (patient_id) REFERENCES patients(id)
  );
`);

// Seed some data if empty
const patientCount = db.prepare("SELECT COUNT(*) as count FROM patients").get() as { count: number };
if (patientCount.count === 0) {
  const insertPatient = db.prepare("INSERT INTO patients (name, email, dob, gender) VALUES (?, ?, ?, ?)");
  insertPatient.run("John Doe", "john@example.com", "1985-05-15", "Male");
  
  const insertVisit = db.prepare(`
    INSERT INTO emr_visits (patient_id, blood_pressure, temperature, weight, clinical_notes, diagnosis, prescription, doctor_name)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);
  insertVisit.run(1, "120/80", "98.6°F", "75kg", "Patient complains of mild headache and fatigue.", "Common Cold", "Paracetamol 500mg, Rest", "Dr. Smith");
}

async function startServer() {
  const app = express();
  const PORT = parseInt(process.env.PORT || "3000", 10);

  app.use(express.json());

  // API Routes
  app.get("/api/patients", (req, res) => {
    const patients = db.prepare("SELECT * FROM patients").all();
    res.json(patients);
  });

  app.get("/api/patients/:id/visits", (req, res) => {
    const visits = db.prepare("SELECT * FROM emr_visits WHERE patient_id = ? ORDER BY visit_date DESC").all(req.params.id);
    res.json(visits);
  });

  app.post("/api/visits", (req, res) => {
    const { patient_id, blood_pressure, temperature, weight, clinical_notes, diagnosis, prescription, doctor_name } = req.body;
    const info = db.prepare(`
      INSERT INTO emr_visits (patient_id, blood_pressure, temperature, weight, clinical_notes, diagnosis, prescription, doctor_name)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(patient_id, blood_pressure, temperature, weight, clinical_notes, diagnosis, prescription, doctor_name);
    res.json({ id: info.lastInsertRowid });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(process.cwd(), "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(process.cwd(), "dist", "index.html"));
    });
  }

  const server = app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

  server.on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.error(`Port ${PORT} is already in use. ` +
        "Please stop the process using this port or set a different PORT environment variable.");
      process.exit(1);
    } else {
      throw err;
    }
  });
}

startServer();
