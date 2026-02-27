import React, { useState, useEffect } from 'react';
import { ClipboardList, User, Save, ArrowLeft, Stethoscope } from 'lucide-react';
import { Patient } from '../types';
import { useNavigate } from 'react-router-dom';

export default function EmrEntry() {
  const navigate = useNavigate();
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatientId, setSelectedPatientId] = useState<string>('');
  const [formData, setFormData] = useState({
    blood_pressure: '',
    temperature: '',
    weight: '',
    clinical_notes: '',
    diagnosis: '',
    prescription: '',
    doctor_name: 'Dr. Sarah Jenkins'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetch('/api/patients')
      .then(res => res.json())
      .then(data => {
        setPatients(data);
        if (data.length > 0) setSelectedPatientId(data[0].id.toString());
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/visits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patient_id: parseInt(selectedPatientId),
          ...formData
        })
      });
      if (response.ok) {
        alert('EMR Record Saved Successfully');
        navigate('/dashboard');
      }
    } catch (error) {
      console.error("Error saving EMR:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button 
        onClick={() => navigate('/dashboard')}
        className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 mb-6 transition-colors"
      >
        <ArrowLeft size={18} /> Back to Dashboard
      </button>

      <div className="bg-white rounded-3xl shadow-sm border border-zinc-100 overflow-hidden">
        <div className="p-8 bg-zinc-900 text-white flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-light tracking-tight flex items-center gap-3">
              <Stethoscope size={28} className="text-emerald-400" />
              Clinical Consultation Entry
            </h1>
            <p className="text-zinc-400 text-sm mt-1">Record patient vitals and clinical observations</p>
          </div>
          <div className="hidden md:block text-right">
            <div className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Attending Physician</div>
            <div className="text-emerald-400 font-medium">Dr. Sarah Jenkins</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {/* Patient Selection */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
              <User size={14} /> Select Patient
            </label>
            <select 
              value={selectedPatientId}
              onChange={(e) => setSelectedPatientId(e.target.value)}
              className="w-full p-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all appearance-none"
            >
              {patients.map(p => (
                <option key={p.id} value={p.id}>{p.name} ({p.email})</option>
              ))}
            </select>
          </div>

          {/* Vitals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputField label="Blood Pressure" name="blood_pressure" value={formData.blood_pressure} onChange={handleChange} placeholder="120/80" />
            <InputField label="Temperature" name="temperature" value={formData.temperature} onChange={handleChange} placeholder="98.6°F" />
            <InputField label="Weight" name="weight" value={formData.weight} onChange={handleChange} placeholder="70 kg" />
          </div>

          {/* Clinical Details */}
          <div className="space-y-6">
            <div className="space-y-3">
              <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Diagnosis</label>
              <input 
                name="diagnosis"
                value={formData.diagnosis}
                onChange={handleChange}
                placeholder="Primary diagnosis..."
                className="w-full p-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
                required
              />
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Clinical Notes</label>
              <textarea 
                name="clinical_notes"
                value={formData.clinical_notes}
                onChange={handleChange}
                rows={4}
                placeholder="Detailed observations, symptoms, and patient history..."
                className="w-full p-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all resize-none"
              />
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                <ClipboardList size={14} /> Prescription & Advice
              </label>
              <textarea 
                name="prescription"
                value={formData.prescription}
                onChange={handleChange}
                rows={3}
                placeholder="Medications, dosage, and follow-up instructions..."
                className="w-full p-4 bg-emerald-50/30 border border-emerald-100 rounded-2xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all resize-none"
              />
            </div>
          </div>

          <div className="pt-4">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              <Save size={20} />
              {isSubmitting ? 'Saving Record...' : 'Finalize & Save EMR'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function InputField({ label, name, value, onChange, placeholder }: { label: string, name: string, value: string, onChange: any, placeholder: string }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{label}</label>
      <input 
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-3 bg-zinc-50 border border-zinc-100 rounded-xl focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all text-sm"
      />
    </div>
  );
}
