import React from 'react';
import { Tab } from '../types';
import { LayoutDashboard, Calendar, Sparkles, BookOpen, Menu, X } from 'lucide-react';

interface SidebarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, isOpen, setIsOpen }) => {
  const menuItems = [
    { id: Tab.DASHBOARD, label: 'Visão Geral', icon: LayoutDashboard },
    { id: Tab.CALENDAR, label: 'Calendário Semanal', icon: Calendar },
    { id: Tab.GENERATOR, label: 'Gerador Mágico', icon: Sparkles },
    { id: Tab.STRATEGY, label: 'Guia da Estratégia', icon: BookOpen },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-purple-600 text-white rounded-md shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full bg-white border-r border-slate-200 w-64 transition-transform duration-300 z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 border-b border-slate-100 flex items-center justify-center flex-col">
           <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
             <span className="text-3xl">🧙‍♂️</span>
           </div>
           <h1 className="font-bold text-xl text-purple-700">Dr. Botica</h1>
           <p className="text-xs text-slate-500 uppercase tracking-wide mt-1">Assis Chateaubriand</p>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={`
                  w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors font-medium
                  ${isActive 
                    ? 'bg-purple-50 text-purple-700' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-purple-600'}
                `}
              >
                <Icon size={20} className={isActive ? 'text-purple-600' : 'text-slate-400'} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-white to-transparent">
          <div className="bg-green-50 p-4 rounded-xl border border-green-100">
            <p className="text-sm text-green-800 font-semibold mb-1">Meta Principal</p>
            <p className="text-xs text-green-700">Aumentar vendas do Combo Sabonete + Loção</p>
          </div>
        </div>
      </div>
      
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;