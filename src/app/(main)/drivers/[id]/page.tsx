'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import { drivers } from '@/lib/mock-data';

export default function DriverDetail() {
  const params = useParams();
  const driver = drivers.find(d => d.id === parseInt(params.id as string));

  if (!driver) return <div className="text-center py-12"><p>Conductor no encontrado</p><Link href="/drivers" className="text-purple-600">Volver</Link></div>;

  return (
    <div className="space-y-6">
      <Link href="/drivers" className="text-purple-600 text-sm font-medium">← Volver a Conductores</Link>
      <div className="flex justify-between items-start"><div><h1 className="text-3xl font-bold">{driver.name}</h1><p className="text-gray-600 mt-1">{driver.email} • {driver.phone}</p></div><Badge variant={driver.status}>{driver.status}</Badge></div>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4"><p className="text-sm text-gray-600">Viajes</p><p className="text-3xl font-bold">{driver.totalTrips}</p></div>
        <div className="bg-white rounded-lg border border-gray-200 p-4"><p className="text-sm text-gray-600">Rating</p><p className="text-3xl font-bold">⭐ {driver.rating}</p></div>
        <div className="bg-white rounded-lg border border-gray-200 p-4"><p className="text-sm text-gray-600">Ingresos</p><p className="text-3xl font-bold">S/ {driver.earnings}</p></div>
        <div className="bg-white rounded-lg border border-gray-200 p-4"><p className="text-sm text-gray-600">Experiencia</p><p className="text-lg font-bold">{driver.drivingExperience}</p></div>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-6"><h3 className="font-semibold mb-4">Información de Seguridad</h3><div className="space-y-2"><p><strong>Antecedentes:</strong> <Badge variant={driver.backgroundCheck==='Aprobado'?'aprobado':'rechazado'}>{driver.backgroundCheck}</Badge></p><p><strong>Fecha de Ingreso:</strong> {driver.joinDate}</p></div></div>
    </div>
  );
}
