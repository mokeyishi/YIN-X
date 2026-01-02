
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ToolCard from '../components/ToolCard';
import { TOOLS } from '../constants';

const ToolsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTools = activeCategory === 'all' 
    ? TOOLS 
    : TOOLS.filter(t => t.category === activeCategory);

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
            {filteredTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
          
          {filteredTools.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 text-slate-400">
              <span className="text-6xl mb-4">🏜️</span>
              <p className="text-lg">该分类下暂无工具，去看看其他的吧！</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;
