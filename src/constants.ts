import { User, Bravo, Challenge, Reward } from './types';

export const MOCK_USERS: User[] = [
  {
    id: '1',
    name: 'Sarah Kamau',
    role: 'Directrice Artistique',
    department: 'Design',
    points: 1250,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    status: 'online',
    badges: ['CRÉATIVITÉ', 'LEADERSHIP']
  },
  {
    id: '2',
    name: 'Marcus Diallo',
    role: 'Développeur Senior',
    department: 'Ingénierie',
    points: 840,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
    status: 'busy',
    badges: ['EXPERTISE', 'ENTRAIDE']
  },
  {
    id: '3',
    name: 'Léa Traoré',
    role: 'Product Owner',
    department: 'Produit',
    points: 690,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lea',
    status: 'online',
    badges: ['VISION', 'RIGUEUR']
  },
  {
    id: '4',
    name: 'David Okoro',
    role: 'Growth Manager',
    department: 'Marketing',
    points: 2100,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    status: 'offline',
    badges: ['IMPACT', 'AGILITÉ']
  },
  {
    id: '5',
    name: 'Jordan M\'Beki',
    role: 'Fullstack Dev',
    department: 'Ingénierie',
    points: 540,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan',
    status: 'online',
    badges: ['LOGIQUE', 'PASSION']
  },
  {
    id: '6',
    name: 'Amandine Diop',
    role: 'UX Designer',
    department: 'Design',
    points: 1100,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amandine',
    status: 'online',
    badges: ['EMPATHIE', 'INNOVATION']
  }
];

export const MOCK_BRAVOS: Bravo[] = [
  {
    id: 'b1',
    senderId: '2',
    receiverId: '1',
    message: "Un immense merci pour ton autonomie sur la phase de déploiement. Tu as su anticiper tous les risques techniques sans même qu'on ait besoin d'en discuter. Quel gain de temps pour l'équipe !",
    points: 150,
    timestamp: 'Il y a 2 heures',
    tags: ['Autonomie', 'Expertise']
  },
  {
    id: 'b2',
    senderId: '1',
    receiverId: '2',
    message: "Merci pour ton esprit d'équipe sur la présentation finale. Ton aide sur les visuels a vraiment fait la différence.",
    points: 50,
    timestamp: 'Hier, 14:30',
    tags: ["Esprit d'Équipe"]
  },
  {
    id: 'b3',
    senderId: '3',
    receiverId: '1',
    message: "L'efficacité dont tu as fait preuve pour résoudre le bug du client VIP a sauvé notre renouvellement de contrat. Travail impeccable et hyper rapide !",
    points: 300,
    timestamp: 'Le 15 Octobre',
    tags: ['Efficacité', 'Qualité']
  }
];

export const MOCK_CHALLENGES: Challenge[] = [
  {
    id: 'c1',
    title: 'Sprint Innovation',
    description: 'Proposez une idée pour améliorer nos processus internes et recevez des votes de vos pairs.',
    reward: 500,
    progress: 75,
    daysLeft: 2,
    type: 'innovation',
    status: 'active'
  },
  {
    id: 'c2',
    title: 'Mentor du Mois',
    description: 'Accompagnez un nouveau collaborateur pendant ses 30 premiers jours chez Bravo.',
    reward: 800,
    progress: 30,
    daysLeft: 14,
    type: 'mentoring',
    status: 'active'
  },
  {
    id: 'c3',
    title: 'Bien-être au travail',
    description: 'Participez aux séances de sport collectives.',
    reward: 250,
    progress: 100,
    daysLeft: 0,
    type: 'wellness',
    status: 'completed'
  }
];

export const MOCK_REWARDS: Reward[] = [
  {
    id: 'r1',
    title: 'Bon Amazon 20€',
    description: 'Valable sur tout le catalogue Amazon.fr sans minimum d\'achat.',
    cost: 2000,
    image: 'https://picsum.photos/seed/amazon/400/300',
    category: 'vouchers'
  },
  {
    id: 'r2',
    title: 'Ticket Cinéma Duo',
    description: 'Deux places valables dans tous les cinémas Gaumont et Pathé.',
    cost: 1500,
    image: 'https://picsum.photos/seed/cinema/400/300',
    category: 'tickets'
  },
  {
    id: 'r3',
    title: 'Journée de congé',
    description: 'Prenez une journée pour vous, entièrement rémunérée. Bravo !',
    cost: 5000,
    image: 'https://picsum.photos/seed/vacation/400/300',
    category: 'experiences'
  },
  {
    id: 'r4',
    title: 'Casque Bose QC',
    description: 'Réduction de bruit premium pour un focus total au bureau.',
    cost: 12000,
    image: 'https://picsum.photos/seed/headphones/400/300',
    category: 'equipment'
  }
];
