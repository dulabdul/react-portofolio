import React, { useState, useMemo } from 'react';
import './assets/styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import LocaleContext from './contexts/LocaleContext';
import LandingPage from './pages/LandingPage';
import DetailPages from './pages/DetailPages';
import NotFound from './pages/NotFoundPages';
function App() {
  const [localeTheme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  );
  const toggleThemeHandler = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };
  const [toggleTheme] = useState(() => toggleThemeHandler);
  const localeContextValue = useMemo(() => {
    return {
      localeTheme,
      toggleTheme,
    };
  }, [localeTheme, toggleTheme]);

  if (localeTheme !== 'dark') {
    document.documentElement.setAttribute('data-theme', localeTheme);
  }
  if (localeTheme !== 'light') {
    document.documentElement.setAttribute('data-theme', localeTheme);
  }
  return (
    <>
      <LocaleContext.Provider value={localeContextValue}>
        <div className='App'>
          <Routes>
            <Route
              exacth
              path='/'
              element={<LandingPage />}
            />
            <Route
              exacth
              path='/detail'
              element={<DetailPages />}
            />
            <Route
              exacth
              path='*'
              element={<NotFound />}
            />
          </Routes>
        </div>
      </LocaleContext.Provider>
    </>
  );
}

export default App;
