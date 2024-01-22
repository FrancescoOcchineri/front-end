import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarComponent from './components/NavBarComponent';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarComponent />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/articles/:id' element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
