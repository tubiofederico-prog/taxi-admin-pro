'use client';

import Badge from '@/components/ui/Badge';
import { documents } from '@/lib/mock-data';
import { AlertCircle } from 'lucide-react';

export default function DocumentsPage() {
  const expired = documents.filter(d => d.daysRemaining < 0);
  const expiringSoon = documents.filter(d => d.daysRemaining > 0 && d.daysRemaining < 30);

  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold">Control Documental</h1></div>
      {expired.length > 0 && <div className="bg-red-50 border border-red-200 rounded-lg p-4"><div className="flex gap-2"><AlertCircle className="text-red-600"/><div><p className="font-semibold text-red-900">{expired.length} Documentos Vencidos</p><p className="text-sm text-red-800">Requieren renovación inmediata</p></div></div></div>}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full"><thead className="bg-gray-50"><tr><th className="px-6 py-3 text-left text-sm font-semibold">Conductor</th><th className="px-6 py-3 text-left text-sm font-semibold">Documento</th><th className="px-6 py-3 text-left text-sm font-semibold">Estado</th><th className="px-6 py-3 text-left text-sm font-semibold">Vencimiento</th><th className="px-6 py-3 text-left text-sm font-semibold">Días</th></tr></thead><tbody className="divide-y">{documents.map(d => (<tr key={d.id} className={d.daysRemaining < 0 ? 'bg-red-50' : d.daysRemaining < 30 ? 'bg-yellow-50' : ''}><td className="px-6 py-4 font-semibold">{d.driver}</td><td className="px-6 py-4">{d.type}</td><td className="px-6 py-4"><Badge variant={d.status}>{d.status}</Badge></td><td className="px-6 py-4 text-sm">{d.expiryDate || '-'}</td><td className="px-6 py-4 font-semibold">{d.daysRemaining > 0 ? `+${d.daysRemaining}` : d.daysRemaining}</td></tr>))}</tbody></table>
      </div>
    </div>
  );
}
