export interface Patient {
  id: number;
  name: string;
  email: string;
  dob: string;
  gender: string;
}

export interface EMRVisit {
  id: number;
  patient_id: number;
  visit_date: string;
  blood_pressure: string;
  temperature: string;
  weight: string;
  clinical_notes: string;
  diagnosis: string;
  prescription: string;
  doctor_name: string;
}
