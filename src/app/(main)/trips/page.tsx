'use client';

import Badge from '@/components/ui/Badge';
import { trips } from '@/lib/mock-data';

export default function TripsPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold">Gestión de Viajes</h1></div>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full"><thead className="bg-gray-50"><tr><th className="px-6 py-3 text-left text-sm font-semibold">ID</th><th className="px-6 py-3 text-left text-sm font-semibold">Origen</th><th className="px-6 py-3 text-left text-sm font-semibold">Destino</th><th className="px-6 py-3 text-left text-sm font-semibold">Estado</th><th className="px-6 py-3 text-left text-sm font-semibold">Tarifa</th></tr></thead><tbody className="divide-y">{trips.map(t => (<tr key={t.id}><td className="px-6 py-4 font-mono text-sm">{t.id}</td><td className="px-6 py-4 text-sm">{t.origin.split(',')[0]}</td><td className="px-6 py-4 text-sm">{t.destination.split(',')[0]}</td><td className="px-6 py-4"><Badge variant={t.status}>{t.status}</Badge></td><td className="px-6 py-4 font-semibold">S/ {t.totalFare.toFixed(2)}</td></tr>))}</tbody></table>
      </div>
    </div>
  );
}
