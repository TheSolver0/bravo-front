import React from 'react';
import { Search, Filter, Grid, List as ListIcon, MessageSquare, Award } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { MOCK_USERS } from '../constants';

export const Team = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold">Répertoire d'Équipe</h1>
          <p className="text-on-surface-variant">Découvrez vos collègues et célébrez leurs réussites.</p>
        </div>
        <div className="flex items-center gap-2 bg-surface-container-low p-1 rounded-xl">
          {['Tous', 'Marketing', 'Design', 'Ingénierie'].map((tab, i) => (
            <button key={tab} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer ${i === 0 ? 'bg-white shadow-sm text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" size={18} />
          <input 
            type="text" 
            placeholder="Rechercher un collègue..." 
            className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border-none shadow-sm focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="flex gap-2">
          <button className="p-3 bg-white rounded-xl shadow-sm text-on-surface-variant hover:text-primary transition-all cursor-pointer">
            <Filter size={20} />
          </button>
          <div className="bg-white rounded-xl shadow-sm p-1 flex">
            <button className="p-2 bg-primary/10 text-primary rounded-lg cursor-pointer">
              <Grid size={20} />
            </button>
            <button className="p-2 text-on-surface-variant cursor-pointer">
              <ListIcon size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {MOCK_USERS.map((user) => (
          <Card key={user.id} className="group hover:shadow-xl transition-all duration-300 border-none bg-white/80 backdrop-blur-sm cursor-pointer">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="w-24 h-24 rounded-2xl bg-surface-container-low border-4 border-white shadow-lg group-hover:scale-105 transition-transform"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute -right-1 -bottom-1 w-5 h-5 rounded-full border-2 border-white ${user.status === 'online' ? 'bg-green-500' : user.status === 'busy' ? 'bg-red-500' : 'bg-gray-400'}`} />
              </div>
              <div>
                <h3 className="font-black text-lg text-on-surface">{user.name}</h3>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{user.role}</p>
              </div>
              <div className="flex flex-wrap justify-center gap-1">
                {user.badges?.map(badge => (
                  <Badge key={badge} variant="primary">{badge}</Badge>
                ))}
              </div>
              <div className="w-full pt-4 border-t border-surface-container-low flex items-center justify-between">
                <div className="text-left">
                  <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Points</p>
                  <p className="font-black text-primary">{user.points}</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded-lg transition-all cursor-pointer">
                    <MessageSquare size={18} />
                  </button>
                  <button className="p-2 text-on-surface-variant hover:text-secondary hover:bg-secondary/10 rounded-lg transition-all cursor-pointer">
                    <Award size={18} />
                  </button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
