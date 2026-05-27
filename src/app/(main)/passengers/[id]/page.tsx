'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import { passengers } from '@/lib/mock-data';

export default function PassengerDetail() {
  const params = useParams();
  const passenger = passengers.find(p => p.id === parseInt(params.id as string));

  if (!passenger) return <div className="text-center py-12"><p>Pasajero no encontrado</p><Link href="/passengers" className="text-purple-600">Volver</Link></div>;

  return (
    <div className="space-y-6">
      <Link href="/passengers" className="text-purple-600 text-sm font-medium">← Volver a Pasajeros</Link>
      <div className="flex justify-between items-start"><div><h1 className="text-3xl font-bold">{passenger.name}</h1><p className="text-gray-600 mt-1">{passenger.email} • {passenger.phone}</p></div><Badge variant={passenger.status}>{passenger.status}</Badge></div>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4"><p className="text-sm text-gray-600">Viajes Totales</p><p className="text-3xl font-bold">{passenger.trips}</p></div>
        <div className="bg-white rounded-lg border border-gray-200 p-4"><p className="text-sm text-gray-600">Rating</p><p className="text-3xl font-bold">⭐ {passenger.rating}</p></div>
        <div className="bg-white rounded-lg border border-gray-200 p-4"><p className="text-sm text-gray-600">Métodos de Pago</p><p className="text-lg font-semibold">{passenger.paymentMethods.length}</p></div>
        <div className="bg-white rounded-lg border border-gray-200 p-4"><p className="text-sm text-gray-600">Cuenta</p><p className="text-lg font-semibold">{passenger.status === 'activo' ? 'Activa' : 'Inactiva'}</p></div>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-6"><h3 className="font-semibold mb-4">Métodos de Pago</h3><div className="space-y-2">{passenger.paymentMethods.map((method, idx) => (<p key={idx} className="text-sm"><strong>{method.type}:</strong> {method.type === 'Tarjeta' ? `**** **** **** ${method.last4}` : method.value}</p>))}</div></div>
    </div>
  );
}
