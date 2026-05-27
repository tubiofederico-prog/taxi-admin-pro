'use client';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Ejecutivo</h1>
        <p className="text-gray-600 mt-1">Visión general de tu operación</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {title: 'Viajes Hoy', value: 24, trend: '+12%'},
          {title: 'Conductores Activos', value: 18, trend: '+5%'},
          {title: 'Ingresos (S/)', value: '1,240', trend: '+8%'},
          {title: 'Pendientes', value: 3, trend: 'Crítico'}
        ].map((card) => (
          <div key={card.title} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-gray-600 text-sm font-medium">{card.title}</p>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">{card.value}</h2>
            <p className={`text-sm mt-1 ${card.title.includes('Pendientes') ? 'text-red-600' : 'text-green-600'}`}>
              {card.trend}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Conductores</h3>
          <div className="space-y-3">
            {[
              {rank: 1, name: 'Juan Pérez', trips: 145, rating: 4.8},
              {rank: 2, name: 'Ana Martínez', trips: 234, rating: 4.9},
              {rank: 3, name: 'María García', trips: 98, rating: 4.6}
            ].map((driver) => (
              <div key={driver.rank} className="flex items-center justify-between p-3 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-gray-400">#{driver.rank}</span>
                  <div>
                    <p className="font-semibold text-gray-900">{driver.name}</p>
                    <p className="text-sm text-gray-500">{driver.trips} viajes • ⭐ {driver.rating}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Viajes Recientes</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">ID</th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">Estado</th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">Tarifa</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {id: 'V001', status: 'Completado', fare: 'S/ 45.50'},
                  {id: 'V002', status: 'En curso', fare: 'S/ 32.00'},
                  {id: 'V003', status: 'Completado', fare: 'S/ 58.75'},
                  {id: 'V004', status: 'Cancelado', fare: 'S/ 0.00'},
                  {id: 'V005', status: 'Completado', fare: 'S/ 41.25'}
                ].map((trip) => (
                  <tr key={trip.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-3 py-3 font-mono text-xs text-gray-600">{trip.id}</td>
                    <td className="px-3 py-3">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        trip.status === 'Completado'
                          ? 'bg-green-100 text-green-700'
                          : trip.status === 'En curso'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {trip.status}
                      </span>
                    </td>
                    <td className="px-3 py-3 font-semibold text-gray-900">{trip.fare}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
