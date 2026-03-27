import React from 'react';
import { Home, Package, Activity, FileText, Bell, Settings, LogOut, Code, Book } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'integrations', icon: Code, label: 'Integrations' },
    { id: 'documentation', icon: Book, label: 'Documentation' },
    { id: 'assets', icon: Package, label: 'Assets' },
    { id: 'monitoring', icon: Activity, label: 'AI Monitoring' },
    { id: 'reports', icon: FileText, label: 'Reports' },
    { id: 'notifications', icon: Bell, label: 'Alerts' },
  ];

  return (
    <aside className="w-20 lg:w-64 glass border-r border-border h-full flex flex-col p-4 transition-all duration-300">
      <div className="flex items-center gap-3 px-2 mb-10">
        <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30">
          <Activity className="w-6 h-6 text-primary" />
        </div>
        <span className="text-xl font-bold hidden lg:block tracking-tight italic">FacilityGrip</span>
      </div>

      <nav className="flex-1 flex flex-col gap-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group relative",
              activeTab === item.id 
                ? "bg-primary/10 text-primary border border-primary/20" 
                : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/50"
            )}
          >
            <item.icon className={cn("w-5 h-5", activeTab === item.id ? "text-primary" : "text-zinc-500")} />
            <span className="hidden lg:block font-medium">{item.label}</span>
            {activeTab === item.id && (
              <div className="absolute left-[-1rem] top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full"></div>
            )}
          </button>
        ))}
      </nav>

      <div className="mt-auto border-t border-border pt-4 flex flex-col gap-1">
        <button className="flex items-center gap-3 p-3 rounded-xl text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/50 transition-all">
          <Settings className="w-5 h-5" />
          <span className="hidden lg:block">Settings</span>
        </button>
        <button className="flex items-center gap-3 p-3 rounded-xl text-red-400/70 hover:text-red-400 hover:bg-red-400/10 transition-all">
          <LogOut className="w-5 h-5" />
          <span className="hidden lg:block">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
