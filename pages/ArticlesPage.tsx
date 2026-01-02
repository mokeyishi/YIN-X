
import React from 'react';
import { ARTICLES } from '../constants';

const ArticlesPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="flex items-center gap-4 mb-12">
        {/* Updated to support both light and dark modes */}
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">精选文章</h2>
        <div className="h-0.5 flex-1 bg-slate-200 dark:bg-slate-800"></div>
      </div>

      <div className="space-y-6">
        {ARTICLES.map(article => (
          <a 
            key={article.id}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group bg-white dark:bg-[#1e293b]/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all hover:translate-x-2 shadow-sm dark:shadow-none"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="px-3 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold rounded-lg border border-purple-500/20">
                {article.category}
              </span>
              <span className="text-slate-500 text-sm font-mono">{article.date}</span>
            </div>
            {/* Improved heading colors for readability */}
            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-3">
              {article.title}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-6">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-sm">
              阅读全文
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
