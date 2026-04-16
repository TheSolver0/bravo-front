import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Users2, MessageSquare, Award, PlusCircle, Search, XCircle, Sparkles } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { View } from '../types';
import { MOCK_USERS } from '../constants';

interface CreateBravoProps {
  setView: (v: View) => void;
}

export const CreateBravo = ({ setView }: CreateBravoProps) => {
  const [selectedRecipient, setSelectedRecipient] = useState<typeof MOCK_USERS[0] | null>(null);
  const [message, setMessage] = useState<string>('');
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [points, setPoints] = useState<number>(50); // Default points
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredUsers, setFilteredUsers] = useState<typeof MOCK_USERS>([]);

  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const availableValues = [
    { label: 'Autonomie', color: 'orange' },
    { label: 'Esprit d\'équipe', color: 'blue' },
    { label: 'Efficacité', color: 'yellow' },
    { label: 'Innovation', color: 'purple' },
    { label: 'Qualité', color: 'green' },
    { label: 'Leadership', color: 'red' },
    { label: 'Proactivité', color: 'teal' },
  ];

  // Filter users based on search term
  useEffect(() => {
    if (searchTerm) {
      setFilteredUsers(
        MOCK_USERS.filter(user =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredUsers([]);
    }
  }, [searchTerm]);

  // Handle point slider drag
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;

    const sliderRect = sliderRef.current.getBoundingClientRect();
    let newPosition = e.clientX - sliderRect.left;
    newPosition = Math.max(0, Math.min(newPosition, sliderRect.width));

    const percentage = newPosition / sliderRect.width;
    // Points range from 25 to 200, in steps of 25
    const minPoints = 25;
    const maxPoints = 200;
    const step = 25;

    const rawPoints = minPoints + Math.round((percentage * (maxPoints - minPoints)) / step) * step;
    setPoints(rawPoints);
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleValueToggle = (valueLabel: string) => {
    setSelectedValues(prev =>
      prev.includes(valueLabel)
        ? prev.filter(v => v !== valueLabel)
        : [...prev, valueLabel]
    );
  };

  const handleRephraseMessage = () => {
    // Simulate AI rephrasing
    if (message.length > 10) {
      setMessage("C'est une excellente initiative ! Votre message a été reformulé pour un impact maximal.");
    } else {
      setMessage("Un message plus long serait idéal pour la reformulation IA !");
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-extrabold tracking-tight">Envoyer un Bravo</h1>
        <p className="text-sm text-on-surface-variant font-medium">Célébrez le travail exceptionnel d'un collègue.</p>
      </div>

      <Card className="p-6 space-y-6 border-none shadow-xl bg-white/80 backdrop-blur-md">
        <div className="space-y-4">
          <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Destinataire</label>
          {selectedRecipient ? (
            <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low border border-primary/30 shadow-sm relative">
              <img src={selectedRecipient.avatar} alt={selectedRecipient.name} className="w-10 h-10 rounded-full" referrerPolicy="no-referrer" />
              <span className="font-bold text-on-surface">{selectedRecipient.name}</span>
              <button onClick={() => setSelectedRecipient(null)} className="absolute top-1 right-1 text-on-surface-variant hover:text-red-500 transition-colors p-1 rounded-full">
                <XCircle size={18} />
              </button>
            </div>
          ) : (
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/60" size={16} />
              <input
                type="text"
                placeholder="Rechercher un collègue..."
                className="w-full pl-12 pr-4 py-3 bg-surface-container-low rounded-xl border-none focus:ring-4 focus:ring-primary/5 text-sm font-medium transition-all placeholder:text-on-surface-variant/50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && filteredUsers.length > 0 && (
                <div className="absolute z-10 w-full bg-white border border-surface-container-high rounded-xl shadow-lg mt-2 max-h-60 overflow-y-auto">
                  {filteredUsers.map(user => (
                    <button
                      key={user.id}
                      className="flex items-center gap-3 p-3 w-full text-left hover:bg-surface-container-low transition-colors"
                      onClick={() => {
                        setSelectedRecipient(user);
                        setSearchTerm('');
                      }}
                    >
                      <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" referrerPolicy="no-referrer" />
                      <span className="font-medium text-on-surface">{user.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="space-y-4">
          <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Votre Message</label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 text-on-surface-variant/60" size={16} />
            <textarea
              placeholder="Décrivez pourquoi ce collègue mérite un bravo..."
              className="w-full pl-12 pr-4 py-3 bg-surface-container-low rounded-xl border-none min-h-[120px] focus:ring-4 focus:ring-primary/5 text-sm font-medium transition-all placeholder:text-on-surface-variant/50"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              variant="ghost"
              className="absolute bottom-2 right-2 text-xs font-bold text-primary hover:bg-primary/10 px-3 py-1.5"
              onClick={handleRephraseMessage}
            >
              <Sparkles size={14} /> Rephraser (IA)
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Valeurs Illustrées</label>
          <div className="flex flex-wrap gap-2">
            {availableValues.map(val => (
              <button
                key={val.label}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedValues.includes(val.label)
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-primary/10 hover:text-primary'
                }`}
                onClick={() => handleValueToggle(val.label)}
              >
                {val.label}
              </button>
            ))}
          </div>
          {selectedValues.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-xs font-semibold text-on-surface-variant">Sélectionné(s) :</span>
              {selectedValues.map(val => (
                <Badge key={val} variant="primary" className="bg-primary/10 text-primary border-none text-xs">
                  {val}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Points Attribués</label>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-primary">+{points}</span>
              <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Points</span>
            </div>
          </div>
          <div
            ref={sliderRef}
            className="relative h-2 bg-surface-container-low rounded-full shadow-inner cursor-pointer"
            onMouseDown={handleMouseDown}
          >
            <div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary/60 to-primary rounded-full shadow-lg"
              style={{ width: `${((points - 25) / (200 - 25)) * 100}%` }} // Calculate width based on points
            />
            <div
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white border-3 border-primary rounded-full shadow-xl cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
              style={{ left: `${((points - 25) / (200 - 25)) * 100}%` }} // Position handle based on points
            />
          </div>
        </div>

        <div className="pt-4 space-y-4">
          <Button className="w-full py-2.5 text-sm shadow-md shadow-primary/20" onClick={() => setView('dashboard')}>
            <PlusCircle size={18} /> Envoyer le Bravo
          </Button>
          <p className="text-center text-[10px] text-on-surface-variant font-black uppercase tracking-widest">Le destinataire recevra une notification immédiate.</p>
        </div>
      </Card>
    </div>
  );
};
