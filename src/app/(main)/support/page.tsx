'use client';

import Badge from '@/components/ui/Badge';
import { tickets } from '@/lib/mock-data';

export default function SupportPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold">Sistema de Soporte</h1></div>
      <div className="grid grid-cols-4 gap-4">
        {[{l:'Total',v:tickets.length},{l:'Abiertos',v:tickets.filter(t=>t.status==='abierto').length},{l:'En Revisión',v:tickets.filter(t=>t.status==='en_revision').length},{l:'Resueltos',v:tickets.filter(t=>t.status==='resuelto').length}].map(s=>(<div key={s.l} className="bg-white rounded-lg p-4 border border-gray-200"><p className="text-sm text-gray-600">{s.l}</p><p className="text-2xl font-bold">{s.v}</p></div>))}
      </div>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full"><thead className="bg-gray-50"><tr><th className="px-6 py-3 text-left text-sm font-semibold">Título</th><th className="px-6 py-3 text-left text-sm font-semibold">Categoría</th><th className="px-6 py-3 text-left text-sm font-semibold">Prioridad</th><th className="px-6 py-3 text-left text-sm font-semibold">Estado</th></tr></thead><tbody className="divide-y">{tickets.map(t=>(<tr key={t.id}><td className="px-6 py-4 font-semibold">{t.title}</td><td className="px-6 py-4">{t.category}</td><td className="px-6 py-4"><Badge variant={t.priority==='crítico'?'rechazado':t.priority==='alto'?'vencido':'pendiente'}>{t.priority}</Badge></td><td className="px-6 py-4"><Badge variant={t.status}>{t.status}</Badge></td></tr>))}</tbody></table>
      </div>
    </div>
  );
}
