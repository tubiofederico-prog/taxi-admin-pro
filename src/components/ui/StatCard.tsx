interface StatCardProps {
  label: string;
  value: string | number;
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'gray';
}

export default function StatCard({ label, value, color = 'blue' }: StatCardProps) {
  const colors: Record<string, string> = {
    blue: 'bg-blue-50 border-blue-200',
    green: 'bg-green-50 border-green-200',
    purple: 'bg-purple-50 border-purple-200',
    orange: 'bg-orange-50 border-orange-200',
    red: 'bg-red-50 border-red-200',
    gray: 'bg-gray-50 border-gray-200',
  };

  return (
    <div className={`${colors[color]} border rounded-lg p-4`}>
      <p className="text-sm font-medium text-gray-600 mb-1">{label}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}
