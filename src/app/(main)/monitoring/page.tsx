'use client';

import { vehicles } from '@/lib/mock-data';
import Badge from '@/components/ui/Badge';

export default function MonitoringPage() {
  const stats = {
    total: vehicles.length,
    disponibles: vehicles.filter(v => v.status === 'disponible').length,
    ocupados: vehicles.filter(v => v.status === 'ocupado').length,
  };

  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold">Monitoreo en Tiempo Real</h1></div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 border border-gray-200"><p className="text-sm text-gray-600">Total Vehículos</p><p className="text-3xl font-bold">{stats.total}</p></div>
        <div className="bg-white rounded-lg p-4 border border-gray-200"><p className="text-sm text-gray-600">Disponibles</p><p className="text-3xl font-bold text-green-600">{stats.disponibles}</p></div>
        <div className="bg-white rounded-lg p-4 border border-gray-200"><p className="text-sm text-gray-600">Ocupados</p><p className="text-3xl font-bold text-orange-600">{stats.ocupados}</p></div>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-6 h-96 flex items-center justify-center text-gray-500"><p>📍 Mapa interactivo SVG - Vehículos en tiempo real</p></div>
    </div>
  );
}
