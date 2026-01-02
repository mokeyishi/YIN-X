
import React from 'react';
import { SKILLS } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* 头部区 - 移除廉价感，增加质感 */}
      <div className="text-center mb-20">
        <div className="inline-block relative mb-8">
          <div className="w-44 h-44 rounded-[2.5rem] rotate-12 bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400 p-1.5 shadow-2xl shadow-purple-500/20">
            <div className="w-full h-full rounded-[2.2rem] -rotate-12 bg-white dark:bg-slate-900 flex items-center justify-center overflow-hidden transition-colors duration-500 border-2 border-white/50 dark:border-slate-800/50">
              <span className="text-8xl select-none filter drop-shadow-lg">👨‍💻</span>
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-white dark:bg-slate-800 p-2 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-xl animate-bounce">
            <span className="text-2xl">🔥</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight transition-colors">
          关于 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">YIN-X</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
          10年代码征程 · AI 工作流先行者 · 数字化转型专家
        </p>
      </div>

      <div className="grid gap-10">
        {/* 核心理念 - 现代卡片设计 */}
        <section className="group relative bg-white dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800 rounded-[2.5rem] p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/5 hover:-translate-y-1">
          <div className="absolute top-0 right-0 p-10 opacity-[0.03] dark:opacity-[0.05] group-hover:scale-110 transition-transform">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div className="flex items-center gap-5 mb-8">
            <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center text-3xl shadow-inner transition-colors">🚀</div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white transition-colors">核心愿景</h2>
          </div>
          <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-lg transition-colors">
            <p className="font-medium">
              在技术日新月异的今天，<span className="text-purple-600 dark:text-purple-400 font-bold">效率</span>不再是单纯的工具选择，而是一种思维方式。
            </p>
            <p>
              作为一名深耕行业 10 年的开发者，我目睹了无数团队被重复性劳动拖累。YIN-X 的诞生，就是为了打破这种桎梏。
            </p>
            <p>
              我们不仅评测工具，更在构建一种 <span className="underline decoration-pink-500/30 underline-offset-4">AI 协同开发</span> 的新范式。通过精准的 Prompt 与自动化的流程，让每一位开发者都能发挥 10 倍效能。
            </p>
          </div>
        </section>

        {/* 技能矩阵 - 标签优化 */}
        <section className="bg-slate-50/50 dark:bg-slate-900/20 border border-dashed border-slate-300 dark:border-slate-800 rounded-[2.5rem] p-10 transition-all">
          <div className="flex items-center gap-5 mb-10">
            <div className="w-14 h-14 bg-amber-50 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center text-3xl shadow-inner transition-colors">💎</div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white transition-colors">技术栈</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {SKILLS.map(skill => (
              <span 
                key={skill} 
                className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-700 dark:text-slate-200 text-sm font-bold hover:border-purple-500 hover:text-purple-600 hover:scale-105 active:scale-95 cursor-default transition-all shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* 联络卡片 - 彻底重修 */}
        <section className="bg-slate-900 dark:bg-slate-800/50 rounded-[3rem] p-10 md:p-14 overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 blur-[100px] -mr-48 -mt-48"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-14">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-black text-white mb-6">保持连接</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                无论是 AI 工具开发咨询，还是技术深度合作，随时欢迎通过以下方式与我取得联系。
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white group cursor-pointer">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <span className="text-lg font-bold">contact@yin-x.com</span>
                </div>
                <div className="flex items-center gap-4 text-white group cursor-pointer">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/></svg>
                  </div>
                  <span className="text-lg font-bold">微信：yinx_studio</span>
                </div>
              </div>
            </div>
            
            <div className="w-72 h-72 bg-white rounded-[2.5rem] p-6 shadow-2xl shrink-0 group hover:rotate-2 transition-transform duration-500">
              <img 
                src="https://picsum.photos/400/400?random=yinx" 
                alt="二维码" 
                className="w-full h-full object-cover rounded-2xl"
              />
              <p className="text-slate-400 text-[10px] text-center mt-4 font-black tracking-[0.2em] uppercase">Scan for Connect</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
