import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ToolsPage from './pages/ToolsPage';
import AboutPage from './pages/AboutPage';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetailPage from './pages/ArticleDetailPage';

// 定义 10 种高度独特的色系，确保视觉差异化
const THEME_COLORS = [
  { name: '经典紫', id: 'purple', hex: '#9333ea', shades: { 50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 400: '#c084fc', 500: '#a855f7', 600: '#9333ea', 700: '#7e22ce' } },
  { name: '宝石绿', id: 'emerald', hex: '#10b981', shades: { 50: '#ecfdf5', 100: '#d1fae5', 200: '#a7f3d0', 400: '#34d399', 500: '#10b981', 600: '#059669', 700: '#047857' } },
  { name: '深海蓝', id: 'blue', hex: '#3b82f6', shades: { 50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8' } },
  { name: '火烈粉', id: 'pink', hex: '#ec4899', shades: { 50: '#fdf2f8', 100: '#fce7f3', 200: '#fbcfe8', 400: '#f472b6', 500: '#ec4899', 600: '#db2777', 700: '#be185d' } },
  { name: '日落橙', id: 'orange', hex: '#f97316', shades: { 50: '#fff7ed', 100: '#ffedd5', 200: '#fed7aa', 400: '#fb923c', 500: '#f97316', 600: '#ea580c', 700: '#c2410c' } },
  { name: '靛青蓝', id: 'indigo', hex: '#6366f1', shades: { 50: '#eef2ff', 100: '#e0e7ff', 200: '#c7d2fe', 400: '#818cf8', 500: '#6366f1', 600: '#4f46e5', 700: '#4338ca' } },
  { name: '柠檬黄', id: 'lime', hex: '#84cc16', shades: { 50: '#f7fee7', 100: '#ecfccb', 200: '#d9f99d', 400: '#a3e635', 500: '#84cc16', 600: '#65a30d', 700: '#4d7c0f' } },
  { name: '璀璨金', id: 'amber', hex: '#f59e0b', shades: { 50: '#fffbeb', 100: '#fef3c7', 200: '#fde68a', 400: '#fbbf24', 500: '#f59e0b', 600: '#d97706', 700: '#b45309' } },
  { name: '清新青', id: 'cyan', hex: '#06b6d4', shades: { 50: '#ecfeff', 100: '#cffafe', 200: '#a5f3fc', 400: '#22d3ee', 500: '#06b6d4', 600: '#0891b2', 700: '#0e7490' } },
  { name: '酷灰蓝', id: 'slate', hex: '#475569', shades: { 50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155' } },
];

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(() => {
    const initialHash = window.location.hash.replace('#', '');
    return initialHash || '/';
  });
  
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const [activeThemeId, setActiveThemeId] = useState(() => {
    return localStorage.getItem('themeColor') || 'purple';
  });

  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

  useEffect(() => {
    const theme = THEME_COLORS.find(t => t.id === activeThemeId) || THEME_COLORS[0];
    const root = document.documentElement;
    Object.entries(theme.shades).forEach(([shade, hex]) => {
      root.style.setProperty(`--brand-${shade}`, hex);
    });
    localStorage.setItem('themeColor', activeThemeId);
  }, [activeThemeId]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || '/';
      setCurrentPath(hash);
      window.scrollTo(0, 0); 
    };

    window.addEventListener('hashchange', handleHashChange);

    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const navigate = (path: string) => {
    window.location.hash = path;
  };

  const renderPage = () => {
    if (currentPath === '/' || currentPath === '/tools') return <ToolsPage />;
    if (currentPath === '/articles') return <ArticlesPage onNavigate={navigate} />;
    if (currentPath === '/about') return <AboutPage />;

    if (currentPath.startsWith('article/')) {
      const articleId = currentPath.split('/')[1];
      return <ArticleDetailPage articleId={articleId} onBack={() => navigate('/articles')} />;
    }

    return <ToolsPage />;
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 transition-colors duration-500 selection:bg-purple-500/30 font-sans">
      <Navbar currentPath={currentPath} onNavigate={navigate} />
      
      <main className="pb-20">
        {renderPage()}
      </main>

      {/* 右下角悬浮控制台 - 垂直排列，间距缩小为 gap-2 */}
      <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end gap-2.5">
        
        {/* 调色盘区域 */}
        <div className="flex items-center gap-3">
          {/* 颜色选择器展开菜单 - 10色分两行排列 */}
          <div className={`grid grid-cols-5 gap-2.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 transition-all duration-500 shadow-2xl ${
            isColorPickerOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'
          }`}>
            {THEME_COLORS.map(theme => (
              <button
                key={theme.id}
                onClick={() => {
                  setActiveThemeId(theme.id);
                  setIsColorPickerOpen(false);
                }}
                title={theme.name}
                className={`w-7 h-7 rounded-full border-2 transition-all hover:scale-125 active:scale-90 shadow-sm ${
                  activeThemeId === theme.id ? 'border-white ring-2 ring-purple-500 scale-110' : 'border-transparent opacity-85 hover:opacity-100'
                }`}
                style={{ backgroundColor: theme.hex }}
              />
            ))}
          </div>

          {/* 调色盘切换按钮 */}
          <button 
            onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}
            className={`w-14 h-14 flex items-center justify-center rounded-2xl border transition-all duration-300 active:scale-95 shadow-lg
              ${isColorPickerOpen 
                ? 'bg-purple-600 border-purple-500 text-white' 
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-purple-500/50'
              }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </button>
        </div>

        {/* 夜间模式切换按钮 - 紧贴上方按钮 */}
        <button 
          onClick={toggleTheme}
          className={`w-14 h-14 flex items-center justify-center rounded-2xl border transition-all duration-300 active:scale-95 group shadow-lg
            ${isDark 
              ? 'bg-slate-900 border-slate-700 text-yellow-400 hover:border-yellow-400/50 hover:bg-slate-800' 
              : 'bg-white border-slate-200 text-purple-600 hover:border-purple-400 hover:bg-slate-50 shadow-sm'
            }`}
          aria-label="Toggle theme"
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.1"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" fill="currentColor" fillOpacity="0.1"/>
              </svg>
            )}
          </div>
        </button>
      </div>

      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-16 transition-colors duration-500">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-xl">✨</span> YIN-X
            </div>
            <div className="text-slate-500 dark:text-slate-500 text-sm">
              专注高效办公与数字化教程分享。
            </div>
          </div>
          
          <div className="flex items-center gap-10 text-sm font-semibold text-slate-500 dark:text-slate-400">
            <button onClick={() => navigate('/')} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">工具导航</button>
            <button onClick={() => navigate('/articles')} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">教程文章</button>
            <button onClick={() => navigate('/about')} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">关于作者</button>
          </div>
          
          <div className="text-slate-400 dark:text-slate-600 text-[13px] font-medium">
            © {new Date().getFullYear()} YIN-X Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;