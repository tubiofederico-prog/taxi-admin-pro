'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    basefare: 15,
    kmrate: 2.5,
    peakHourSurge: 20,
    nightSurge: 30,
    companyName: 'TaxiAdmin Pro',
    supportEmail: 'soporte@taxiadmin.pe',
    timezone: 'America/Lima',
  });

  const handleChange = (field: string, value: any) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log('Settings saved:', settings);
  };

  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold">Configuración</h1></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-semibold mb-4">Información de la Empresa</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de la Empresa</label>
              <input type="text" value={settings.companyName} onChange={(e) => handleChange('companyName', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email de Soporte</label>
              <input type="email" value={settings.supportEmail} onChange={(e) => handleChange('supportEmail', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Zona Horaria</label>
              <select value={settings.timezone} onChange={(e) => handleChange('timezone', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>America/Lima</option>
                <option>America/Bogota</option>
                <option>America/Santiago</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-semibold mb-4">Tarifas Base</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tarifa Base (S/)</label>
              <input type="number" value={settings.basefare} onChange={(e) => handleChange('basefare', parseFloat(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tarifa por KM (S/)</label>
              <input type="number" value={settings.kmrate} onChange={(e) => handleChange('kmrate', parseFloat(e.target.value))} step="0.1" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold mb-4">Sobrecargos Dinámicos</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sobrecargo Hora Pico (%)</label>
            <input type="number" value={settings.peakHourSurge} onChange={(e) => handleChange('peakHourSurge', parseInt(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sobrecargo Madrugada (%)</label>
            <input type="number" value={settings.nightSurge} onChange={(e) => handleChange('nightSurge', parseInt(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button onClick={handleSave} className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">Guardar Cambios</button>
        <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors">Cancelar</button>
      </div>
    </div>
  );
}
