'use client';

import { zones } from '@/lib/mock-data';
import Badge from '@/components/ui/Badge';

export default function ZonesPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold">Gestión de Zonas</h1></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{zones.map(z=>(<div key={z.id} className="bg-white rounded-lg border border-gray-200 p-4"><h3 className="font-semibold text-gray-900">{z.name}</h3><div className="mt-2 space-y-1 text-sm"><p className="text-gray-600">Demanda: <Badge variant={z.demand==='muy_alto'?'rechazado':z.demand==='alto'?'vencido':'pendiente'}>{z.demand}</Badge></p><p className="text-gray-600">Disponibles: {z.availableVehicles}</p><p className="text-gray-600">Viajes activos: {z.activeTrips}</p></div></div>))}</div>
    </div>
  );
}
