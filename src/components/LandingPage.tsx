import React from 'react';

interface LandingPageProps {
  onLaunch: () => void;
  onDocs: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLaunch, onDocs }) => {
  return (
    <div className="landing-wrapper">
      <style>{`
        .landing-wrapper {
          --bg: #0a0a0c;
          --card: #121214;
          --primary: #3b82f6;
          --secondary: #10b981;
          --border: #1f1f23;
          --text: #e4e4e7;
          --text-dim: #71717a;
          
          background-color: var(--bg);
          color: var(--text);
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          margin: 0;
          padding: 0;
          z-index: 9999;
          position: absolute;
          top: 0;
          left: 0;
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 4rem 2rem;
            flex-grow: 1;
        }

        header {
            text-align: center;
            margin-bottom: 4rem;
        }

        .landing-h1 {
            font-size: 3.5rem;
            font-weight: 800;
            letter-spacing: -0.05em;
            background: linear-gradient(to right, #60a5fa, #a855f7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 1rem;
        }

        .subtitle {
            font-size: 1.1rem;
            color: var(--text-dim);
            font-family: 'JetBrains Mono', monospace;
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
            margin-bottom: 4rem;
        }

        @media (max-width: 768px) {
            .grid { grid-template-columns: 1fr; }
            .landing-h1 { font-size: 2.5rem; }
        }

        .card {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 1.5rem;
            padding: 2rem;
            transition: all 0.3s ease;
        }

        .card:hover {
            border-color: var(--primary);
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.1);
        }

        h2 {
            font-size: 1.25rem;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            color: var(--text);
            font-weight: 600;
        }

        .code-block {
            background: #000;
            border-radius: 1rem;
            padding: 1.25rem;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.875rem;
            color: #d1d5db;
            border: 1px solid var(--border);
            overflow-x: auto;
            position: relative;
        }

        .code-header {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }

        .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
        }

        .red { background: #ef4444; opacity: 0.3; }
        .yellow { background: #f59e0b; opacity: 0.3; }
        .green { background: #10b981; opacity: 0.3; }

        pre { margin: 0; }
        code { color: var(--primary); }

        .btn {
            display: inline-block;
            background: var(--primary);
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 9999px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.875rem;
            transition: all 0.3s ease;
            cursor: pointer;
            border: 1px solid transparent;
            text-align: center;
        }

        .btn:hover {
            background: transparent;
            border-color: var(--primary);
            color: var(--primary);
            transform: translateY(-2px);
        }

        .btn-outline {
            background: transparent;
            border: 1px solid var(--border);
            color: var(--text-dim);
        }

        .btn-outline:hover {
            border-color: var(--text);
            color: var(--text);
        }

        .actions {
            text-align: center;
            display: flex;
            justify-content: center;
            gap: 1rem;
        }

        footer {
            text-align: center;
            padding: 2rem;
            color: var(--text-dim);
            font-size: 0.875rem;
            border-top: 1px solid var(--border);
        }

        .tag {
            background: rgba(59, 130, 246, 0.1);
            color: var(--primary);
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-family: 'JetBrains Mono', monospace;
            font-weight: 500;
        }
      `}</style>
      
      <div className="container">
        <header>
            <h1 className="landing-h1">FacilityGrip AI</h1>
            <p className="subtitle">/system/gateway/integration_tools</p>
        </header>

        <div className="grid">
            <div className="card">
                <h2><span className="tag">SDK</span> Python Integration</h2>
                <div className="code-block">
                    <div className="code-header">
                        <div className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>
                    <pre><code>from facilitygrip import Client<br/><br/>
client = Client(key="sk_live_...")<br/>
facility = client.attach("My_ORGANIZATION")<br/><br/>
# Start AI Monitoring<br/>
facility.monitor_hvac()</code></pre>
                </div>
            </div>

            <div className="card">
                <h2><span className="tag">API</span> REST Endpoint</h2>
                <div className="code-block">
                    <div className="code-header">
                        <div className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>
                    <pre><code>curl -X POST "/ml/predict" \<br/>
-H "Authorization: Bearer ..." \<br/>
-d '{"{"}"sensor_id": "PWR-01"{"}"}'</code></pre>
                </div>
            </div>
        </div>

        <div className="actions">
            <div onClick={onLaunch} className="btn">Launch Dashboard</div>
            <div onClick={onDocs} className="btn btn-outline">Documentation</div>
        </div>
      </div>

      <footer>
          &copy; 2026 FacilityGrip AI. Open Source Facility Automation.
      </footer>
    </div>
  );
};

export default LandingPage;
