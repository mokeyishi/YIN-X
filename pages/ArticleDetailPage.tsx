import React from 'react';
import { ARTICLES } from '../constants';

interface ArticleDetailPageProps {
  articleId: string;
  onBack: () => void;
}

const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ articleId, onBack }) => {
  const article = ARTICLES.find(a => a.id === articleId);
  
  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white">教程未找到</h2>
        <button onClick={onBack} className="mt-6 text-purple-600 font-bold hover:underline">返回教程列表</button>
      </div>
    );
  }

  const parseInlineMarkdown = (text: string) => {
    let elements: (string | React.ReactNode)[] = [text];

    elements = elements.flatMap(node => {
      if (typeof node !== 'string') return node;
      const parts = node.split(/(\*\*[^*]+\*\*)/g);
      return parts.map((part, i) => 
        part.startsWith('**') && part.endsWith('**') 
          ? <strong key={`b-${i}`} className="font-black text-slate-900 dark:text-white underline decoration-purple-500/30">{part.slice(2, -2)}</strong> 
          : part
      );
    });

    elements = elements.flatMap(node => {
      if (typeof node !== 'string') return node;
      const parts = node.split(/(`[^`]+`)/g);
      return parts.map((part, i) => 
        part.startsWith('`') && part.endsWith('`') 
          ? <code key={`c-${i}`} className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-purple-600 dark:text-purple-400 font-mono text-[0.9em]">{part.slice(1, -1)}</code> 
          : part
      );
    });

    elements = elements.flatMap(node => {
      if (typeof node !== 'string') return node;
      const parts = node.split(/(\[[^\]]+\]\([^)]+\))/g);
      return parts.map((part, i) => {
        const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
        return match 
          ? <a key={`a-${i}`} href={match[2]} target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 underline underline-offset-4 hover:text-purple-500 transition-colors font-bold">{match[1]}</a> 
          : part;
      });
    });

    return elements;
  };

  return (
    <div className="max-w-[1150px] mx-auto px-6 py-12 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      <button 
        onClick={onBack}
        className="mb-8 flex items-center gap-3 text-slate-400 hover:text-purple-600 transition-all font-bold group text-sm"
      >
        <div className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:border-purple-500/50 group-hover:bg-purple-500/5 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </div>
        返回文章列表
      </button>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-12 lg:p-16 shadow-xl shadow-slate-200/20 dark:shadow-none transition-all relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/[0.02] blur-[100px] -mr-40 -mt-40 pointer-events-none"></div>

        <header className="mb-12 border-b border-slate-100 dark:border-slate-800/60 pb-10 relative z-10">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-purple-600/10 text-purple-600 dark:text-purple-400 text-[10px] font-black rounded-lg uppercase tracking-widest">
              {article.category}
            </span>
            <div className="flex gap-2">
              {article.tags.map(tag => (
                <span key={tag} className="text-[10px] font-bold text-slate-400">#{tag}</span>
              ))}
            </div>
            <div className="flex items-center gap-4 text-slate-400 text-[10px] font-mono font-bold ml-auto">
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 bg-slate-300 dark:bg-slate-600 rounded-full"></span>
                <span>{article.date}</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
            {article.title}
          </h1>
        </header>

        <div className="relative z-10">
          <article className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg selection:bg-purple-500/20">
            {article.content.split('\n').map((line, i) => {
              if (line.startsWith('## ')) {
                return <h2 key={i} className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mt-12 mb-6 tracking-tight flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-purple-50 rounded-full inline-block"></span>
                  {parseInlineMarkdown(line.replace('## ', '').trim())}
                </h2>;
              }
              if (line.startsWith('### ')) {
                return <h3 key={i} className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 border-l-4 border-slate-200 dark:border-slate-800 pl-4">
                  {parseInlineMarkdown(line.replace('### ', '').trim())}
                </h3>;
              }
              if (line.startsWith('- ')) {
                return <li key={i} className="ml-6 mb-3 list-disc marker:text-purple-500 pl-2">
                  {parseInlineMarkdown(line.replace('- ', '').trim())}
                </li>;
              }
              if (line.startsWith('1. ') || line.startsWith('2. ')) {
                 return <p key={i} className="ml-2 mb-3 font-medium text-slate-800 dark:text-slate-200">
                  {parseInlineMarkdown(line)}
                 </p>;
              }
              if (line.trim() === '') return <div key={i} className="h-4" />;
              return <p key={i} className="mb-6 leading-8 text-justify">
                {parseInlineMarkdown(line)}
              </p>;
            })}
          </article>
        </div>

        <div className="mt-16 pt-12 border-t border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
          <div className="text-slate-400 text-[9px] font-black uppercase tracking-[0.4em] opacity-40">THE END OF ARTICLE</div>
          <div className="mt-3 w-10 h-0.5 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;