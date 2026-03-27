import React from 'react';
import { AlertTriangle, Zap, ShieldAlert } from 'lucide-react';

const AIAlerts: React.FC = () => {
  const alerts = [
    { 
      id: 1, 
      type: 'warning', 
      title: 'Anomaly Detected', 
      desc: 'HVAC system in Building A showing unusual vibration patterns.', 
      time: '2m ago',
      icon: ShieldAlert,
      color: 'text-yellow-400 bg-yellow-400/10'
    },
    { 
      id: 2, 
      type: 'info', 
      title: 'Prediction Update', 
      desc: 'Generator service predicted in 14 days based on runtime.', 
      time: '1h ago',
      icon: Zap,
      color: 'text-blue-400 bg-blue-400/10'
    },
    { 
      id: 3, 
      type: 'critical', 
      title: 'Critical Load', 
      desc: 'Power usage nearing threshold in Server Room.', 
      time: '3h ago', 
      icon: AlertTriangle,
      color: 'text-red-400 bg-red-400/10'
    },
  ];

  return (
    <div className="glass rounded-3xl p-6 glow">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <AlertTriangle className="w-5 h-5 text-yellow-400" /> AI Insights
      </h2>
      <div className="flex flex-col gap-4">
        {alerts.map((alert) => (
          <div key={alert.id} className="p-4 rounded-2xl bg-zinc-900/40 border border-border hover:border-zinc-700 transition-all cursor-pointer">
            <div className="flex gap-3">
              <div className={`p-2 rounded-lg ${alert.color} h-fit`}>
                <alert.icon className="w-4 h-4" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-sm font-semibold">{alert.title}</h3>
                  <span className="text-[10px] text-zinc-500">{alert.time}</span>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">{alert.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-6 py-3 rounded-2xl border border-border text-sm text-zinc-400 hover:bg-zinc-800 transition-all">
        View All History
      </button>
    </div>
  );
};

export default AIAlerts;
