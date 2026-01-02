import React, { useState } from 'react';
import { CATEGORIES } from '../constants';

interface SidebarProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeCategory, onSelectCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  // 获取当前激活分类的详细信息
  const currentCategory = CATEGORIES.find(c => c.id === activeCategory) || CATEGORIES[0];

  return (
    <div className="w-full lg:w-72 bg-white dark:bg-slate-900 lg:bg-slate-50 lg:dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 lg:sticky lg:top-24 lg:self-start h-fit transition-all duration-500 shadow-sm lg:shadow-none lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto z-40">
      
      {/* 移动端/平板端显示：点击切换展开状态 */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full lg:hidden flex items-center justify-between px-6 py-4 text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 active:bg-slate-50 dark:active:bg-slate-800 transition-colors rounded-t-2xl"
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

      {/* 桌面端显示的标题 */}
      <div className="hidden lg:block p-4 pb-0">
        <h2 className="text-sm font-black text-slate-400 dark:text-slate-500 mb-4 px-2 flex items-center gap-2 uppercase tracking-[0.2em]">
          Category / 分类导航
        </h2>
      </div>

      {/* 分类列表内容：移动端折叠，桌面端常驻 */}
      <div className={`p-4 space-y-1 ${isOpen ? 'block animate-in fade-in slide-in-from-top-2 duration-300' : 'hidden lg:block'}`}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              onSelectCategory(cat.id);
              setIsOpen(false); // 选中后在移动端自动收起
            }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group border ${
              activeCategory === cat.id 
                ? 'bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-500/20' 
                : 'text-slate-500 dark:text-slate-400 border-transparent hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200 hover:shadow-sm'
            }`}
          >
            <span className={`text-xl transition-transform ${activeCategory === cat.id ? 'scale-110' : 'group-hover:scale-110 grayscale group-hover:grayscale-0'}`}>
              {cat.icon}
            </span>
            <span className="text-sm font-bold">{cat.name}</span>
            {activeCategory === cat.id && (
              <div className="ml-auto w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
            )}
          </button>
        ))}
      </div>
      
      {/* 桌面端辅助装饰 */}
      <div className="hidden lg:block h-4"></div>
    </div>
  );
};

export default Sidebar;