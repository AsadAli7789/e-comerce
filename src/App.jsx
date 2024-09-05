import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Router, Routes, }  from 'react-router-dom'
import { Button } from 'antd';
import Home from './pages/home'
import Footer from './component/footer'
import Header from './component/Header'
import Productdetail from './pages/productde'
import Car from "./component/car";
import Feature from './component/feature'

function App() {
  const [count, setCount] = useState(0)

  return (

    
    <BrowserRouter>
    <Header/>
    <Car />
      <Routes>
      
      <Route path='/' element={<Home/>}  ></Route>
      <Route path="/products/:id" element={<Productdetail/>} />
      
      </Routes> 
      <Feature/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
