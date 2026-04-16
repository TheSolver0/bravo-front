import React from 'react';
import { Search, Filter, ArrowRight, MessageSquare, Award } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { MOCK_BRAVOS } from '../constants';

export const History = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold">Historique</h1>
          <p className="text-sm text-on-surface-variant">Retrouvez tous les moments partagés.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 bg-white rounded-lg shadow-sm text-xs font-bold text-primary cursor-pointer border border-surface-container-high">Tous</button>
          <button className="px-3 py-1.5 text-xs font-bold text-on-surface-variant hover:text-on-surface cursor-pointer">Envoyés</button>
          <button className="px-3 py-1.5 text-xs font-bold text-on-surface-variant hover:text-on-surface cursor-pointer">Reçus</button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" size={18} />
          <input 
            type="text" 
            placeholder="Rechercher un message, un collègue..." 
            className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border-none shadow-sm focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl shadow-sm font-bold text-sm text-on-surface-variant hover:text-primary transition-all cursor-pointer">
          <Filter size={18} />
          <span>Filtres</span>
        </button>
      </div>

      <div className="space-y-4">
        {MOCK_BRAVOS.map((bravo) => (
          <Card key={bravo.id} className="hover:shadow-lg transition-all border-none bg-white/80 backdrop-blur-sm cursor-pointer">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center gap-4 shrink-0">
                <div className="flex -space-x-3">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${bravo.senderId}`} alt="" className="w-12 h-12 rounded-xl bg-surface-container-low border-2 border-white shadow-md" referrerPolicy="no-referrer" />
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white border-2 border-white shadow-md z-10">
                    <ArrowRight size={16} />
                  </div>
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${bravo.receiverId}`} alt="" className="w-12 h-12 rounded-xl bg-surface-container-low border-2 border-white shadow-md" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="flex-1 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-sm text-on-surface">Marcus D. <span className="text-on-surface-variant font-semibold mx-1">à</span> Sarah K.</p>
                    <p className="text-[10px] text-on-surface-variant font-semibold">{bravo.timestamp}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-secondary font-bold text-lg">
                    <Award size={18} />
                    +{bravo.points}
                  </div>
                </div>
                <div className="relative bg-surface-container-low/30 p-3 rounded-xl">
                  <MessageSquare size={20} className="absolute -left-2 -top-2 text-primary/20" />
                  <p className="text-sm text-on-surface-variant leading-relaxed italic">"{bravo.message}"</p>
                </div>
                <div className="flex gap-2">
                  {bravo.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
