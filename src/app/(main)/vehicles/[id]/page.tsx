'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import { vehicles } from '@/lib/mock-data';

export default function VehicleDetail() {
  const params = useParams();
  const vehicle = vehicles.find(v => v.id === parseInt(params.id as string));

  if (!vehicle) return <div><p>Vehículo no encontrado</p></div>;

  return (
    <div className="space-y-6">
      <Link href="/vehicles" className="text-purple-600 text-sm">← Volver</Link>
      <div className="flex justify-between"><div><h1 className="text-3xl font-bold">{vehicle.plate}</h1><p className="text-gray-600">{vehicle.brand} {vehicle.model} ({vehicle.year})</p></div><div><Badge variant={vehicle.status}>{vehicle.status}</Badge> <Badge variant={vehicle.operationalStatus} className="ml-2">{vehicle.operationalStatus}</Badge></div></div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4"><p className="text-sm text-gray-600">Viajes</p><p className="text-2xl font-bold">{vehicle.trips}</p></div>
        <div className="bg-white rounded-lg border border-gray-200 p-4"><p className="text-sm text-gray-600">Conductor</p><p className="text-lg font-semibold">{vehicle.driver}</p></div>
        <div className="bg-white rounded-lg border border-gray-200 p-4"><p className="text-sm text-gray-600">Condición</p><p className="text-lg font-semibold">{vehicle.condition}</p></div>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-6"><h3 className="font-semibold mb-4">Documentación</h3><div className="space-y-2"><p className="text-sm"><strong>SOAT:</strong> {vehicle.documents.soat}</p><p className="text-sm"><strong>Revisión:</strong> {vehicle.documents.revision}</p><p className="text-sm"><strong>Propiedad:</strong> {vehicle.documents.propiedad}</p></div></div>
    </div>
  );
}
