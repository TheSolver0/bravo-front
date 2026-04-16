import React from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  Lightbulb, 
  Users2, 
  Clock, 
  Heart, 
  Eye, 
  ArrowRight, 
  MessageSquare, 
  Award, 
  PlusCircle,
  Trophy,
  TrendingUp
} from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { View } from '../types';
import { MOCK_CHALLENGES, MOCK_BRAVOS, MOCK_USERS } from '../constants';

interface DashboardProps {
  setView: (v: View) => void;
}

export const Dashboard = ({ setView }: DashboardProps) => {
  const activeChallenge = MOCK_CHALLENGES.find(c => c.status === 'active');
  const sortedUsers = [...MOCK_USERS].sort((a, b) => b.points - a.points);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Hero Banner - Only if there's an active challenge */}
      {activeChallenge && (
        <div className="relative overflow-hidden rounded-2xl bg-primary p-6 md:p-10 text-white flex flex-col justify-between min-h-[280px] shadow-xl shadow-primary/20">
          <div className="relative z-10 space-y-4 max-w-xl">
            <div className="flex items-center gap-3">
              <Badge variant="warning" className="bg-secondary text-white border-none px-3 py-1 text-[10px]">NOUVEAU DÉFI</Badge>
              <div className="flex items-center gap-2 text-primary-100 font-bold text-sm">
                <Clock size={14} />
                <span className="text-xs">Plus que {activeChallenge.daysLeft} jours</span>
              </div>
            </div> 
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">{activeChallenge.title}</h1>
            <p className="text-primary-100/80 text-sm md:text-base font-medium leading-relaxed">{activeChallenge.description}</p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button variant="secondary" className="px-6 py-2 text-sm shadow-md shadow-secondary/40" onClick={() => setView('challenges')}>
                Participer maintenant
              </Button>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/10">
                <Award size={20} className="text-secondary" />
                <span className="font-extrabold text-base">+{activeChallenge.reward} pts</span>
              </div>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-10 pointer-events-none hidden lg:block">
            <img src="https://picsum.photos/seed/challenge/1000/800" alt="Challenge" className="object-cover h-full w-full" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent pointer-events-none" />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Bravos Feed (Main Element) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between px-1"> 
            <h2 className="text-lg font-extrabold tracking-tight flex items-center gap-2">
              <MessageSquare className="text-primary" size={20} />
              Flux des Bravos
            </h2>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl shadow-sm border border-surface-container-high">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest">12 en direct</span>
              </div>
              <Button variant="primary" className="shadow-md shadow-primary/20 px-4 py-2 text-xs" onClick={() => setView('create')}>
                <PlusCircle size={16} /> <span className="hidden sm:inline">Envoyer un Bravo</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {MOCK_BRAVOS.map((bravo, index) => (
              <motion.div
                key={bravo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 space-y-5 hover:shadow-xl transition-all duration-500 cursor-pointer border-none bg-white/80 backdrop-blur-md group relative overflow-hidden">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center -space-x-3">
                        <div className="relative group/avatar shrink-0">
                          <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${bravo.senderId}`} alt="" className="w-12 h-12 rounded-xl bg-surface-container-low ring-4 ring-white shadow-lg transition-transform group-hover/avatar:scale-110" referrerPolicy="no-referrer" />
                          <div className="absolute -right-1 -bottom-1 bg-primary text-white p-1 rounded-lg shadow-lg">
                            <ArrowRight size={12} />
                          </div>
                        </div>
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${bravo.receiverId}`} alt="" className="w-16 h-16 rounded-2xl bg-surface-container-low ring-4 ring-white shadow-xl transition-transform group-hover/avatar:scale-110" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-base text-on-surface">Félicitations !</span>
                          <Badge variant="primary" className="bg-primary/5 text-primary border-none">{bravo.tags[0]}</Badge>
                        </div>
                        <p className="text-sm text-on-surface-variant font-medium mt-1">
                          <span className="font-black text-primary">@{MOCK_USERS.find(u => u.id === bravo.senderId)?.name.split(' ')[0]}</span> a envoyé un bravo à <span className="font-black text-primary">@{MOCK_USERS.find(u => u.id === bravo.receiverId)?.name.split(' ')[0]}</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="flex items-center gap-1.5 text-secondary font-black text-2xl tracking-tighter">
                          <Award size={20} />
                          <span className="font-extrabold text-xl">+{bravo.points}</span>
                        </div>
                        <span className="text-[9px] font-semibold text-on-surface-variant uppercase tracking-wide">{bravo.timestamp}</span>
                      </div> 
                    </div>
                  </div>

                  <div className="bg-surface-container-low/50 p-4 rounded-xl relative group-hover:bg-primary/5 transition-colors">
                    <MessageSquare size={20} className="absolute -left-2 -top-2 text-primary/10" />
                    <p className="text-base text-on-surface-variant leading-relaxed font-medium italic">"{bravo.message}"</p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex gap-2">
                      {bravo.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-surface-container-high/50 text-on-surface-variant border-none">{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-xs font-bold uppercase tracking-wide">
                        <Heart size={18} /> 12
                      </button>
                      <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-xs font-bold uppercase tracking-wide">
                        <MessageSquare size={18} /> 4
                      </button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center pt-6">
            <button 
              onClick={() => setView('history')}
              className="p-3 rounded-full border border-primary/10 text-primary hover:bg-primary/5 transition-all shadow-sm flex items-center justify-center group cursor-pointer"
              title="Charger plus de bravos"
            >
              <PlusCircle size={24} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Right Column: Leaderboard */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center justify-between px-1"> 
            <h2 className="text-lg font-extrabold tracking-tight flex items-center gap-2">
              <Trophy className="text-secondary" size={20} />
              Classement
            </h2>
            <button onClick={() => setView('stats')} className="text-primary text-xs font-black hover:underline uppercase tracking-widest cursor-pointer">Voir tout</button>
          </div>
          
          <Card className="p-0 overflow-hidden border-none shadow-lg bg-white/80 backdrop-blur-md">
            <div className="p-5 bg-gradient-to-br from-primary to-primary-container text-white"> 
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wide opacity-70">Top Performeurs</span>
                <TrendingUp size={16} className="text-secondary" />
              </div>
              <div className="flex items-end justify-around pb-2">
                {/* Mini Podium */}
                <div className="flex flex-col items-center gap-2">
                  <div className="relative">
                    <img src={sortedUsers[1].avatar} alt="" className="w-12 h-12 rounded-full border-2 border-white/30" referrerPolicy="no-referrer" /> 
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-surface-container-high rounded-full flex items-center justify-center text-[10px] font-bold text-on-surface border-2 border-white">2</div>
                  </div>
                  <span className="text-[10px] font-bold opacity-80 truncate w-16 text-center">{sortedUsers[1].name.split(' ')[0]}</span>
                </div>
                <div className="flex flex-col items-center gap-2 scale-110">
                  <div className="relative">
                    <img src={sortedUsers[0].avatar} alt="" className="w-16 h-16 rounded-full border-4 border-secondary shadow-lg" referrerPolicy="no-referrer" /> 
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-[10px] font-extrabold text-white border-2 border-white">1</div>
                  </div>
                  <span className="text-[10px] font-bold truncate w-16 text-center">{sortedUsers[0].name.split(' ')[0]}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="relative">
                    <img src={sortedUsers[2].avatar} alt="" className="w-12 h-12 rounded-full border-2 border-white/30" referrerPolicy="no-referrer" /> 
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-secondary/50 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-white">3</div>
                  </div>
                  <span className="text-[10px] font-bold opacity-80 truncate w-16 text-center">{sortedUsers[2].name.split(' ')[0]}</span>
                </div>
              </div>
            </div>
            
            <div className="divide-y divide-surface-container-low">
              {sortedUsers.slice(0, 6).map((user, index) => (
                <div key={user.id} className="flex items-center justify-between p-4 hover:bg-primary/5 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <span className={`text-[10px] font-black w-3 ${index < 3 ? 'text-primary' : 'text-on-surface-variant'}`}>{index + 1}</span>
                    <img src={user.avatar} alt="" className="w-10 h-10 rounded-xl bg-surface-container-low" referrerPolicy="no-referrer" /> 
                    <div>
                      <p className="text-sm font-bold group-hover:text-primary transition-colors">{user.name}</p>
                      <p className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-wide">{user.department}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black text-on-surface">{user.points}</p>
                    <p className="text-[8px] font-black text-on-surface-variant uppercase tracking-widest">pts</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-surface-container-low/30"> 
              <Button variant="ghost" className="w-full text-xs font-extrabold tracking-wide py-3" onClick={() => setView('stats')}>
                VOIR TOUT LE CLASSEMENT
              </Button>
            </div>
          </Card>

          {/* Points Card */}
          <Card className="flex flex-col justify-between border-none bg-primary/5 border-primary/10"> 
            <div className="space-y-2"> 
              <h3 className="text-primary font-black uppercase tracking-widest text-[10px]">Ton Score Actuel</h3>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-black text-primary tracking-tighter">2,450</span>
                <span className="text-primary/60 font-black text-xs uppercase">pts</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-primary/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-semibold text-on-surface-variant uppercase">Prochain palier</span>
                <span className="text-[10px] font-black text-primary">3,000 pts</span>
              </div>
              <div className="h-2 bg-white rounded-full overflow-hidden shadow-inner">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '82%' }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
