import React from 'react';
import { ARTICLES } from '../constants';

interface ArticleDetailPageProps {
  articleId: string;
  onBack: () => void;
}

const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ articleId, onBack }) => {
  const article = ARTICLES.find(a => a.id === articleId);
  const currentTime = new Date().toLocaleDateString('zh-CN', { 
    year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' 
  });

  if (!article) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
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
    <div className="max-w-[1500px] mx-auto px-6 py-12 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      <button 
        onClick={onBack}
        className="mb-10 flex items-center gap-3 text-slate-400 hover:text-purple-600 transition-all font-bold group"
      >
        <div className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:border-purple-500/50 group-hover:bg-purple-500/5 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </div>
        返回教程列表
      </button>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 md:p-16 lg:px-28 lg:py-24 shadow-2xl shadow-slate-200/40 dark:shadow-none transition-all relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/[0.02] blur-[150px] -mr-64 -mt-64 pointer-events-none"></div>

        <header className="mb-16 border-b border-slate-100 dark:border-slate-800/60 pb-16 relative z-10">
          <div className="flex flex-wrap items-center gap-6 mb-10">
            <span className="px-5 py-2 bg-purple-600 text-white text-[10px] font-black rounded-xl uppercase tracking-[0.25em] shadow-xl shadow-purple-600/20">
              {article.category}
            </span>
            <div className="flex gap-3">
              {article.tags.map(tag => (
                <span key={tag} className="text-xs font-bold text-slate-400">#{tag}</span>
              ))}
            </div>
            <div className="h-px w-20 bg-slate-200 dark:bg-slate-800"></div>
            <div className="flex items-center gap-6 text-slate-400 text-xs font-mono font-bold">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full"></span>
                <span>ORIGIN: {article.date}</span>
              </div>
              <div className="flex items-center gap-2 text-purple-500">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                <span>SYNCED: {currentTime}</span>
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight max-w-5xl">
            {article.title}
          </h1>
        </header>

        <div className="relative z-10 max-w-5xl">
          <article className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed text-lg lg:text-xl selection:bg-purple-500/20">
            {article.content.split('\n').map((line, i) => {
              if (line.startsWith('## ')) {
                return <h2 key={i} className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-16 mb-8 tracking-tight flex items-center gap-4">
                  <span className="w-2 h-10 bg-purple-500 rounded-full inline-block"></span>
                  {parseInlineMarkdown(line.replace('## ', '').trim())}
                </h2>;
              }
              if (line.startsWith('### ')) {
                return <h3 key={i} className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6 border-l-4 border-slate-200 dark:border-slate-800 pl-6">
                  {parseInlineMarkdown(line.replace('### ', '').trim())}
                </h3>;
              }
              if (line.startsWith('- ')) {
                return <li key={i} className="ml-8 mb-4 list-disc marker:text-purple-500 pl-4">
                  {parseInlineMarkdown(line.replace('- ', '').trim())}
                </li>;
              }
              if (line.startsWith('1. ') || line.startsWith('2. ')) {
                 return <p key={i} className="ml-4 mb-4 font-medium text-slate-800 dark:text-slate-200">
                  {parseInlineMarkdown(line)}
                 </p>;
              }
              if (line.trim() === '') return <div key={i} className="h-6" />;
              return <p key={i} className="mb-8 leading-10 text-justify">
                {parseInlineMarkdown(line)}
              </p>;
            })}
          </article>
        </div>

        <div className="mt-20 pt-16 border-t border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
          <div className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] opacity-40">THANK YOU FOR READING</div>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;