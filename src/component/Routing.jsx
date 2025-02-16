import React from 'react'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Categories from './Categories';
import Products from './Products';
import Blog from './Blog';
import Discover from './Discover';
import Navbar from './Navbar';
import Login from './Login';
import AddProduct from './AddProduct';
import Cart from './Cart';
import Fotter from '../Pages/Fotter';
import Signup from './Signup';


const Routing = () => {
  return (
    <>
     <Router>
      <Navbar/>
      <Routes>

        <Route path='/' element={<Home/>}></Route>
        <Route path='/Categories' element={<Categories/>}></Route>
        <Route path='/Products' element={<Products/>}></Route>
        <Route path='/Blog' element={<Blog/>}></Route>
        <Route path='/Discover' element={<Discover/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/AddProduct' element={<AddProduct/>}></Route>
      </Routes>
<Fotter/>
    </Router>
    </>
  )
}

export default Routing
