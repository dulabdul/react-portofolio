import React, { useState, useMemo } from 'react';
import './assets/styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import LocaleContext from './contexts/LocaleContext';
import LandingPage from './pages/LandingPage';
import DetailPages from './pages/DetailPages';
import NotFound from './pages/NotFoundPages';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
function App() {
  const [localeTheme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  );
  const firebaseConfig = {
    apiKey: 'AIzaSyDUnSmcX7x6fnu5zUWBHxtBvHY_LEJhGTk',
    authDomain: 'abdul-portofolio.firebaseapp.com',
    projectId: 'abdul-portofolio',
    storageBucket: 'abdul-portofolio.appspot.com',
    messagingSenderId: '949854108171',
    appId: '1:949854108171:web:e119f5733ce439ba0e650e',
    measurementId: 'G-K62B8MWGVN',
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
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
