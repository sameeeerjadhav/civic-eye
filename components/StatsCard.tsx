'use client';

interface StatsCardProps {
  title: string;
  count: number;
  description: string;
  color: 'red' | 'yellow' | 'green' | 'blue';
  icon: React.ReactNode;
  onClick?: () => void;
}

export default function StatsCard({ title, count, description, color, icon, onClick }: StatsCardProps) {
  const colorClasses = {
    red: 'bg-red-50 text-red-700 border-red-200 hover:border-red-300 hover:bg-red-100',
    yellow: 'bg-yellow-50 text-yellow-700 border-yellow-200 hover:border-yellow-300 hover:bg-yellow-100',
    green: 'bg-green-50 text-green-700 border-green-200 hover:border-green-300 hover:bg-green-100',
    blue: 'bg-blue-50 text-blue-700 border-blue-200 hover:border-blue-300 hover:bg-blue-100'
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      alert(`View all ${title.toLowerCase()} reports`);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full rounded-xl border p-6 text-left transition-all duration-200 hover:shadow-md active:scale-[0.98] ${colorClasses[color]}`}
      aria-label={`${title}: ${count} ${description}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">{title}</p>
          <h3 className="mt-2 text-3xl font-bold">{count}</h3>
          <p className="mt-1 text-sm opacity-80">{description}</p>
        </div>
        <div className={`rounded-lg ${color === 'blue' ? 'bg-blue-100' : color === 'red' ? 'bg-red-100' : color === 'yellow' ? 'bg-yellow-100' : 'bg-green-100'} p-3`}>
          {icon}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-end">
        <span className="text-sm font-medium opacity-90">View Details →</span>
      </div>
    </button>
  );
}