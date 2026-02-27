import React, { useState, useEffect } from 'react';
import { Activity, Calendar, ClipboardList, User, Thermometer, Heart, Scale, Pill, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { EMRVisit, Patient } from '../types';
import { cn } from '../lib/utils';

export default function Dashboard() {
  const [visits, setVisits] = useState<EMRVisit[]>([]);
  const [patient, setPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // For demo purposes, we fetch patient 1
        const patientRes = await fetch('/api/patients');
        const patients = await patientRes.json();
        const currentPatient = patients[0];
        setPatient(currentPatient);

        if (currentPatient) {
          const visitsRes = await fetch(`/api/patients/${currentPatient.id}/visits`);
          const visitsData = await visitsRes.json();
          setVisits(visitsData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen bg-[#f5f5f5]">
      <div className="animate-pulse text-zinc-400 font-medium">Loading Health Records...</div>
    </div>
  );

  const latestVisit = visits[0];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-light tracking-tight text-zinc-900">Patient Dashboard</h1>
          <p className="text-zinc-500 mt-1">Welcome back, {patient?.name}</p>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-2xl shadow-sm border border-zinc-100">
          <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
            <User size={20} />
          </div>
          <div>
            <div className="text-xs text-zinc-400 uppercase font-semibold tracking-wider">Patient ID</div>
            <div className="text-sm font-mono font-medium">#AURA-{patient?.id?.toString().padStart(4, '0')}</div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Vitals & Quick Stats */}
        <div className="lg:col-span-1 space-y-6">
          <section className="bg-white p-6 rounded-3xl shadow-sm border border-zinc-100">
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-6 flex items-center gap-2">
              <Activity size={16} /> Latest Vitals
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <VitalCard icon={<Thermometer size={18} />} label="Temp" value={latestVisit?.temperature || '--'} color="text-orange-500" bg="bg-orange-50" />
              <VitalCard icon={<Activity size={18} />} label="BP" value={latestVisit?.blood_pressure || '--'} color="text-indigo-500" bg="bg-indigo-50" />
              <VitalCard icon={<Scale size={18} />} label="Weight" value={latestVisit?.weight || '--'} color="text-emerald-500" bg="bg-emerald-50" />
            </div>
          </section>

          <section className="bg-zinc-900 text-white p-6 rounded-3xl shadow-lg overflow-hidden relative">
            <div className="relative z-10">
              <h2 className="text-zinc-400 text-xs font-semibold uppercase tracking-widest mb-4">Next Appointment</h2>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex flex-col items-center justify-center border border-white/10">
                  <span className="text-xs font-bold">MAR</span>
                  <span className="text-lg font-black">12</span>
                </div>
                <div>
                  <div className="font-medium">General Checkup</div>
                  <div className="text-sm text-zinc-400">10:30 AM • Dr. Sarah Jenkins</div>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <Calendar size={120} />
            </div>
          </section>
        </div>

        {/* Right Column: EMR History */}
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white rounded-3xl shadow-sm border border-zinc-100 overflow-hidden">
            <div className="p-6 border-bottom border-zinc-50 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-zinc-900 flex items-center gap-2">
                <ClipboardList size={20} className="text-emerald-600" /> Medical History
              </h2>
              <button className="text-sm text-emerald-600 font-medium hover:underline">View All</button>
            </div>
            
            <div className="divide-y divide-zinc-50">
              {visits.map((visit, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={visit.id} 
                  className="p-6 hover:bg-zinc-50 transition-colors cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="text-sm text-zinc-400 font-medium mb-1">
                        {new Date(visit.visit_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </div>
                      <h3 className="text-xl font-medium text-zinc-900">{visit.diagnosis}</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-zinc-900">{visit.doctor_name}</div>
                      <div className="text-xs text-zinc-400">Attending Physician</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Clinical Notes</h4>
                      <p className="text-sm text-zinc-600 leading-relaxed italic">"{visit.clinical_notes}"</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Prescription</h4>
                      <div className="flex items-start gap-2 p-3 bg-emerald-50/50 rounded-xl border border-emerald-100/50">
                        <Pill size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-emerald-900 font-medium">{visit.prescription}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-end">
                    <div className="flex items-center text-xs text-emerald-600 font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      Details <ChevronRight size={14} />
                    </div>
                  </div>
                </motion.div>
              ))}
              {visits.length === 0 && (
                <div className="p-12 text-center text-zinc-400">
                  No medical records found.
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function VitalCard({ icon, label, value, color, bg }: { icon: React.ReactNode, label: string, value: string, color: string, bg: string }) {
  return (
    <div className={cn("p-4 rounded-2xl border border-zinc-100 flex flex-col gap-2 transition-transform hover:scale-[1.02]", bg)}>
      <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", color, "bg-white shadow-sm")}>
        {icon}
      </div>
      <div>
        <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">{label}</div>
        <div className={cn("text-lg font-bold tracking-tight", color)}>{value}</div>
      </div>
    </div>
  );
}
