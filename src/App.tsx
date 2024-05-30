import React, { useState } from 'react'
import '@mantine/core/styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MantineProvider } from '@mantine/core';
import Home from './pages/Home/Home'
import SharedLayout from './pages/Sharedlayout';
import Profile from './pages/Profile/Profile'
import Stocks from './pages/Stocks/Stocks';
import Portfolio from './pages/Portfolio/Portfolio'
import Tools from './pages/Tools/Tools';
import Events from './pages/Events/Events';
import HeroText from './pages/Shop/HeroText';
import Achievements from './pages/Achievements/Achievements';

import { HeroBullets } from './pages/Home/HeroBullets';
import ThemeContext from './context/ThemeContext';
import StockContext from './context/StockContext';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("MSFT");
  return (
    <MantineProvider>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
    <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout/>}>
            <Route index element={<Profile/>}/>
            <Route path='Stocks' element={<Stocks/>}/>
            <Route path='Home' element={<HeroBullets/>}/>
            <Route path='Tools' element={<Tools/>}/>
            <Route path='Achievements' element={<Achievements/>}/>
            <Route path='Shop' element={<HeroText/>}/>
            <Route path='Events' element={<Events/>}/>
            <Route path='Portfolio' element={<Portfolio/>}/>
            
          </Route>
        </Routes>
      </BrowserRouter>
      </StockContext.Provider>
  </ThemeContext.Provider>
    </MantineProvider>
  )
}

export default App
