
import React from 'react';
import { SKILLS } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
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
          实用工具 · 有趣资源 · 收藏夹
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
            <h2 className="text-3xl font-black text-slate-900 dark:text-white transition-colors">YIN-X</h2>
          </div>
          <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-lg transition-colors">
            <p className="font-medium">
              并没有什么很特别的
            </p>
          </div>
        </section>

        {/* 技能矩阵 - 标签优化 */}
        <section className="bg-slate-50/50 dark:bg-slate-900/20 border border-dashed border-slate-300 dark:border-slate-800 rounded-[2.5rem] p-10 transition-all">
          <div className="flex items-center gap-5 mb-10">
            <div className="w-14 h-14 bg-amber-50 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center text-3xl shadow-inner transition-colors">💎</div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white transition-colors">标签</h2>
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

        {/* 交流群组 */}
        <section className="bg-slate-900 dark:bg-slate-800/50 rounded-[3rem] p-10 md:p-14 overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 blur-[100px] -mr-48 -mt-48"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-14">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-black text-white mb-6">交流群组</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                交流群组，很多好东东
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white group cursor-pointer">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors">
                    <svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="16" 
  height="16" 
  fill="currentColor" 
  className="bi bi-telegram"  // 这里修正了 class -> className
  viewBox="0 0 16 16"
>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
</svg>
                  </div>
                  <span className="text-lg font-bold">###</span>
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
