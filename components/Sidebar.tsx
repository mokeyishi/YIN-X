
import React from 'react';
import { CATEGORIES } from '../constants';

interface SidebarProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeCategory, onSelectCategory }) => {
  return (
    <div className="w-full lg:w-72 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 h-fit sticky top-24 transition-colors duration-500">
      <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 px-2">全部分类</h2>
      <div className="space-y-1">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group border ${
              activeCategory === cat.id 
                ? 'bg-purple-600/10 text-purple-600 dark:text-purple-400 border-purple-500/30 dark:bg-purple-600/20 shadow-sm' 
                : 'text-slate-500 dark:text-slate-400 border-transparent hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200 hover:shadow-sm'
            }`}
          >
            <span className="text-xl group-hover:scale-110 transition-transform">{cat.icon}</span>
            <span className="text-sm font-semibold">{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
