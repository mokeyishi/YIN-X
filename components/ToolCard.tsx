
import React from 'react';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <a 
      href={tool.link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 group hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex flex-col h-full cursor-pointer block"
    >
      {/* 海报区域 - 保持放大动效 */}
      <div className={`h-48 flex items-center justify-center text-6xl relative shrink-0 overflow-hidden ${tool.bannerColor} transition-colors duration-500`}>
        <div className="z-10 transform group-hover:scale-125 transition-transform duration-700 ease-out">
          {tool.icon}
        </div>
        
        {/* 分类小标签 */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 bg-white/40 dark:bg-black/30 backdrop-blur-md rounded-full text-[10px] font-bold text-slate-800 dark:text-white uppercase tracking-wider border border-white/20">
          {tool.category === 'efficiency' ? '⚡ 效率' : 
           tool.category === 'image' ? '🎨 图像' :
           tool.category === 'learning' ? '🎓 学习' : 
           tool.category === 'docs' ? '📄 文档' : '🛠️ 开发'}
        </div>
      </div>

      {/* 内容区域 */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {tool.title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {tool.description}
        </p>

        {/* 标签展示 - 已移除 group-hover 反应 */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {tool.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-0.5 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[11px] rounded border border-slate-200 dark:border-slate-700 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-sm group-hover:gap-4 transition-all">
            立即打开
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
