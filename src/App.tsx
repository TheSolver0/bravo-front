import React from 'react';
import { View } from './types';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { MobileNav } from './components/layout/MobileNav';
import { Dashboard } from './pages/Dashboard';
import { Team } from './pages/Team';
import { History } from './pages/History';
import { Shop } from './pages/Shop';
import { CreateBravo } from './pages/CreateBravo';
import { Stats } from './pages/Stats';

// --- Main App Component ---

export default function App() {
  const [currentView, setCurrentView] = React.useState<View>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  return (
    <div className="min-h-screen flex bg-surface">
      {/* Sidebar */}
      <Sidebar 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
        isSidebarOpen={isSidebarOpen} 
      />

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-500 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
        {/* Header */}
        <Header 
          isSidebarOpen={isSidebarOpen} 
          setIsSidebarOpen={setIsSidebarOpen} 
          setCurrentView={setCurrentView} 
        />

        {/* View Container */}
        <div className="p-6 md:p-10 max-w-7xl mx-auto pb-32 md:pb-10">
          {currentView === 'dashboard' && <Dashboard setView={setCurrentView} />}
          {currentView === 'team' && <Team />}
          {currentView === 'history' && <History />}
          {currentView === 'shop' && <Shop />}
          {currentView === 'create' && <CreateBravo setView={setCurrentView} />}
          {currentView === 'stats' && <Stats />}
          {currentView === 'challenges' && <Dashboard setView={setCurrentView} />} {/* Reuse for now */}
        </div>
      </main>

      {/* Mobile Nav */}
      <MobileNav 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
      />
    </div>
  );
}
