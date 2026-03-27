import React from 'react';
import { Terminal, Globe, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const IntegrationTools: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const codeSnippets = [
    {
      id: 'python',
      title: 'Python SDK Integration',
      lang: 'python',
      code: `from facilitygrip import Client

client = Client(api_key="your_api_key")

// Connect your facility
facility = client.attach("My_ORGANIZATION")

# Connect a smart HVAC sensor
sensor = facility.connect_sensor("HVAC-UNIT-01")

# Enable AI monitoring
sensor.enable_ai_anomaly_detection()

print("Facility connected successfully!")`
    },
    {
      id: 'rest',
      title: 'REST API Endpoint',
      lang: 'bash',
      code: `curl -X POST "http://localhost:8000/ml/predict" \\
     -H "Content-Type: application/json" \\
     -d '[22.5, 23.1, 21.8, 24.2, 23.9, 22.1, 21.5, 22.8, 23.3, 22.9]'`
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-10">
        <h2 className="text-3xl font-bold font-mono tracking-tight mb-2 flex items-center gap-3">
          <Terminal className="text-primary w-8 h-8" /> /facility/integrations/
        </h2>
        <p className="text-zinc-500 font-mono text-sm tracking-wide">Connect your infrastructure to the FacilityGrip AI Engine.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* API Info Cards */}
        <div className="space-y-6">
          <div className="glass rounded-2xl p-6 border border-primary/20 bg-primary/5 hover:border-primary/40 transition-all">
            <div className="flex items-center gap-4 mb-4 text-primary">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-mono uppercase tracking-widest">Connect via SDK</h3>
            </div>
            <p className="text-sm text-zinc-400 mb-6 font-mono leading-relaxed">
              Integrate your hardware sensors and building management systems using our lightweight Python SDK or REST API.
            </p>
            <div className="flex gap-3">
              <span className="bg-zinc-800 text-primary text-[10px] px-2 py-1 rounded font-mono border border-border">v2.1.0-STABLE</span>
              <span className="bg-zinc-800 text-secondary text-[10px] px-2 py-1 rounded font-mono border border-border">AI-ENABLED</span>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 border border-border hover:border-zinc-700 transition-all">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500">API_KEY_SECRET</span>
                <button className="text-xs text-primary font-mono hover:underline">Regenerate</button>
              </div>
              <div className="bg-zinc-950 p-4 rounded-xl border border-border flex items-center justify-between font-mono text-sm text-zinc-300">
                <code>fg_live_************************</code>
                <Copy className="w-4 h-4 text-zinc-600 cursor-pointer hover:text-primary transition-colors" />
              </div>
            </div>
          </div>
        </div>

        {/* Code Snippets Section */}
        <div className="space-y-6">
          {codeSnippets.map((snippet) => (
            <div key={snippet.id} className="bg-zinc-950 rounded-2xl border border-border overflow-hidden shadow-2xl">
              <div className="bg-zinc-900 px-4 py-2 border-b border-border flex justify-between items-center">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/30"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/30"></div>
                </div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{snippet.title}</span>
                <button 
                  onClick={() => copyToClipboard(snippet.code, snippet.id)}
                  className="p-1 hover:bg-zinc-800 rounded transition-colors"
                >
                  {copied === snippet.id ? <Check className="w-3.5 h-3.5 text-secondary" /> : <Copy className="w-3.5 h-3.5 text-zinc-500" />}
                </button>
              </div>
              <div className="p-4 font-mono text-sm leading-relaxed overflow-x-auto">
                <pre className="text-zinc-300">
                  <code>{snippet.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegrationTools;
