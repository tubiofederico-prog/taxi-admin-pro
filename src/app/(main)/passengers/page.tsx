'use client';

import Badge from '@/components/ui/Badge';
import { passengers } from '@/lib/mock-data';

export default function PassengersPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold">Gestión de Pasajeros</h1></div>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full"><thead className="bg-gray-50"><tr><th className="px-6 py-3 text-left text-sm font-semibold">Nombre</th><th className="px-6 py-3 text-left text-sm font-semibold">Email</th><th className="px-6 py-3 text-left text-sm font-semibold">Viajes</th><th className="px-6 py-3 text-left text-sm font-semibold">Rating</th><th className="px-6 py-3 text-left text-sm font-semibold">Estado</th></tr></thead><tbody className="divide-y">{passengers.map(p => (<tr key={p.id}><td className="px-6 py-4 font-semibold">{p.name}</td><td className="px-6 py-4">{p.email}</td><td className="px-6 py-4">{p.trips}</td><td className="px-6 py-4">⭐ {p.rating}</td><td className="px-6 py-4"><Badge variant={p.status}>{p.status}</Badge></td></tr>))}</tbody></table>
      </div>
    </div>
  );
}
