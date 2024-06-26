import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import HeroSection from './components/Hero';
import Main from './components/Main';
import ChangeColor from './components/ChangeColor';
import ToggleShow from './components/ToggleShow';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <div>
      {/* <Navigation />
      <HeroSection /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/change-color' element={<ChangeColor/>}/>
          <Route path='/toggle-show-hide' element={<ToggleShow/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App