import React from 'react'
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
import Shop from './pages/Shop/Shop';
import Achievements from './pages/Achievements/Achievements';
import AddUser from './Users/AddUser'
import { HeroBullets } from './pages/Home/HeroBullets';

const App = () => {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout/>}>
            <Route index element={<Profile/>}/>
            <Route path='Stocks' element={<Stocks/>}/>
            <Route path='Home' element={<HeroBullets/>}/>
            <Route path='Tools' element={<Tools/>}/>
            <Route path='Achievements' element={<Achievements/>}/>
            <Route path='Shop' element={<Shop/>}/>
            <Route path='Events' element={<Events/>}/>
            <Route path='Portfolio' element={<Portfolio/>}/>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App