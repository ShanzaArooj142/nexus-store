import React from 'react'
import { Routes, Route } from 'react-router'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<RootLayout/>}>

         <Route index element={<Home/>}/>
         <Route path='about'element={<About/>}/>
         <Route path='product'element={<Product/>}/>
         <Route path='cart'element={<Cart/>}/>
         <Route path='contact'element={<Contact/>}/>

        </Route>
      </Routes>

    </div>
  )
}

export default App