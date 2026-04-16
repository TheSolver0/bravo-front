import React from 'react';
import { List as ListIcon, Search, Bell, ShoppingBag } from 'lucide-react';
import { View } from '../../types';

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (v: boolean) => void;
  setCurrentView: (v: View) => void;
}

export const Header = ({ isSidebarOpen, setIsSidebarOpen, setCurrentView }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-40 glass border-b border-surface-container-high px-6 md:px-10 py-3 flex items-center justify-between">
      <div className="flex items-center gap-6 flex-1">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2.5 hover:bg-surface-container-low rounded-xl transition-all hidden md:block shadow-sm bg-white cursor-pointer border border-surface-container-high">
          <ListIcon size={20} className="text-on-surface-variant" />
        </button>
        <div className="relative max-w-md w-full hidden sm:block group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/60 group-focus-within:text-primary transition-colors" size={16} />
          <input 
            type="text" 
            placeholder="Rechercher une analyse, un défi..." 
            className="w-full pl-12 pr-4 py-3 bg-surface-container-low rounded-2xl border-none focus:ring-4 focus:ring-primary/5 text-sm font-medium transition-all placeholder:text-on-surface-variant/50"
          />
        </div>
      </div>
      <div className="flex items-center gap-3 md:gap-6">
        <div className="flex items-center gap-1">
          <button className="p-2.5 text-on-surface-variant hover:bg-surface-container-low rounded-xl relative transition-all cursor-pointer">
            <Bell size={18} />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white animate-pulse" />
          </button>
          <button onClick={() => setCurrentView('shop')} className="p-2.5 text-on-surface-variant hover:bg-surface-container-low rounded-xl transition-all cursor-pointer">
            <ShoppingBag size={18} />
          </button>
        </div>
        <div className="h-10 w-px bg-surface-container-high mx-2 hidden sm:block" />
        <div className="flex items-center gap-4 pl-2 group cursor-pointer">
          <div className="text-right hidden sm:block">
            <p className="text-[13px] font-bold leading-none text-on-surface">Alexandre D.</p>
            <p className="text-[9px] text-on-surface-variant font-semibold uppercase tracking-wider mt-1">Administrateur</p>
          </div>
          <div className="relative">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" 
              alt="Profile" 
              className="w-10 h-10 rounded-xl bg-surface-container-low border-2 border-white shadow-md group-hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -right-1 -bottom-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
          </div>
        </div>
      </div>
    </header>
  );
};
