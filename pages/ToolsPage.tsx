import React, { useState, useEffect, useMemo } from 'react';
import Sidebar from '../components/Sidebar';
import ToolCard from '../components/ToolCard';
import { TOOLS } from '../constants';

const ToolsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const filteredTools = useMemo(() => {
    const filtered = activeCategory === 'all' 
      ? TOOLS 
      : TOOLS.filter(t => t.category === activeCategory);
    
    // 排序逻辑：置顶项排在最前面
    return [...filtered].sort((a, b) => {
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      return 0;
    });
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredTools.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTools = filteredTools.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <Sidebar 
          activeCategory={activeCategory} 
          onSelectCategory={setActiveCategory} 
        />

        <div className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-8 bg-purple-600 rounded-full"></span>
              {activeCategory === 'all' ? '精选工具集' : `分类：${activeCategory}`}
            </h2>
            <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              共发现 <span className="text-purple-600 dark:text-purple-400 font-mono font-bold text-xl">{filteredTools.length}</span> 款神器
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {currentTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
          
          {filteredTools.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 text-slate-400">
              <span className="text-6xl mb-4">🏜️</span>
              <p className="text-lg">该分类下暂无工具，去看看其他的吧！</p>
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-16 flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-10">
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center gap-3 px-8 py-3 rounded-xl font-bold transition-all border ${
                  currentPage === 1 
                  ? 'opacity-10 cursor-not-allowed border-transparent text-slate-400' 
                  : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-purple-500 hover:text-purple-600 hover:bg-purple-500/5 active:scale-95'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                上一页
              </button>

              <div className="flex items-center">
                <div className="px-6 py-2 bg-slate-100 dark:bg-slate-800/50 rounded-full border border-slate-200 dark:border-slate-700">
                  <span className="text-sm font-black text-slate-900 dark:text-white font-mono tracking-tighter">
                    {currentPage} <span className="mx-3 text-slate-400 font-light opacity-60">/</span> {totalPages}
                  </span>
                </div>
              </div>

              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-3 px-8 py-3 rounded-xl font-bold transition-all border ${
                  currentPage === totalPages 
                  ? 'opacity-10 cursor-not-allowed border-transparent text-slate-400' 
                  : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-purple-500 hover:text-purple-600 hover:bg-purple-500/5 active:scale-95'
                }`}
              >
                下一页
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;