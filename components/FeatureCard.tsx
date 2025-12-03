'use client';

import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color: 'blue' | 'green' | 'orange' | 'purple';
  onClick?: () => void;
}

export default function FeatureCard({ icon, title, description, color, onClick }: FeatureCardProps) {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-700 hover:border-blue-300 hover:bg-blue-100',
    green: 'bg-green-50 border-green-200 text-green-700 hover:border-green-300 hover:bg-green-100',
    orange: 'bg-orange-50 border-orange-200 text-orange-700 hover:border-orange-300 hover:bg-orange-100',
    purple: 'bg-purple-50 border-purple-200 text-purple-700 hover:border-purple-300 hover:bg-purple-100'
  };

  const iconBgClasses = {
    blue: 'bg-blue-100',
    green: 'bg-green-100',
    orange: 'bg-orange-100',
    purple: 'bg-purple-100'
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      alert(`Learn more about ${title}`);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`group w-full rounded-xl border p-5 text-left transition-all duration-200 hover:shadow-md active:scale-[0.98] ${colorClasses[color]}`}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className={`rounded-lg p-2 transition-transform group-hover:scale-110 ${iconBgClasses[color]}`}>
          {icon}
        </div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
      <div className="mt-4 flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-xs font-medium">Explore →</span>
      </div>
    </button>
  );
}