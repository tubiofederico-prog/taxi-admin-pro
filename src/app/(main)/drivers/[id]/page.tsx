'use client';

import {useParams} from 'next/navigation';
import Link from 'next/link';

const drivers = [
  {id:1,name:'Juan Pérez',email:'juan@example.com',phone:'+51 987 654 321',status:'aprobado',documentStatus:'aprobado',totalTrips:145,rating:4.8,earnings:2500},
  {id:2,name:'María García',email:'maria@example.com',phone:'+51 987 654 322',status:'aprobado',documentStatus:'aprobado',totalTrips:98,rating:4.6,earnings:1800},
  {id:3,name:'Carlos López',email:'carlos@example.com',phone:'+51 987 654 323',status:'pendiente',documentStatus:'pendiente',totalTrips:0,rating:0,earnings:0},
  {id:4,name:'Ana Martínez',email:'ana@example.com',phone:'+51 987 654 324',status:'aprobado',documentStatus:'vencido',totalTrips:234,rating:4.9,earnings:3200},
  {id:5,name:'Roberto Sánchez',email:'roberto@example.com',phone:'+51 987 654 325',status:'rechazado',documentStatus:'rechazado',totalTrips:0,rating:2.1,earnings:0}
];

export default function DriverDetail() {
  const params = useParams();
  const driver = drivers.find(d => d.id === parseInt(params.id as string));

  if (!driver) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Conductor no encontrado</p>
        <Link href="/drivers" className="text-purple-600 mt-4 inline-block">
          Volver a Conductores
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link href="/drivers" className="text-purple-600 text-sm font-medium">
        ← Volver a Conductores
      </Link>

      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{driver.name}</h1>
          <p className="text-gray-600 mt-1">{driver.email} • {driver.phone}</p>
        </div>
        <span className={`text-sm px-4 py-2 rounded-full font-medium ${
          driver.status === 'aprobado' ? 'bg-green-100 text-green-700'
          : driver.status === 'pendiente' ? 'bg-yellow-100 text-yellow-700'
          : 'bg-red-100 text-red-700'
        }`}>
          {driver.status}
        </span>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[
          {label: 'Total de Viajes', value: driver.totalTrips},
          {label: 'Calificación', value: driver.rating > 0 ? `⭐ ${driver.rating}` : '-'},
          {label: 'Ingresos Estimados', value: `S/ ${driver.earnings}`},
          {label: 'Documentación', value: driver.documentStatus}
        ].map((item) => (
          <div key={item.label} className="bg-white rounded-lg p-6 border border-gray-200">
            <p className="text-gray-600 text-sm">{item.label}</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-2">{item.value}</h2>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Información de Contacto</h3>
        <div className="space-y-2">
          <p className="text-gray-600"><strong>Email:</strong> {driver.email}</p>
          <p className="text-gray-600"><strong>Teléfono:</strong> {driver.phone}</p>
        </div>
      </div>
    </div>
  );
}
