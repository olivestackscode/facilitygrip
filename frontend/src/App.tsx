import React, { useState, useEffect } from 'react';
import { Activity, Bell, Search, Zap, CheckCircle } from 'lucide-react';
import Sidebar from './components/Sidebar';
import StatCard from './components/StatCard';
import AIAlerts from './components/AIAlerts';
import IntegrationTools from './components/IntegrationTools';
import Documentation from './components/Documentation';
import axios from 'axios';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [systemStatus, setSystemStatus] = useState<any>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await axios.get('http://localhost:8000/system/status');
        setSystemStatus(res.data);
      } catch (err) {
        console.error("Backend not reachable");
      }
    };
    fetchStatus();
    const interval = setInterval(fetchStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen bg-background text-zinc-200 overflow-hidden">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 lg:p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              FacilityGrip AI
            </h1>
            <p className="text-zinc-500 text-sm mt-1">Smart Facility Automation & Monitoring</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search facility..." 
                className="bg-card border border-border rounded-full py-2 px-10 text-sm focus:outline-none focus:ring-1 focus:ring-primary w-64 glass"
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-zinc-500" />
            </div>
            <button className="p-2 glass rounded-full hover:bg-zinc-800 transition-all border border-border">
              <Bell className="w-5 h-5 text-zinc-400" />
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent border-2 border-border shadow-lg"></div>
          </div>
        </header>

        {/* Dashboard Content */}
        {activeTab === 'dashboard' ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard 
                title="CPU Usage" 
                value={systemStatus?.cpu_usage || "0%"} 
                icon={<Activity className="text-primary" />} 
                trend="+0.2%"
                color="blue"
              />
              <StatCard 
                title="Active Sensors" 
                value={systemStatus?.active_monitors || 0} 
                icon={<Zap className="text-yellow-400" />} 
                trend="Normal"
                color="yellow"
              />
              <StatCard 
                title="ML Confidence" 
                value="98.4%" 
                icon={<CheckCircle className="text-secondary" />} 
                trend="Stable"
                color="emerald"
              />
              <StatCard 
                title="System Load" 
                value="Low" 
                icon={<Zap className="text-zinc-400" />} 
                trend="Optimal"
                color="purple"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* AI Monitoring Panel */}
              <div className="lg:col-span-2 glass rounded-3xl p-6 glow min-h-[400px]">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Activity className="w-5 h-5 text-primary" /> Real-time AI Monitoring
                  </h2>
                  <button className="text-xs text-primary hover:underline">View Live Logs</button>
                </div>
                
                <div className="h-64 flex items-end justify-between gap-1 mb-4 px-2">
                  {[...Array(30)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-full bg-primary/20 rounded-t-sm transition-all duration-500"
                      style={{ height: `${Math.random() * 80 + 20}%` }}
                    ></div>
                  ))}
                </div>
                <div className="flex justify-around text-[10px] text-zinc-600 uppercase tracking-widest font-medium">
                  <span>08:00 AM</span>
                  <span>10:00 AM</span>
                  <span>12:00 PM</span>
                  <span>02:00 PM</span>
                  <span>04:00 PM</span>
                </div>
              </div>

              {/* Side AI Alerts */}
              <AIAlerts />
            </div>
          </>
        ) : activeTab === 'integrations' ? (
          <IntegrationTools />
        ) : activeTab === 'documentation' ? (
          <Documentation />
        ) : (
          <div className="flex flex-col items-center justify-center h-[60vh] text-zinc-500">
            <h2 className="text-xl font-semibold mb-2">Page under development</h2>
            <p>The "{activeTab}" view is coming soon.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
