
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
      case '/articles':
        return <ArticlesPage />;
      case '/about':
        return <AboutPage />;
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

      {/* 极简、超清晰的高质感主题切换按钮 */}
      <button 
        onClick={toggleTheme}
        className={`fixed bottom-10 right-10 z-[100] w-14 h-14 flex items-center justify-center rounded-2xl border transition-all duration-300 active:scale-95 group shadow-lg
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
            <button onClick={() => navigate('/articles')} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">精选文章</button>
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
