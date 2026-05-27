'use client';

import Badge from '@/components/ui/Badge';
import { vehicles } from '@/lib/mock-data';
import { useState } from 'react';

export default function VehiclesPage() {
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const filtered = statusFilter ? vehicles.filter(v => v.status === statusFilter) : vehicles;

  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold text-gray-900">Gestión de Vehículos</h1><p className="text-gray-600">Administra la flota de transporte</p></div>
      <div className="flex gap-2"><button onClick={() => setStatusFilter(null)} className={`px-4 py-2 rounded-lg transition-colors ${!statusFilter ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>Todos</button><button onClick={() => setStatusFilter('disponible')} className={`px-4 py-2 rounded-lg transition-colors ${statusFilter === 'disponible' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>Disponibles</button><button onClick={() => setStatusFilter('ocupado')} className={`px-4 py-2 rounded-lg transition-colors ${statusFilter === 'ocupado' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>Ocupados</button></div>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden"><table className="w-full"><thead className="bg-gray-50"><tr><th className="px-6 py-3 text-left text-sm font-semibold">Placa</th><th className="px-6 py-3 text-left text-sm font-semibold">Marca</th><th className="px-6 py-3 text-left text-sm font-semibold">Año</th><th className="px-6 py-3 text-left text-sm font-semibold">Estado</th><th className="px-6 py-3 text-left text-sm font-semibold">Operativo</th><th className="px-6 py-3 text-left text-sm font-semibold">Viajes</th></tr></thead><tbody className="divide-y">{filtered.map(v => (<tr key={v.id} className="hover:bg-gray-50"><td className="px-6 py-4 font-semibold text-gray-900">{v.plate}</td><td className="px-6 py-4">{v.brand} {v.model}</td><td className="px-6 py-4">{v.year}</td><td className="px-6 py-4"><Badge variant={v.status}>{v.status}</Badge></td><td className="px-6 py-4"><Badge variant={v.operationalStatus}>{v.operationalStatus}</Badge></td><td className="px-6 py-4">{v.trips}</td></tr>))}</tbody></table></div>
    </div>
  );
}
