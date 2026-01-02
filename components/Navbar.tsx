
import React from 'react';
import { NavItem } from '../types';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between transition-colors duration-500">
      <div 
        className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent cursor-pointer flex items-center gap-2"
        onClick={() => onNavigate('/')}
      >
        <span className="text-3xl">✨</span> YIN-X
      </div>
      
      <div className="flex items-center gap-8">
        <div className="flex items-center space-x-10">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.path}
              onClick={() => onNavigate(item.path)}
              className={`text-[15px] font-semibold transition-all duration-200 relative py-1 ${
                currentPath === item.path 
                  ? 'text-purple-600 dark:text-purple-400' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {item.label}
              {currentPath === item.path && (
                <div className="absolute -bottom-1 left-0 h-0.5 w-full bg-purple-600 dark:bg-purple-400 rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4 pl-4 border-l border-slate-200 dark:border-slate-800">
          <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sm border border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-500">
            👋
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
