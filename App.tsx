import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CalendarView from './components/CalendarView';
import ContentGenerator from './components/ContentGenerator';
import StrategyGuide from './components/StrategyGuide';
import { Tab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.DASHBOARD);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.DASHBOARD:
        return <Dashboard />;
      case Tab.CALENDAR:
        return <CalendarView />;
      case Tab.GENERATOR:
        return <ContentGenerator />;
      case Tab.STRATEGY:
        return <StrategyGuide />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-64'} p-4 lg:p-10 pt-20 lg:pt-10`}>
        {renderContent()}
      </main>
    </div>
  );
};

export default App;