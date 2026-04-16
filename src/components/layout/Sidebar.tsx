import React from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Trophy, 
  History, 
  Users, 
  MessageSquare, 
  Users2, 
  BarChart3, 
  PlusCircle,
  ShoppingBag,
  HelpCircle, 
  Settings 
} from 'lucide-react';
import { Button } from '../ui/Button';
import { View } from '../../types';

interface SidebarProps {
  currentView: View;
  setCurrentView: (v: View) => void;
  isSidebarOpen: boolean;
}

export const Sidebar = ({ currentView, setCurrentView, isSidebarOpen }: SidebarProps) => {
  const topNavItems = [
    { id: 'dashboard', label: 'Accueil', icon: LayoutDashboard },
    { id: 'challenges', label: 'Défis', icon: Trophy },
    { id: 'history', label: 'Mes Bravos', icon: History },
    { id: 'team', label: 'Équipe', icon: Users },
    { id: 'shop', label: 'Boutique', icon: ShoppingBag },
  ];

  const bottomNavItems = [
    // { id: 'history', label: 'Flux', icon: MessageSquare },
    // { id: 'team', label: 'Répertoire', icon: Users2 },
    { id: 'stats', label: 'Stats', icon: BarChart3 },
  ];

  return (
    <aside className={`fixed inset-y-0 left-0 z-50 bg-white border-r border-surface-container-high transition-all duration-500 ${isSidebarOpen ? 'w-64' : 'w-20'} hidden md:flex flex-col shadow-2xl shadow-black/5`}>
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/30 rotate-3">
          <Trophy size={22} />
        </div>
        {isSidebarOpen && ( 
          <div className="animate-in fade-in slide-in-from-left-4 duration-500">
            <h2 className="font-extrabold text-lg leading-none tracking-tight text-primary">Bravo PAD</h2>
            <p className="text-[10px] text-on-surface-variant font-semibold uppercase tracking-[0.15em] mt-1">Tableau de Bord</p>
          </div>
        )}
      </div> 

      <div className="flex-1 px-4 py-6 space-y-10 overflow-y-auto">
        <nav className="space-y-2" >
          {topNavItems.map(item => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id as View)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all group relative cursor-pointer ${currentView === item.id ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'}`}
              style={{  }}
            >
              <item.icon size={20} className={currentView === item.id ? 'text-white' : 'group-hover:text-primary transition-colors'} />
              {isSidebarOpen && <span className="font-bold text-[13px] tracking-normal">{item.label}</span>}
              {currentView === item.id && (
                <motion.div layoutId="activeNav" className="absolute left-0 w-1.5 h-6 bg-secondary rounded-r-full" />
              )}
            </button>
          ))}
        </nav>

        <div className="h-px bg-surface-container-high mx-4" />

        <nav className="space-y-2">
          {bottomNavItems.map(item => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id as View)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all group relative cursor-pointer ${currentView === item.id ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'}`}
            >
              <item.icon size={20} className={currentView === item.id ? 'text-white' : 'group-hover:text-primary transition-colors'} />
              {isSidebarOpen && <span className="font-bold text-[13px] tracking-normal">{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>

      <div className="p-6 space-y-4">
        <Button 
          variant="primary" 
          className={`w-full py-3 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 ${!isSidebarOpen ? 'p-2' : 'px-4'}`}
          onClick={() => setCurrentView('create')}
        >
          <PlusCircle size={20} />
          {isSidebarOpen && <span className="font-bold text-xs tracking-tight whitespace-nowrap">Envoyer un Bravo</span>}
        </Button>
        
        {isSidebarOpen && (
          <div className="pt-4 border-t border-surface-container-high space-y-1">
            <button className="w-full flex items-center gap-4 p-3 rounded-xl text-on-surface-variant hover:bg-surface-container-low transition-all group cursor-pointer">
              <HelpCircle size={20} className="group-hover:text-primary transition-colors" />
              <span className="font-bold text-xs">Centre d'aide</span>
            </button>
            <button className="w-full flex items-center gap-4 p-3 rounded-xl text-on-surface-variant hover:bg-surface-container-low transition-all group cursor-pointer">
              <Settings size={20} className="group-hover:text-primary transition-colors" />
              <span className="font-bold text-xs">Paramètres</span>
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};
