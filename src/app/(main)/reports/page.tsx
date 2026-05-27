'use client';

import StatCard from '@/components/ui/StatCard';
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [{name:'Lun',viajes:45},{name:'Mar',viajes:52},{name:'Mié',viajes:48},{name:'Jue',viajes:61},{name:'Vie',viajes:73}];
const COLORS = ['#7c3aed', '#4f46e5', '#06b6d4', '#10b981', '#f59e0b'];

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold">Reportes y Analíticas</h1></div>
      <div className="grid grid-cols-3 gap-4"><StatCard label="Viajes Totales" value="385" color="blue"/><StatCard label="Ingresos Totales" value="S/ 7,290" color="green"/><StatCard label="Promedio por Viaje" value="S/ 18.95" color="purple"/></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6"><h3 className="text-lg font-semibold mb-4">Viajes Diarios</h3><ResponsiveContainer width="100%" height={300}><BarChart data={data}><CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="name"/><YAxis/><Tooltip/><Bar dataKey="viajes" fill="#7c3aed"/></BarChart></ResponsiveContainer></div>
        <div className="bg-white rounded-xl border border-gray-200 p-6"><h3 className="text-lg font-semibold mb-4">Distribución</h3><ResponsiveContainer width="100%" height={300}><PieChart><Pie data={[{name:'Completados',value:80},{name:'Cancelados',value:20}]} cx="50%" cy="50%" r={80}><Cell fill="#10b981"/><Cell fill="#ef4444"/></Pie></PieChart></ResponsiveContainer></div>
      </div>
    </div>
  );
}
