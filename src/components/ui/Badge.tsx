import { ReactNode } from 'react';

interface BadgeProps {
  variant: 'aprobado' | 'pendiente' | 'rechazado' | 'vigente' | 'vencido' | 'disponible' | 'ocupado' | 'mantenimiento' | 'activo' | 'inactivo' | 'abierto' | 'resuelto' | 'cerrado' | 'en_revision' | 'suspendido' | 'completado' | 'en_curso' | 'cancelado';
  children: ReactNode;
  className?: string;
}

export default function Badge({ variant, children, className = '' }: BadgeProps) {
  const styles: Record<string, string> = {
    aprobado: 'bg-green-100 text-green-700',
    vigente: 'bg-green-100 text-green-700',
    pendiente: 'bg-yellow-100 text-yellow-700',
    rechazado: 'bg-red-100 text-red-700',
    vencido: 'bg-red-100 text-red-700',
    disponible: 'bg-blue-100 text-blue-700',
    ocupado: 'bg-orange-100 text-orange-700',
    mantenimiento: 'bg-gray-100 text-gray-700',
    activo: 'bg-green-100 text-green-700',
    inactivo: 'bg-gray-100 text-gray-700',
    abierto: 'bg-red-100 text-red-700',
    en_revision: 'bg-yellow-100 text-yellow-700',
    resuelto: 'bg-green-100 text-green-700',
    cerrado: 'bg-gray-100 text-gray-700',
    suspendido: 'bg-red-100 text-red-700',
    completado: 'bg-green-100 text-green-700',
    en_curso: 'bg-blue-100 text-blue-700',
    cancelado: 'bg-gray-100 text-gray-700',
  };

  return (
    <span className={`text-xs font-medium px-3 py-1 rounded-full ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
}
