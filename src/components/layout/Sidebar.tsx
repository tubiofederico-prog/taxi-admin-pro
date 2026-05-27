'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const menuItems = [{ label: 'Dashboard', href: '/dashboard', icon: '📊' }, { label: 'Conductores', href: '/drivers', icon: '👤' }, { label: 'Vehículos', href: '/vehicles', icon: '🚗' }, { label: 'Pasajeros', href: '/passengers', icon: '👥' }, { label: 'Viajes', href: '/trips', icon: '🗺️' }];
export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 bg-sidebar text-white h-screen fixed left-0 top-0 overflow-y-auto flex flex-col">
      <div className="p-6 border-b border-purple-700"><h1 className="text-2xl font-bold">TaxiAdmin</h1></div>
      <nav className="flex-1 p-4">{menuItems.map((item) => (<Link key={item.href} href={item.href} className={`block px-4 py-3 rounded-lg mb-2 transition-colors ${pathname === item.href ? 'bg-purple-700 text-white' : 'text-purple-100 hover:bg-purple-700'}`}><span className="mr-2">{item.icon}</span>{item.label}</Link>))}</nav>
      <div className="p-4 border-t border-purple-700"><button className="w-full px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors">Salir</button></div>
    </aside>
  );
}
