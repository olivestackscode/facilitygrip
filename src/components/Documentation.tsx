import React from 'react';
import { Book, Terminal, Box, Cloud, Activity, Code, Settings } from 'lucide-react';

const Documentation: React.FC = () => {
  const sections = [
    {
      id: 'getting-started',
      icon: <Book className="w-5 h-5" />,
      title: 'Getting Started',
      content: 'FacilityGrip is an AI-powered facility automation system. Follow the guides below to get started with your preferred installation method.'
    },
    {
      id: 'github-clone',
      icon: <Code className="w-5 h-5 text-blue-400" />,
      title: 'GitHub Clone',
      content: 'Best for developers who want to customize the system. \n\n1. `git clone https://github.com/olivestackscode/facilitygrip.git`\n2. Run the `setup.ps1` script to install all dependencies automatically.'
    },
    {
      id: 'windows-bash',
      icon: <Terminal className="w-5 h-5 text-emerald-400" />,
      title: 'Windows Bash/Bash Install',
      content: 'For users who prefer a standard shell environment. \n\n1. Open your bash terminal (Git Bash or WSL).\n2. Run `pip install -r backend/requirements.txt`\n3. Run `npm install` inside the frontend directory.'
    },
    {
      id: 'docker-install',
      icon: <Box className="w-5 h-5 text-cyan-400" />,
      title: 'Docker Installation',
      content: 'The most reliable way to run the full stack (Recommended). \n\n1. Ensure Docker Desktop is running.\n2. Run `docker-compose up --build` from the root directory.\n3. Access the dashboard at `http://localhost`.'
    },
    {
      id: 'exe-install',
      icon: <Settings className="w-5 h-5 text-purple-400" />,
      title: '.exe Installation',
      content: 'For standard PC installation without needing a terminal. \n\n1. Download the latest `FacilityGrip_Setup.exe`.\n2. Run the installer and follow the on-screen prompts.\n3. The system will be installed as a Windows service.'
    },
    {
      id: 'api-integration',
      icon: <Code className="w-5 h-5 text-indigo-400" />,
      title: 'API Integration',
      content: 'Integrate external sensors or third-party software. \n\nBase URL: `http://localhost:8000/api/v1`\n\nUse the `/ml/predict` endpoint to send raw sensor data to the AI engine for anomaly detection.'
    },
    {
      id: 'remote-install',
      icon: <Cloud className="w-5 h-5 text-orange-400" />,
      title: 'Remote / Cloud Install',
      content: 'Deploying to AWS, Azure, or private cloud servers. \n\nWe provide specialized Terraform templates and an Ansible playbook for remote orchestration. See the `/deploy` directory for cloud-specific configurations.'
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl">
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold tracking-tight mb-4 flex items-center gap-3">
          Documentation
        </h2>
        <p className="text-zinc-500 text-lg">Detailed guides and instructions for all FacilityGrip deployment options.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => (
          <div key={section.id} className="glass rounded-3xl p-8 border border-border group hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-zinc-900 border border-border group-hover:bg-primary/5 transition-colors">
                {section.icon}
              </div>
              <h3 className="text-xl font-bold">{section.title}</h3>
            </div>
            <div className="text-zinc-400 font-medium leading-relaxed whitespace-pre-line">
              {section.content}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 glass rounded-3xl p-10 border border-primary/20 bg-primary/5">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-primary">
          <Activity className="w-6 h-6" /> How to Use FacilityGrip
        </h3>
        <p className="text-zinc-300 text-lg mb-8 leading-relaxed">
          Once installed, FacilityGrip automatically begins monitoring your connected infrastructure.
        </p>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0 mt-1">1</div>
            <div>
              <p className="font-bold text-zinc-200">Connect Facilities</p>
              <p className="text-zinc-500 text-sm">Add buildings and rooms through the Assets tab.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0 mt-1">2</div>
            <div>
              <p className="font-bold text-zinc-200">Attach Sensors</p>
              <p className="text-zinc-500 text-sm">Use the Integrations tab to connect HVAC, Power, and Lighting sensors.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0 mt-1">3</div>
            <div>
              <p className="font-bold text-zinc-200">AI Alerts</p>
              <p className="text-zinc-500 text-sm">The Dashboard will notify you when AI detects anomalies or suggests maintenance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
