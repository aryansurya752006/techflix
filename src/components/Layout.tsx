import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, PlusCircle, Settings, LogOut, HeartPulse } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/dashboard' },
    { icon: <PlusCircle size={20} />, label: 'New Entry', path: '/entry' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-zinc-100 flex flex-col hidden md:flex">
        <div className="p-8">
          <Link to="/" className="flex items-center gap-2 text-emerald-600 font-bold text-xl tracking-tight">
            <HeartPulse size={28} />
            <span>Aura Health</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-medium",
                location.pathname === item.path 
                  ? "bg-emerald-50 text-emerald-700" 
                  : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
              )}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-zinc-50">
          <button className="flex items-center gap-3 px-4 py-3 w-full text-zinc-400 hover:text-rose-600 transition-colors font-medium">
            <LogOut size={20} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Mobile Nav */}
        <div className="md:hidden bg-white p-4 border-b border-zinc-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-600 font-bold text-lg">
            <HeartPulse size={24} />
            <span>Aura Health</span>
          </div>
          <div className="flex gap-4">
             <Link to="/" className="text-zinc-500"><LayoutDashboard size={20} /></Link>
             <Link to="/entry" className="text-zinc-500"><PlusCircle size={20} /></Link>
          </div>
        </div>
        
        <div className="py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
