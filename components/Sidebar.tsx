
import React, { useState } from 'react';
import { CATEGORIES } from '../constants';

interface SidebarProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeCategory, onSelectCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  // 获取当前激活分类的详细信息，用于移动端显示
  const currentCategory = CATEGORIES.find(c => c.id === activeCategory) || CATEGORIES[0];

  return (
    <div className="w-full lg:w-72 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 lg:sticky lg:top-24 lg:self-start h-fit transition-colors duration-500 shadow-sm lg:shadow-none lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto custom-scrollbar">
      
      {/* 移动端/平板端 切换标题栏 */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full lg:hidden flex items-center justify-between px-6 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 active:bg-slate-50 dark:active:bg-slate-800 transition-colors rounded-t-2xl"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{currentCategory.icon}</span>
          <span className="font-bold">{currentCategory.name}</span>
        </div>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* 桌面端固定标题 (在移动端隐藏) */}
      <div className="hidden lg:block p-4 pb-0">
        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 px-2 flex items-center gap-2">
          <span className="w-1.5 h-4 bg-purple-600 rounded-full"></span>
          全部分类
        </h2>
      </div>

      {/* 分类列表内容：移动端根据 isOpen 切换，桌面端始终显示 */}
      <div className={`p-4 space-y-1 ${isOpen ? 'block animate-in fade-in slide-in-from-top-2 duration-300' : 'hidden lg:block'}`}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              onSelectCategory(cat.id);
              setIsOpen(false); // 选中后自动收起
            }}
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
      
      {/* 桌面端底部留白 */}
      <div className="hidden lg:block h-2"></div>
    </div>
  );
};

export default Sidebar;
