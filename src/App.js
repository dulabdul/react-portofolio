import React from 'react';
import './assets/styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DetailPages from './pages/DetailPages';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exacth path='/' element={<LandingPage />} />
        <Route exacth path='/detail' element={<DetailPages />} />
      </Routes>
    </div>
  );
}

export default App;
