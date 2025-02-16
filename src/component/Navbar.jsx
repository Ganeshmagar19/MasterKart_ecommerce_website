import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png';
import { CartContext } from '../context/CartContext';


const Navbar = () => {

const {state}=useContext(CartContext)

  const [isMenuopen, setisMenuopen] = useState(false);

  return (
    <>
      <nav className='mb-12'>
        <div className="container bg-white mx-auto fixed z-[20] 
    top-0 max-w-full flex items-center justify-between drop-shadow-md p-3 ">

          <div className="logo  md:px-20 ">
            <NavLink to='/'>
              <img src={logo} alt=""
                className='w-40 hover:scale-105 hover:cursor-pointer transition-all' />
            </NavLink>

          </div>

          

          <div className="nav-items ">

            <ul className=' hidden xl:flex space-x-6 font-semibold text-base '>
              <li className='p-1 hover:text-blue-500 hover:cursor-pointer'><NavLink to='/'>Home</NavLink></li>
              <li className='p-1 hover:text-blue-500 '><NavLink to='/Categories'>Categories</NavLink></li>
              <li className='p-1 hover:text-blue-500 '><NavLink to='/Products'>Products</NavLink></li>
              <li className='p-1 hover:text-blue-500 '><NavLink to='/Blog'>Blog</NavLink></li>
              <li className='p-1 hover:text-blue-500 '><NavLink to='/Discover'>Discover</NavLink></li>

            </ul>
          </div>


          <div className='icons flex gap-4  '> 

          <NavLink to='/Login'>

<i className='bx bx-user text-2xl
hover:scale-125 '></i>

</NavLink>

            <NavLink to='/Cart' className='relative'>
            
              <i className='bx bx-cart text-2xl
              hover:scale-125 '></i>
              {
                state.cart.length >0 && (

                  <p className='absolute  -top-2 -right-2 bg-blue-400 w-4 h-4 flex justify-center items-center rounded-full text-white '>{state.cart.length}</p>
                )
              }
              
            </NavLink>

            <NavLink to='/Wishlist'>
            
              <i className='bx bx-shopping-bag text-2xl hover:scale-125 '></i>
              
            </NavLink>

          </div>

          <div className="menu xl:hidden block ">
            <i className='bx bx-menu text-3xl hover:cursor-pointer'
              onClick={() => setisMenuopen(!isMenuopen)}></i>

            <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col 
        items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuopen ?
                "opacity-100" : "opacity-0"}`}
              style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}>

              <li className='list-none w-full text-center  hover:text-blue-500 transition-all cursor-pointer'><NavLink to='/'>Home</NavLink></li>

              <li className='list-none w-full text-center  hover:text-blue-500 transition-all cursor-pointer'><NavLink to='/Categories'>Categories</NavLink></li>
               
              <li className='list-none w-full text-center  hover:text-blue-500 transition-all cursor-pointer'><NavLink to='/Products'>Products</NavLink></li>

              <li className='list-none w-full text-center  hover:text-blue-500 transition-all cursor-pointer'><NavLink to='/Blog'>Blog</NavLink></li>

              <li className='list-none w-full text-center  hover:text-blue-500 transition-all cursor-pointer'><NavLink to='/Discover'>Discover</NavLink></li>

              <button className='bg-violet-600 hover:bg-violet-700 text-white 
        text-md px-3 py-2 cursor-pointer mb-2   rounded-xl '><NavLink to='/AddProduct' className='!text-white'> Add Product </NavLink></button>
              
            </div>
          </div>


          <div className="navBtn hidden lg:block ">
            <button className='bg-violet-600 hover:bg-violet-700 text-white 
        text-md px-3.5 py-2 md: me-16  rounded-3xl cursor-pointer '> <NavLink to='/AddProduct' className='!text-white'> Add Product </NavLink></button>
          </div>

        </div>
      </nav>

    </>
  )
}

export default Navbar
