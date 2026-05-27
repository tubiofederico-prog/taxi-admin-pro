'use client';

import StatCard from '@/components/ui/StatCard';
import { drivers } from '@/lib/mock-data';

const safetyMetrics = [
  {label:'Verificados',value:drivers.filter(d=>d.backgroundCheck==='Aprobado').length,color:'green'},
  {label:'Pendientes',value:drivers.filter(d=>d.backgroundCheck==='En revisión').length,color:'orange'},
  {label:'Rechazados',value:drivers.filter(d=>d.backgroundCheck==='Rechazado').length,color:'red'},
];

export default function SecurityPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold">Control de Seguridad</h1></div>
      <div className="grid grid-cols-3 gap-4">{safetyMetrics.map(m=>(<StatCard key={m.label} label={m.label} value={m.value} color={m.color as any}/>))}</div>
      <div className="bg-red-50 border border-red-200 rounded-lg p-6"><h3 className="font-semibold text-red-900 mb-4">⚠️ Conductores en Riesgo</h3><div className="space-y-2">{drivers.filter(d=>d.backgroundCheck!=='Aprobado').map(d=>(<div key={d.id} className="bg-white p-3 rounded text-sm"><p className="font-semibold">{d.name}</p><p className="text-gray-600">Status: {d.backgroundCheck}</p></div>))}</div></div>
    </div>
  );
}
