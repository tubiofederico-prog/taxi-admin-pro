'use client';

import { schoolRides } from '@/lib/mock-data';
import StatCard from '@/components/ui/StatCard';

export default function SchoolRidesPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold">Traslados Escolares</h1></div>
      <div className="grid grid-cols-4 gap-4">
        <StatCard label="Estudiantes" value={schoolRides.students.length} color="blue"/>
        <StatCard label="Rutas Activas" value={schoolRides.routes.length} color="green"/>
        <StatCard label="Viajes Hoy" value={schoolRides.trips.length} color="purple"/>
        <StatCard label="Confianza" value="100%" color="green"/>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6"><h3 className="font-semibold mb-4">Estudiantes</h3><div className="space-y-2">{schoolRides.students.slice(0,3).map(s=>(<div key={s.id} className="p-3 bg-gray-50 rounded"><p className="font-semibold text-sm">{s.name}</p><p className="text-xs text-gray-600">{s.school}</p></div>))}</div></div>
        <div className="bg-white rounded-xl border border-gray-200 p-6"><h3 className="font-semibold mb-4">Rutas Activas</h3><div className="space-y-2">{schoolRides.routes.map(r=>(<div key={r.id} className="p-3 bg-gray-50 rounded"><p className="font-semibold text-sm">{r.name}</p><p className="text-xs text-gray-600">{r.schedule} • {r.students} estudiantes</p></div>))}</div></div>
      </div>
    </div>
  );
}
