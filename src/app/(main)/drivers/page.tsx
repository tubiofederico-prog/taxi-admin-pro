'use client';

import Link from 'next/link';
import {useState} from 'react';

const drivers = [
  {id:1,name:'Juan Pérez',email:'juan@example.com',phone:'+51 987 654 321',status:'aprobado',totalTrips:145,rating:4.8},
  {id:2,name:'María García',email:'maria@example.com',phone:'+51 987 654 322',status:'aprobado',totalTrips:98,rating:4.6},
  {id:3,name:'Carlos López',email:'carlos@example.com',phone:'+51 987 654 323',status:'pendiente',totalTrips:0,rating:0},
  {id:4,name:'Ana Martínez',email:'ana@example.com',phone:'+51 987 654 324',status:'aprobado',totalTrips:234,rating:4.9},
  {id:5,name:'Roberto Sánchez',email:'roberto@example.com',phone:'+51 987 654 325',status:'rechazado',totalTrips:0,rating:2.1}
];

export default function DriversPage() {
  const [search, setSearch] = useState('');
  const filtered = drivers.filter(d => d.name.toLowerCase().includes(search.toLowerCase()) || d.email.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Gestión de Conductores</h1>
        <p className="text-gray-600 mt-1">Administra y aprueba conductores</p>
      </div>

      <input
        type="text"
        placeholder="Buscar conductor..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 w-full max-w-xs"
      />

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">Nombre</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Teléfono</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Estado</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Viajes</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Rating</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((d) => (
              <tr key={d.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{d.name}</td>
                <td className="px-6 py-4 text-gray-600">{d.email}</td>
                <td className="px-6 py-4 text-gray-600">{d.phone}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                    d.status === 'aprobado' ? 'bg-green-100 text-green-700'
                    : d.status === 'pendiente' ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-red-100 text-red-700'
                  }`}>
                    {d.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">{d.totalTrips}</td>
                <td className="px-6 py-4">{d.rating > 0 ? `⭐ ${d.rating}` : '-'}</td>
                <td className="px-6 py-4">
                  <Link href={`/drivers/${d.id}`} className="text-purple-600 font-medium text-sm">
                    Ver
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
