import React, { useState, useMemo, useEffect } from 'react';
import { ARTICLES } from '../constants';

interface ArticlesPageProps {
  onNavigate: (path: string) => void;
}

const ArticlesPage: React.FC<ArticlesPageProps> = ({ onNavigate }) => {
  // 核心变更：将 selectedTag 改为 selectedCategory
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 

  // 1. 动态提取所有文章中的有效“分类 (Category)”
  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    categories.add('全部');
    ARTICLES.forEach(article => {
      if (article.category) categories.add(article.category);
    });
    return Array.from(categories);
  }, []);

  // 2. 如果当前选中的分类在数据源中已不存在，自动重置为“全部”
  useEffect(() => {
    if (!allCategories.includes(selectedCategory)) {
      setSelectedCategory('全部');
    }
  }, [allCategories, selectedCategory]);

  // 3. 过滤并排序（基于 Category 过滤）
  const filteredAndSortedArticles = useMemo(() => {
    const filtered = selectedCategory === '全部' 
      ? ARTICLES 
      : ARTICLES.filter(article => article.category === selectedCategory);
    
    return [...filtered].sort((a, b) => {
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      return 0;
    });
  }, [selectedCategory]);

  // 切换分类时重置页码
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredAndSortedArticles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentArticles = filteredAndSortedArticles.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 animate-in fade-in duration-700">
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="w-12 h-1 bg-purple-600 rounded-full"></span>
          <span className="text-purple-600 font-black tracking-widest text-xs uppercase">Instructional Guides</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-tight">教程文章</h2>
          <div className="text-slate-400 text-sm font-medium bg-slate-100 dark:bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800">
            总数：<span className="text-purple-600 font-bold">{ARTICLES.length}</span> 篇
          </div>
        </div>
        
        {/* 分类过滤栏 */}
        <div className="flex flex-wrap gap-3 pb-4">
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border ${
                selectedCategory === cat
                ? 'bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-600/30 scale-105'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:border-purple-500/50 hover:text-purple-600'
              }`}
            >
              {cat}
              {cat !== '全部' && (
                <span className="ml-2 opacity-40 font-mono text-[10px]">
                  {ARTICLES.filter(a => a.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-8 min-h-[400px]">
        {currentArticles.map(article => (
          <div 
            key={article.id}
            onClick={() => onNavigate(`article/${article.id}`)}
            className={`group bg-white dark:bg-slate-900 border rounded-2xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-md hover:shadow-purple-500/5 cursor-pointer relative overflow-hidden animate-in slide-in-from-top-4 ${
              article.isPinned 
                ? 'border-purple-500/40 dark:border-purple-500/20 shadow-md shadow-purple-500/5' 
                : 'border-slate-200 dark:border-slate-800 hover:border-purple-500/50'
            }`}
          >
            {article.isPinned && (
              <div className="absolute top-0 right-0">
                <div className="bg-purple-600 text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-bl-xl shadow-lg flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                  Pinned
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-purple-600/10 text-purple-600 dark:text-purple-400 text-[10px] font-black uppercase tracking-widest rounded-lg">
                  {article.category}
                </span>
                <div className="flex gap-1.5">
                  {article.tags.map(tag => (
                    <span key={tag} className="text-[10px] text-slate-400 font-medium">#{tag}</span>
                  ))}
                </div>
              </div>
              <span className="text-slate-400 text-xs font-mono font-bold">{article.date}</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-4 leading-tight">
              {article.title}
            </h3>
            
            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-8 line-clamp-2">
              {article.excerpt}
            </p>

            <div className="flex items-center gap-3 text-purple-600 dark:text-purple-400 font-black text-sm group-hover:gap-5 transition-all">
              阅读详细教程
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        ))}

        {filteredAndSortedArticles.length === 0 && (
          <div className="py-20 text-center text-slate-400">
            <span className="text-5xl block mb-4">🔍</span>
            <p className="text-lg">该分类下已没有文章</p>
            <button 
              onClick={() => setSelectedCategory('全部')}
              className="mt-4 text-purple-600 font-bold hover:underline"
            >
              返回展示全部
            </button>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="mt-20 flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-10">
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
              <path d="M15 19l-7-7 7-7" />
            </svg>
            上一页
          </button>

          <div className="px-6 py-2 bg-slate-100 dark:bg-slate-800/50 rounded-full border border-slate-200 dark:border-slate-700">
            <span className="text-sm font-black text-slate-900 dark:text-white font-mono tracking-tighter">
              {currentPage} <span className="mx-3 text-slate-400 font-light opacity-60">/</span> {totalPages}
            </span>
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
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default ArticlesPage;