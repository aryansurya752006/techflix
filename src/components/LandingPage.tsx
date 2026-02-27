import React from 'react';
import { 
  Globe, ChevronRight, MapPin, Phone, Clock, CircleAlert, 
  Activity, Shield, Heart, Users, Star, Stethoscope, 
  Zap, Baby, CircleCheckBig, Lock, Ticket, CalendarCheck, Pill
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen mesh-bg selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/70 backdrop-blur-md border-b border-zinc-100">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-lg">+</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-zinc-900 text-base leading-tight">Smart Hospital</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider border border-green-200">
                NABH Accredited
              </span>
            </div>
            <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest leading-tight">
              MedCare General Hospital
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/80 border border-zinc-200 text-xs font-bold text-zinc-700 hover:bg-white transition-colors uppercase tracking-wider">
            <Globe size={14} /> हिंदी
          </button>
          <Link to="/dashboard" className="hidden sm:flex items-center justify-center text-xs font-bold uppercase tracking-widest text-zinc-600 hover:text-zinc-900 px-4 py-2 transition-all">
            Patient Login
          </Link>
          <Link to="/entry" className="inline-flex items-center justify-center bg-emerald-600 text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-all">
            Register as Patient
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          {/* Mock Canvas Area */}
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-100/20 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto page-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-dot"></span>
            Digital Health Platform — Est. 2010
          </div>
          <h1 className="font-bold text-5xl md:text-8xl text-zinc-900 mb-6 leading-tight tracking-tighter">
            <span className="gradient-text">Smart Hospital</span>
          </h1>
          <p className="font-medium text-xl md:text-2xl text-zinc-600 mb-4 tracking-tight">
            Your Health, Our Priority
          </p>
          <p className="text-base md:text-lg text-zinc-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Revolutionizing patient care with instant tokens, real-time doctor availability, and a seamless booking experience — all powered by secure digital technology.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/entry" className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold text-base px-10 py-5 rounded-2xl shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 hover:scale-[1.02] transition-all">
              Register as Patient <ChevronRight size={20} />
            </Link>
            <Link to="/dashboard" className="inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur-md border border-zinc-200 text-zinc-700 font-bold text-base px-10 py-5 rounded-2xl hover:bg-white hover:scale-[1.02] transition-all">
              Patient Login
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <InfoBadge icon={<MapPin size={14} />} text="MedCare General Hospital" />
            <InfoBadge icon={<Phone size={14} />} text="1800-SMART-HOSP" />
            <InfoBadge icon={<Clock size={14} />} text="Mon–Sat 8AM–8PM" />
            <InfoBadge icon={<CircleAlert size={14} />} text="Emergency 24/7" color="text-rose-600" />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-zinc-300 to-transparent"></div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="px-6 py-4 bg-emerald-600/5 border-y border-emerald-600/10 overflow-hidden">
        <div className="marquee-track">
          <MarqueeItem text="🩸 Blood Bank Open 24/7" />
          <MarqueeItem text="🏥 500+ Beds Available" />
          <MarqueeItem text="💉 Free Vaccination Camp Every Saturday" />
          <MarqueeItem text="🚑 Ambulance: 1800-999-000" />
          <MarqueeItem text="🧬 Advanced Diagnostic Lab" />
          <MarqueeItem text="👩‍⚕️ 100+ Specialist Doctors" />
          <MarqueeItem text="📅 Online Appointments Available" />
          <MarqueeItem text="🏆 NABH Accredited Hospital" />
          {/* Duplicate for seamless loop */}
          <MarqueeItem text="🩸 Blood Bank Open 24/7" />
          <MarqueeItem text="🏥 500+ Beds Available" />
          <MarqueeItem text="💉 Free Vaccination Camp Every Saturday" />
          <MarqueeItem text="🚑 Ambulance: 1800-999-000" />
          <MarqueeItem text="🧬 Advanced Diagnostic Lab" />
          <MarqueeItem text="👩‍⚕️ 100+ Specialist Doctors" />
          <MarqueeItem text="📅 Online Appointments Available" />
          <MarqueeItem text="🏆 NABH Accredited Hospital" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 stagger-in">
            <StatCard value="10,000+" label="Patients Served" />
            <StatCard value="100+" label="Specialist Doctors" />
            <StatCard value="500+" label="Beds Available" />
            <StatCard value="6" label="Languages Supported" />
            <StatCard value="24/7" label="Emergency Care" />
            <StatCard value="15+" label="Years of Excellence" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 tracking-tight">Everything You Need, <span className="gradient-text">In One Place</span></h2>
            <p className="text-lg text-zinc-500 max-w-2xl mx-auto">Our comprehensive digital health platform puts control in your hands.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard icon={<Activity />} title="Real-time Doctor Status" description="Know instantly which doctors are available before you arrive." />
            <FeatureCard icon={<Clock />} title="Instant Token System" description="Get your appointment token immediately with no waiting in queues." />
            <FeatureCard icon={<Shield />} title="Secure Patient Portal" description="Your health data is encrypted and securely stored digitally." />
            <FeatureCard icon={<Heart />} title="Multi-language Support" description="Available in English, Hindi, Tamil, Telugu, Kannada & Malayalam." />
            <FeatureCard icon={<Users />} title="Doctor Directory" description="Browse specialists across all departments with availability info." />
            <FeatureCard icon={<Star />} title="Patient Feedback" description="Share your experience and help us continuously improve care." />
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
              <Activity size={14} /> Medical Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 tracking-tight">Our Speciality <span className="gradient-text">Departments</span></h2>
            <p className="text-lg text-zinc-500 max-w-2xl mx-auto">World-class specialists across all major medical disciplines</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <DeptCard icon={<Heart />} name="Cardiology" subtitle="Heart & Cardiovascular Care" count={12} color="text-rose-500" bg="bg-rose-50" />
            <DeptCard icon={<Activity />} name="Orthopedics" subtitle="Bone, Joint & Spine Care" count={8} color="text-blue-500" bg="bg-blue-50" />
            <DeptCard icon={<Zap />} name="Neurology" subtitle="Brain & Nervous System" count={6} color="text-violet-500" bg="bg-violet-50" />
            <DeptCard icon={<Baby />} name="Pediatrics" subtitle="Children's Healthcare" count={10} color="text-amber-500" bg="bg-amber-50" />
            <DeptCard icon={<CircleAlert />} name="Emergency Medicine" subtitle="24/7 Critical Care" count={15} color="text-orange-500" bg="bg-orange-50" />
            <DeptCard icon={<Shield />} name="Oncology" subtitle="Cancer Care & Treatment" count={7} color="text-teal-500" bg="bg-teal-50" />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-6 bg-zinc-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Why Patients <span className="text-emerald-400">Trust Us</span></h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">Built on transparency, technology, and compassionate care</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <TrustCard icon={<CircleCheckBig size={32} />} title="Board-Certified Doctors" description="All our specialists are nationally certified with 10+ years of clinical experience in their respective fields." color="text-emerald-400" />
            <TrustCard icon={<Lock size={32} />} title="Secure Digital Records" description="Your medical data is encrypted and stored securely — only you and your attending physician control access." color="text-blue-400" />
            <TrustCard icon={<Ticket size={32} />} title="Zero Wait Guarantee" description="Instant token system means no physical queuing ever. Know your slot before you even leave home." color="text-amber-400" />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6 bg-emerald-50/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-4">
              <CalendarCheck size={14} /> Simple Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 tracking-tight">How It <span className="gradient-text">Works</span></h2>
            <p className="text-lg text-zinc-500 max-w-xl mx-auto">Get from registration to your appointment in three simple steps.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-emerald-200"></div>
            <StepCard number="01" icon={<Users />} title="Register" description="Create your patient profile in under 2 minutes with secure ID generation." />
            <StepCard number="02" icon={<CalendarCheck />} title="Book" description="Choose your specialist doctor and pick a convenient time slot. Instant token assigned." />
            <StepCard number="03" icon={<Stethoscope />} title="Visit" description="Arrive at the hospital and show your digital token at reception — no paperwork." />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-4">
              <Star size={14} className="fill-emerald-600" /> Patient Reviews
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 tracking-tight">What Our Patients <span className="gradient-text">Say</span></h2>
            <p className="text-zinc-500">Trusted by over 10,000 patients across the region</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ReviewCard name="Priya S." role="Cardiology Patient" text="The instant token system saved me hours of waiting. Absolutely brilliant! I booked from home and walked straight in." />
            <ReviewCard name="Ramesh K." role="Orthopedics Patient" text="Doctor availability feature is a game changer. Never had to come and find out the doctor was absent again." />
            <ReviewCard name="Ananya M." role="Pediatrics Patient" text="Registration was so smooth. Got my token in seconds! The multi-language support helped my elderly parents too." />
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-rose-600 to-red-700 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-rose-600/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="space-y-6 text-center md:text-left">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/20 rounded-2xl backdrop-blur-md">
                  <CircleAlert size={24} />
                  <span className="font-bold text-xl md:text-2xl uppercase tracking-tighter">Emergency: 24/7</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Immediate Critical Care</h3>
                <p className="text-rose-100 text-lg max-w-lg leading-relaxed">Our emergency ward never closes. Round-the-clock critical care with specialists on standby for any medical emergency.</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a href="tel:1800SMARTHOSP" className="inline-flex items-center gap-2 bg-white text-rose-600 font-bold px-8 py-4 rounded-2xl hover:bg-rose-50 transition-all">
                    <Phone size={20} /> 1800-SMART-HOSP
                  </a>
                  <Link to="/entry" className="inline-flex items-center gap-2 bg-rose-500/30 border border-white/30 text-white font-bold px-8 py-4 rounded-2xl hover:bg-rose-500/50 transition-all">
                    Book Appointment
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="w-48 h-48 rounded-full border-8 border-white/20 flex items-center justify-center">
                   <Activity size={80} className="text-white/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-zinc-100 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">+</span>
              </div>
              <div>
                <div className="font-bold text-zinc-900 text-lg">Smart Hospital</div>
                <div className="text-xs text-zinc-500 uppercase font-bold tracking-widest">MedCare General Hospital</div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-bold uppercase tracking-widest text-zinc-400">
              <span className="flex items-center gap-2"><MapPin size={16} /> Mumbai, India</span>
              <span className="flex items-center gap-2"><Phone size={16} /> 1800-SMART-HOSP</span>
              <span className="flex items-center gap-2">✉️ info@smarthosp.in</span>
            </div>
          </div>
          <div className="pt-8 border-t border-zinc-50 text-center">
            <p className="text-sm text-zinc-400 font-medium tracking-tight">
              © 2026 Smart Hospital. Built with <Heart size={12} className="inline text-rose-500 mx-1 fill-rose-500" /> for a healthier world.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function InfoBadge({ icon, text, color = "text-zinc-500" }: { icon: React.ReactNode, text: string, color?: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/50 backdrop-blur-sm border border-zinc-100 text-xs font-bold uppercase tracking-widest text-zinc-700">
      <span className={color}>{icon}</span>
      {text}
    </div>
  );
}

function MarqueeItem({ text }: { text: string }) {
  return (
    <span className="text-sm font-bold text-emerald-700 uppercase tracking-widest shrink-0 flex items-center gap-6 px-6">
      {text} <span className="text-emerald-300">•</span>
    </span>
  );
}

function StatCard({ value, label }: { value: string, label: string }) {
  return (
    <div className="card-glass rounded-[2rem] p-8 text-center card-hover">
      <div className="text-3xl font-bold gradient-text mb-2 tracking-tighter">{value}</div>
      <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">{label}</div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactElement, title: string, description: string }) {
  return (
    <div className="card-glass rounded-[2.5rem] p-10 card-hover group">
      <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <h3 className="text-xl font-bold text-zinc-900 mb-3 tracking-tight">{title}</h3>
      <p className="text-zinc-500 leading-relaxed">{description}</p>
    </div>
  );
}

function DeptCard({ icon, name, subtitle, count, color, bg }: { icon: React.ReactElement, name: string, subtitle: string, count: number, color: string, bg: string }) {
  return (
    <div className="card-glass rounded-[2.5rem] p-8 card-hover group">
      <div className="flex items-start justify-between mb-6">
        <div className={`w-14 h-14 rounded-2xl ${bg} flex items-center justify-center ${color}`}>
          {React.cloneElement(icon, { size: 28 })}
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-widest border border-green-100">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Available
        </span>
      </div>
      <h3 className="text-2xl font-bold text-zinc-900 mb-1 tracking-tight group-hover:text-emerald-600 transition-colors">{name}</h3>
      <p className="text-zinc-500 text-sm mb-6 font-medium">{subtitle}</p>
      <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
        <Stethoscope size={14} /> {count} Specialist Doctors
      </div>
    </div>
  );
}

function TrustCard({ icon, title, description, color }: { icon: React.ReactNode, title: string, description: string, color: string }) {
  return (
    <div className="text-center group">
      <div className={`mb-8 inline-flex items-center justify-center ${color} transform group-hover:scale-110 transition-transform duration-500`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 tracking-tight">{title}</h3>
      <p className="text-zinc-400 leading-relaxed text-sm">{description}</p>
    </div>
  );
}

function StepCard({ number, icon, title, description }: { number: string, icon: React.ReactElement, title: string, description: string }) {
  return (
    <div className="text-center relative group">
      <div className="text-6xl font-black text-emerald-600/10 absolute -top-4 right-0 select-none">{number}</div>
      <div className="w-20 h-20 rounded-3xl bg-white shadow-xl shadow-emerald-600/5 flex items-center justify-center text-emerald-600 mx-auto mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500">
        {React.cloneElement(icon, { size: 32 })}
      </div>
      <h3 className="text-2xl font-bold text-zinc-900 mb-4 tracking-tight">{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed max-w-[240px] mx-auto">{description}</p>
    </div>
  );
}

function ReviewCard({ name, role, text }: { name: string, role: string, text: string }) {
  return (
    <div className="card-glass rounded-[2.5rem] p-10 card-hover">
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-zinc-700 leading-relaxed mb-8 italic font-medium">"{text}"</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-lg">
          {name[0]}
        </div>
        <div>
          <div className="font-bold text-zinc-900 tracking-tight">{name}</div>
          <div className="text-xs text-zinc-400 font-bold uppercase tracking-widest">{role}</div>
        </div>
      </div>
    </div>
  );
}
