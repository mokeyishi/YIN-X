
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ToolsPage from './pages/ToolsPage';
import AboutPage from './pages/AboutPage';
import ArticlesPage from './pages/ArticlesPage';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('/');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || '/';
      setCurrentPath(hash);
      window.scrollTo(0, 0); 
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const navigate = (path: string) => {
    window.location.hash = path;
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/':
      case '/tools':
        return <ToolsPage />;
      case '/about':
        return <AboutPage />;
      // Added route for ArticlesPage
      case '/articles':
        return <ArticlesPage />;
      default:
        return <ToolsPage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 transition-colors duration-500 selection:bg-purple-500/30 font-sans">
      <Navbar 
        currentPath={currentPath} 
        onNavigate={navigate} 
      />
      
      <main className="pb-20">
        {renderPage()}
      </main>

      {/* 超清晰、无模糊感的科技主题切换器 */}
      <button 
        onClick={toggleTheme}
        className={`fixed bottom-10 right-10 z-[100] w-14 h-14 flex items-center justify-center rounded-2xl border-2 transition-all duration-300 shadow-2xl active:scale-90 group
          ${isDark 
            ? 'bg-slate-900 border-slate-700 text-yellow-400 shadow-yellow-500/5' 
            : 'bg-white border-slate-200 text-purple-600 shadow-purple-500/10'
          }`}
      >
        <div className="relative">
          {isDark ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-in zoom-in duration-300">
              <circle cx="12" cy="12" r="5" fill="currentColor" fillOpacity="0.2"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-in zoom-in duration-300">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" fillOpacity="0.2"/>
            </svg>
          )}
        </div>
        {/* 悬浮光效 */}
        <div className={`absolute -inset-1 rounded-2xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 ${isDark ? 'bg-yellow-400' : 'bg-purple-600'}`}></div>
      </button>

      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-16 transition-colors duration-500">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-xl">✨</span> YIN-X
            </div>
            <div className="text-slate-500 dark:text-slate-500 text-sm">
              专注高效办公与数字化工具分享。
            </div>
          </div>
          
          <div className="flex items-center gap-10 text-sm font-semibold text-slate-500 dark:text-slate-400">
            <button onClick={() => navigate('/')} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">工具导航</button>
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
