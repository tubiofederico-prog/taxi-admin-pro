'use client';

import StatCard from '@/components/ui/StatCard';

export default function PricingPage() {
  const tarifas = [{label:'Tarifa Base',value:'S/ 15.00'},{label:'Tarifa por km',value:'S/ 2.50'},{label:'Tarifa por min',value:'S/ 0.30'},{label:'Mínimo',value:'S/ 20.00'},{label:'Hora Pico',value:'+20%'},{label:'Madrugada',value:'+30%'}];
  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold">Sistema de Tarifas</h1></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{tarifas.map(t=>(<StatCard key={t.label} label={t.label} value={t.value} color="purple"/>))}</div>
      <div className="bg-white rounded-xl border border-gray-200 p-6"><h3 className="text-lg font-semibold mb-4">Simulador de Tarifa</h3><div className="space-y-4"><div><label className="text-sm font-medium">Distancia (km):</label><input type="number" placeholder="0" className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-1"/></div><div><label className="text-sm font-medium">Tiempo (minutos):</label><input type="number" placeholder="0" className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-1"/></div><button className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700">Calcular Tarifa</button></div></div>
    </div>
  );
}
