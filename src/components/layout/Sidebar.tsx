'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, Users, Truck, UserCheck, MapPin, Zap, AlertCircle, Phone, DollarSign, BarChart3,
  ShieldAlert, GraduationCap, Cog, LogOut
} from 'lucide-react';

const menuItems = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Conductores', href: '/drivers', icon: Users },
  { label: 'Vehículos', href: '/vehicles', icon: Truck },
  { label: 'Pasajeros', href: '/passengers', icon: UserCheck },
  { label: 'Viajes', href: '/trips', icon: MapPin },
  { label: 'Monitoreo', href: '/monitoring', icon: Zap },
  { label: 'Documentos', href: '/documents', icon: AlertCircle },
  { label: 'Soporte', href: '/support', icon: Phone },
  { label: 'Tarifas', href: '/pricing', icon: DollarSign },
  { label: 'Zonas', href: '/zones', icon: MapPin },
  { label: 'Reportes', href: '/reports', icon: BarChart3 },
  { label: 'Seguridad', href: '/security', icon: ShieldAlert },
  { label: 'Traslados', href: '/school-rides', icon: GraduationCap },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-sidebar text-white h-screen fixed left-0 top-0 flex flex-col border-r border-purple-700 overflow-hidden">
      <div className="p-4 border-b border-purple-700 flex-shrink-0">
        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          TaxiAdmin
        </h1>
        <p className="text-xs text-purple-300 mt-1">Pro</p>
      </div>

      <nav className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-purple-800 p-3 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname?.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${
                isActive
                  ? 'bg-purple-700 text-white shadow-lg'
                  : 'text-purple-100 hover:bg-purple-700/50'
              }`}
            >
              <Icon size={16} />
              <span className="font-medium truncate">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-purple-700 space-y-2">
        <Link
          href="/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-purple-100 hover:bg-purple-700/50 transition-colors"
        >
          <Cog size={18} />
          <span className="text-sm font-medium">Configuración</span>
        </Link>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-red-600/20 text-red-300 hover:bg-red-600/40 transition-colors">
          <LogOut size={18} />
          <span className="text-sm font-medium">Salir</span>
        </button>
      </div>
    </aside>
  );
}
