'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import { trips } from '@/lib/mock-data';

export default function TripDetail() {
  const params = useParams();
  const trip = trips.find(t => t.id === params.id as string);

  if (!trip) return <div className="text-center py-12"><p>Viaje no encontrado</p><Link href="/trips" className="text-purple-600">Volver</Link></div>;

  return (
    <div className="space-y-6">
      <Link href="/trips" className="text-purple-600 text-sm font-medium">← Volver a Viajes</Link>
      <div className="flex justify-between items-start"><div><h1 className="text-3xl font-bold">Viaje {trip.id}</h1><p className="text-gray-600 mt-1">{new Date(trip.timestamp).toLocaleString()}</p></div><Badge variant={trip.status}>{trip.status}</Badge></div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6"><h3 className="font-semibold mb-4">Detalles del Viaje</h3><div className="space-y-3"><div><p className="text-sm text-gray-600">Conductor</p><p className="font-semibold">{trip.driver}</p></div><div><p className="text-sm text-gray-600">Pasajero</p><p className="font-semibold">{trip.passenger}</p></div><div><p className="text-sm text-gray-600">Origen</p><p className="font-semibold">{trip.origin}</p></div><div><p className="text-sm text-gray-600">Destino</p><p className="font-semibold">{trip.destination}</p></div></div></div>

        <div className="bg-white rounded-xl border border-gray-200 p-6"><h3 className="font-semibold mb-4">Métricas</h3><div className="space-y-3"><div><p className="text-sm text-gray-600">Distancia</p><p className="font-semibold">{trip.distance} km</p></div><div><p className="text-sm text-gray-600">Duración</p><p className="font-semibold">{trip.duration}</p></div><div><p className="text-sm text-gray-600">Método de Pago</p><p className="font-semibold">{trip.paymentMethod}</p></div><div><p className="text-sm text-gray-600">Rating</p><p className="font-semibold">⭐ {trip.rating}/5</p></div></div></div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6"><h3 className="font-semibold mb-4">Desglose de Tarifa</h3><div className="space-y-2"><div className="flex justify-between text-sm"><p className="text-gray-600">Tarifa Base</p><p className="font-semibold">S/ {trip.baseFare.toFixed(2)}</p></div><div className="flex justify-between text-sm"><p className="text-gray-600">Tarifa por KM ({trip.distance} km × S/ {trip.kmRate})</p><p className="font-semibold">S/ {(trip.distance * trip.kmRate).toFixed(2)}</p></div><div className="flex justify-between text-sm"><p className="text-gray-600">Tarifa Mínima</p><p className="font-semibold">S/ {trip.minRate.toFixed(2)}</p></div><div className="border-t border-gray-200 pt-2 flex justify-between"><p className="text-gray-600">Subtotal</p><p className="font-bold">S/ {trip.totalFare.toFixed(2)}</p></div><div className="flex justify-between text-sm"><p className="text-gray-600">Propina</p><p className="font-semibold">S/ {trip.tip.toFixed(2)}</p></div><div className="flex justify-between font-bold text-lg bg-purple-50 -mx-6 -mb-6 px-6 py-3 rounded-b-lg"><p>Total</p><p>S/ {(trip.totalFare + trip.tip).toFixed(2)}</p></div></div></div>

      <div className="bg-white rounded-xl border border-gray-200 p-6"><h3 className="font-semibold mb-4">Timeline</h3><div className="space-y-4"><div className="flex gap-4"><div className="w-3 h-3 rounded-full bg-green-500 mt-2"></div><div><p className="font-semibold text-sm">Viaje Completado</p><p className="text-xs text-gray-600">{new Date(trip.timestamp).toLocaleTimeString()}</p></div></div><div className="flex gap-4"><div className="w-3 h-3 rounded-full bg-purple-500 mt-2"></div><div><p className="font-semibold text-sm">Tarifa Calculada</p><p className="text-xs text-gray-600">S/ {trip.totalFare.toFixed(2)}</p></div></div><div className="flex gap-4"><div className="w-3 h-3 rounded-full bg-blue-500 mt-2"></div><div><p className="font-semibold text-sm">Pago Procesado</p><p className="text-xs text-gray-600">Vía {trip.paymentMethod}</p></div></div></div></div>
    </div>
  );
}
