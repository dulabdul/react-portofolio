import React, { useState, useMemo } from 'react';
import './assets/styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import LocaleContext from './contexts/LocaleContext';
import LandingPage from './pages/LandingPage';
import DetailPages from './pages/DetailPages';
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
  const [toggleTheme, setToggleTheme] = useState(() => toggleThemeHandler);
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
          </Routes>
        </div>
      </LocaleContext.Provider>
    </>
  );
}

export default App;
