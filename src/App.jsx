import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { About, Cart, SingleProduct, Error, PrivateRoute, Products, Home, Checkout } from "./pages"
import {Navbar , Sidebar , Footer} from "./components"
import './App.css'
import "./index.css"
import styled from "styled-components"



function App() {
  return (
    <BrowserRouter>
      
      <Navbar />
      <Sidebar />

      <Routes>

        <Route path='/' element={<Home />} />
        
        <Route path="/about" element={<About />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/products" element={<Products />} />

        <Route path="/products/:id" element={<SingleProduct />} />
        
        <Route path='/checkout' element={<Checkout />} />

        <Route path="*" element={<Error />} />


      </Routes>

    <Footer />
    </BrowserRouter>
  )
  
}

export default App
