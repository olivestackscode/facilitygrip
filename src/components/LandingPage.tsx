import React from 'react';

interface LandingPageProps {
  onLaunch: () => void;
  onDocs: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLaunch, onDocs }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#e4e4e7] font-sans selection:bg-primary/30">
      <div className="max-w-[1000px] mx-auto px-8 py-16 md:py-32">
        <header className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-1000">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            FacilityGrip AI
          </h1>
          <p className="font-mono text-zinc-500 text-lg md:text-xl tracking-widest uppercase">
            /system/gateway/integration_tools
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="glass rounded-[2.5rem] p-10 border border-zinc-800/50 hover:border-primary/30 transition-all duration-500 group">
            <div className="flex items-center gap-3 mb-8">
              <span className="bg-primary/10 text-primary text-[10px] px-3 py-1 rounded-full font-mono font-bold uppercase tracking-wider border border-primary/20">SDK</span>
              <h2 className="text-xl font-bold">Python Integration</h2>
            </div>
            
            <div className="bg-black/40 rounded-3xl p-6 font-mono text-sm border border-zinc-800/50 group-hover:border-primary/20 transition-colors">
              <div className="flex gap-1.5 mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
              </div>
              <pre className="text-zinc-400">
                <code className="text-blue-400">from</code> facilitygrip <code className="text-blue-400">import</code> Client<br/><br/>
                client = Client(key=<code className="text-emerald-400">"sk_live_..."</code>)<br/>
                facility = client.attach(<code className="text-emerald-400">"My_ORGANIZATION"</code>)<br/><br/>
                <code className="text-zinc-600"># Start AI Monitoring</code><br/>
                facility.monitor_hvac()
              </pre>
            </div>
          </div>

          <div className="glass rounded-[2.5rem] p-10 border border-zinc-800/50 hover:border-primary/30 transition-all duration-500 group">
            <div className="flex items-center gap-3 mb-8">
              <span className="bg-emerald-500/10 text-emerald-400 text-[10px] px-3 py-1 rounded-full font-mono font-bold uppercase tracking-wider border border-emerald-500/20">API</span>
              <h2 className="text-xl font-bold">REST Endpoint</h2>
            </div>
            
            <div className="bg-black/40 rounded-3xl p-6 font-mono text-sm border border-zinc-800/50 group-hover:border-emerald-500/20 transition-colors">
              <div className="flex gap-1.5 mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
              </div>
              <pre className="text-zinc-400 uppercase tracking-tighter">
                curl -X POST <code className="text-emerald-400">"/ml/predict"</code> \<br/>
                -H <code className="text-emerald-400">"Auth: Bearer ..."</code> \<br/>
                -d <code className="text-emerald-400">'{"{"}"sensor_id": "PWR-01"{"}"}'</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <button 
            onClick={onLaunch}
            className="w-full md:w-auto px-10 py-5 bg-primary rounded-full font-bold text-lg hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(59,130,246,0.3)]"
          >
            Launch Dashboard
          </button>
          <button 
            onClick={onDocs}
            className="w-full md:w-auto px-10 py-5 glass border border-zinc-800 rounded-full font-bold text-lg hover:bg-zinc-800 hover:border-zinc-700 hover:scale-105 active:scale-95 transition-all text-zinc-400 hover:text-white"
          >
            Documentation
          </button>
        </div>
      </div>

      <footer className="text-center py-12 text-zinc-600 font-mono text-xs uppercase tracking-[0.2em] border-t border-zinc-900/50">
        &copy; 2026 FacilityGrip AI. System Gateway v4.2.0-STABLE
      </footer>
    </div>
  );
};

export default LandingPage;
