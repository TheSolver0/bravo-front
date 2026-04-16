export type View = 'dashboard' | 'team' | 'history' | 'shop' | 'create' | 'stats' | 'challenges';

export interface User {
  id: string;
  name: string;
  role: string;
  department: string;
  points: number;
  avatar: string;
  status?: 'online' | 'offline' | 'busy';
  badges?: string[];
}

export interface Bravo {
  id: string;
  senderId: string;
  receiverId: string;
  message: string;
  points: number;
  timestamp: string;
  tags: string[];
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  reward: number;
  progress: number;
  daysLeft: number;
  type: 'innovation' | 'mentoring' | 'wellness' | 'coding';
  status: 'active' | 'completed';
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  cost: number;
  image: string;
  category: 'vouchers' | 'tickets' | 'experiences' | 'equipment';
}
