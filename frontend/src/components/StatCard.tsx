import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend: string;
  color: 'blue' | 'purple' | 'emerald' | 'yellow';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, trend, color }) => {
  const colorMap = {
    blue: 'border-blue-500/20 text-blue-400 bg-blue-500/5',
    purple: 'border-purple-500/20 text-purple-400 bg-purple-500/5',
    emerald: 'border-emerald-500/20 text-emerald-400 bg-emerald-500/5',
    yellow: 'border-yellow-500/20 text-yellow-400 bg-yellow-500/5',
  };

  return (
    <div className="glass rounded-2xl p-5 border border-border group hover:border-primary/30 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2.5 rounded-xl border ${colorMap[color]}`}>
          {icon}
        </div>
        <span className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-1 rounded-full border border-border">
          {trend}
        </span>
      </div>
      <div>
        <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-1">{title}</p>
        <p className="text-2xl font-bold text-white group-hover:scale-105 transition-transform origin-left">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
