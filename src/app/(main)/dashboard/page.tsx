'use client';

import { BarChart, Bar, LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import KPICard from '@/components/ui/KPICard';
import StatCard from '@/components/ui/StatCard';
import Badge from '@/components/ui/Badge';
import { TrendingUp, AlertCircle, Users, Car, DollarSign, MapPin } from 'lucide-react';
import { drivers, vehicles, trips, documents } from '@/lib/mock-data';

const chartData = [
  { day: 'Lun', viajes: 45, ingresos: 850 },
  { day: 'Mar', viajes: 52, ingresos: 920 },
  { day: 'Mié', viajes: 48, ingresos: 880 },
  { day: 'Jue', viajes: 61, ingresos: 1100 },
  { day: 'Vie', viajes: 73, ingresos: 1320 },
  { day: 'Sáb', viajes: 89, ingresos: 1650 },
  { day: 'Dom', viajes: 68, ingresos: 1280 },
];

export default function DashboardPage() {
  const activeConductores = drivers.filter(d => d.status === 'aprobado').length;
  const availableVehicles = vehicles.filter(v => v.status === 'disponible').length;
  const expiredDocs = documents.filter(d => d.daysRemaining < 0).length;
  const totalIncome = trips.reduce((sum, t) => sum + t.totalFare, 0);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Dashboard Ejecutivo</h1>
          <p className="text-gray-600 mt-1">Visión general en tiempo real de tu operación</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="Viajes Hoy" value={trips.length} icon={<MapPin size={24} />} color="blue" trend={{ value: 12, isPositive: true }} />
        <KPICard title="Conductores Activos" value={activeConductores} icon={<Users size={24} />} color="green" trend={{ value: 5, isPositive: true }} />
        <KPICard title="Ingresos Hoy" value={`S/ ${totalIncome.toFixed(0)}`} icon={<DollarSign size={24} />} color="purple" trend={{ value: 8, isPositive: true }} />
        <KPICard title="Vehículos Disponibles" value={availableVehicles} icon={<Car size={24} />} color="orange" trend={{ value: 3, isPositive: false }} />
      </div>

      {/* Alerts */}
      {expiredDocs > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold text-red-900 mb-2">Documentos Vencidos</h3>
              <p className="text-sm text-red-800">{expiredDocs} documentos requieren atención inmediata. Actualizar para continuar operaciones.</p>
            </div>
          </div>
        </div>
      )}

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Viajes por Día</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="viajes" stroke="#7c3aed" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Ingresos por Día</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="ingresos" fill="#4f46e5" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Drivers */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top 5 Conductores</h3>
        <div className="space-y-3">
          {drivers.filter(d => d.status === 'aprobado').slice(0, 5).map((driver, idx) => (
            <div key={driver.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center font-semibold text-purple-700">#{idx + 1}</div>
                <div>
                  <p className="font-semibold text-gray-900">{driver.name}</p>
                  <p className="text-sm text-gray-500">{driver.totalTrips} viajes • ⭐ {driver.rating}</p>
                </div>
              </div>
              <p className="font-semibold text-green-600">S/ {driver.earnings}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
