import React from 'react';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const posterImageUrl = tool.poster || `https://picsum.photos/seed/${tool.id}/600/400`;

  return (
    <a 
      href={tool.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-md hover:-translate-y-1 flex flex-col h-full cursor-pointer block relative group ${
        tool.isPinned 
          ? 'border-purple-500/50 dark:shadow-[0_0_10px_rgba(168,85,247,0.03)]' 
          : 'border-slate-200 dark:border-slate-800 hover:border-purple-500/60'
      }`}
    >
      {/* 置顶勋章 */}
      {tool.isPinned && (
        <div className="absolute top-4 right-4 z-30 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter flex items-center gap-1 shadow-lg animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
          </svg>
          Pinned
        </div>
      )}

      {/* 海报区域 */}
      <div className="h-48 relative shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img 
          src={posterImageUrl} 
          alt={tool.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-30"></div>
        
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-lg text-[10px] font-black text-white uppercase tracking-widest border border-white/10 group-hover:bg-purple-600 transition-colors duration-300">
          <span className="opacity-80">
            {tool.category === 'efficiency' ? '⚡' : 
             tool.category === 'image' ? '🎨' :
             tool.category === 'learning' ? '🎓' : 
             tool.category === 'docs' ? '📄' : '🛠️'}
          </span>
          {tool.category === 'efficiency' ? '效率' : 
           tool.category === 'image' ? '图像' :
           tool.category === 'learning' ? '学习' : 
           tool.category === 'docs' ? '文档' : '开发'}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1 relative z-10 bg-white dark:bg-slate-900 transition-colors duration-500">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {tool.title}
          </h3>
          <span className="text-xl grayscale group-hover:grayscale-0 transition-all duration-300">
            {tool.icon}
          </span>
        </div>
        
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5 line-clamp-2">
          {tool.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {tool.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2.5 py-1 bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-[10px] font-bold rounded-md border border-slate-200 dark:border-slate-800 transition-colors uppercase tracking-wider group-hover:border-purple-500/30"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/50 pt-4">
          <div className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-black text-xs group-hover:gap-4 transition-all uppercase tracking-[0.1em]">
            访问工具站点
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ToolCard;