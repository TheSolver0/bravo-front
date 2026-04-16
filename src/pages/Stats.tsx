import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Activity, 
  Award, 
  Zap, 
  Users2, 
  Clock, 
  Trophy 
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { MOCK_USERS } from '../constants';

export const Stats = () => {
  const chartData = [
    { name: 'S1', bravos: 12 },
    { name: 'S2', bravos: 18 },
    { name: 'S3', bravos: 15 },
    { name: 'S4', bravos: 45 },
    { name: 'S5', bravos: 38 },
  ];

  const valueData = [
    { name: 'Autonomie', value: 45, color: '#f97316', icon: Zap },
    { name: 'Esprit d\'équipe', value: 38, color: '#3b82f6', icon: Users2 },
    { name: 'Efficacité', value: 17, color: '#eab308', icon: Clock },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight">Statistiques</h1>
          <p className="text-sm text-on-surface-variant font-medium">Visualisez l'impact de l'équipe.</p>
        </div>
        <div className="flex items-center gap-2 bg-surface-container-low p-1 rounded-xl shadow-inner">
          {['Ce mois', 'Trimestre', 'Année'].map((tab, i) => (
            <button key={tab} className={`px-4 py-2 rounded-lg text-xs font-black transition-all ${i === 0 ? 'bg-white shadow-md text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="space-y-4 border-none bg-white/80 backdrop-blur-md relative overflow-hidden group">
          <div className="relative z-10 space-y-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Total points accumulés</span>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black tracking-tighter">12,480</span>
              <span className="text-sm font-black text-green-500 bg-green-50 px-2 py-1 rounded-lg">+12%</span>
            </div>
            <p className="text-xs text-on-surface-variant font-medium leading-relaxed">Félicitations ! Vous êtes dans le top 5% des contributeurs ce mois-ci.</p>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform duration-500">
            <TrendingUp size={120} />
          </div>
        </Card>
        
        <Card className="space-y-4 border-none bg-white/80 backdrop-blur-md">
          <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Moyenne / Personne</span>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black tracking-tighter">840</span>
          </div>
          <div className="space-y-3">
            <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest">Équipe: Marketing Digital</p>
            <div className="h-2.5 bg-surface-container-low rounded-full overflow-hidden shadow-inner">
              <div className="h-full bg-gradient-to-r from-primary/60 to-primary w-3/4 rounded-full shadow-lg" />
            </div>
          </div>
        </Card>

        <Card className="space-y-4 border-none bg-white/80 backdrop-blur-md">
          <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Taux d'engagement</span>
          <div className="flex items-center justify-between">
            <span className="text-4xl font-black tracking-tighter">94%</span>
            <div className="p-3 bg-orange-50 text-orange-600 rounded-2xl shadow-sm">
              <Activity size={24} />
            </div>
          </div>
          <div className="h-2.5 bg-surface-container-low rounded-full overflow-hidden shadow-inner">
            <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600 w-[94%] rounded-full shadow-lg" />
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 space-y-8 border-none bg-white/80 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-black tracking-tight">Évolution de l'engagement</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
                <div className="w-3 h-3 rounded-full bg-primary shadow-sm" />
                Bravos
              </div>
            </div>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorBravos" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fontWeight: 800, fill: '#64748b' }} 
                  dy={10}
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '16px', 
                    border: 'none', 
                    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
                    padding: '12px 16px'
                  }}
                  itemStyle={{ fontWeight: 800, color: '#3b82f6' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="bravos" 
                  stroke="#3b82f6" 
                  strokeWidth={4}
                  fillOpacity={1} 
                  fill="url(#colorBravos)" 
                  animationDuration={2000}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="bg-primary/5 border-none flex flex-col justify-between p-10 relative overflow-hidden group">
          <div className="space-y-10 relative z-10">
            <h3 className="text-2xl font-black tracking-tight">Bravos : Flux</h3>
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-black uppercase tracking-widest">
                  <span className="text-primary">Envoyés</span>
                  <span className="text-on-surface text-lg">142</span>
                </div>
                <div className="h-4 bg-white rounded-full overflow-hidden shadow-inner">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 2, ease: "circOut" }}
                    className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full shadow-lg" 
                  />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-black uppercase tracking-widest">
                  <span className="text-orange-600">Reçus</span>
                  <span className="text-on-surface text-lg">98</span>
                </div>
                <div className="h-4 bg-white rounded-full overflow-hidden shadow-inner">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '65%' }}
                    transition={{ duration: 2, ease: "circOut", delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full shadow-lg" 
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl mt-12 shadow-xl border border-white/20 relative z-10">
            <p className="text-sm text-on-surface-variant italic text-center leading-relaxed font-medium">
              "Votre générosité booste le moral de l'équipe. Continuez à valoriser les efforts de vos collègues !"
            </p>
          </div>
          <div className="absolute -right-10 -top-10 opacity-5 group-hover:rotate-12 transition-transform duration-700">
            <Award size={240} />
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="space-y-8 border-none bg-white/80 backdrop-blur-md">
          <h3 className="text-xl font-black tracking-tight">Répartition par Valeurs</h3>
          <div className="space-y-8">
            {valueData.map((item) => (
              <div key={item.name} className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-surface-container-low">
                      <item.icon size={18} style={{ color: item.color }} />
                    </div>
                    <span className="text-sm font-black">{item.name}</span>
                  </div>
                  <span className="text-sm font-black text-on-surface-variant">{item.value}%</span>
                </div>
                <div className="h-2.5 bg-surface-container-low rounded-full overflow-hidden shadow-inner">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${item.value}%` }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="h-full rounded-full shadow-lg" 
                    style={{ backgroundColor: item.color }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="lg:col-span-2 bg-primary text-white p-0 overflow-hidden relative border-none shadow-2xl shadow-primary/30 group">
          <div className="p-10 space-y-8 relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-black tracking-tight">Champions de la semaine</h3>
                <p className="text-white/70 text-sm font-medium mt-1">Les contributeurs les plus actifs de la communauté.</p>
              </div>
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md">
                <Trophy size={32} className="text-secondary" />
              </div>
            </div>
            <div className="space-y-4">
              {MOCK_USERS.slice(0, 3).map((user, i) => (
                <div key={user.id} className="flex items-center justify-between p-5 bg-white/10 rounded-2xl backdrop-blur-md border border-white/5 hover:bg-white/20 transition-all cursor-pointer group/item">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img src={user.avatar} alt="" className="w-14 h-14 rounded-full border-2 border-white/20 shadow-lg" referrerPolicy="no-referrer" />
                      <div className={`absolute -right-1 -bottom-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black shadow-lg ${i === 0 ? 'bg-yellow-400 text-yellow-900' : i === 1 ? 'bg-gray-300 text-gray-700' : 'bg-orange-300 text-orange-900'}`}>
                        {i + 1}
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-black">{user.name}</p>
                      <p className="text-xs font-bold text-white/60 uppercase tracking-widest">{user.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-secondary tracking-tighter">{2450 - i * 530}</span>
                    <span className="text-[10px] font-black opacity-60 uppercase tracking-widest ml-1">pts</span>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full text-white hover:bg-white/10 border-white/10 border py-2.5 text-xs font-bold tracking-wide">
              VOIR LE CLASSEMENT COMPLET
            </Button>
          </div>
          <div className="absolute right-[-40px] top-[-40px] opacity-10 group-hover:scale-110 transition-transform duration-1000">
            <Trophy size={300} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-container pointer-events-none" />
        </Card>
      </div>
    </div>
  );
};
