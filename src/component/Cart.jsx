import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {

  const { dispatch, state } = useContext(CartContext)

  const Remove = (id) => {
    dispatch({ type: "Remove", payload: { id } })
  }

  return (
    <>

      <div className='mt-30'></div>
      {
        state.cart.length > 0 ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5 md:w-3/4 mx-auto'>
          {

            state.cart.map((items) => {
              return (

                <div key={items.id} className='w-full md:w-3/4 mx-auto flex flex-col items-center border border-[#EEEE] '>
                  <div className="image ">
                    <img src={items.img} alt={items.name} className='' />
                  </div>
                  <div className="p_detail pb-3 mb-3">
                    <div className="">
                      <h3 className="text-green-700 text-sm uppercase">{items.category}</h3>
                      <p className="text-gray-800 text-lg font-semibold">{items.name}</p>
                      <p className="text-yellow-500">
                        {"★".repeat(items.rating) + "☆".repeat(5 - items.rating)}
                      </p>
                      <p className="mt-2">
                        <span className="text-black font-bold text-lg"> ${items.offer_price} </span>
                        <span className="text-gray-500 line-through text-sm"> ${items.p_price}</span>
                      </p>
                      <div className='flex gap-3 items-center justify-center mt-3'>
                        <i className="bx bx-shopping-bag hover:text-gray-800 cursor-pointer
                        text-2xl">

                        </i>
                        <button className='bg-blue-600 hover:bg-blue-400 cursor-pointer text-white rounded-xl py-2 px-4 ' onClick={() => Remove (items.id)}>Remove product</button>
                      </div>

                    </div>
                  </div>
                </div>

              )
            })

          }



        </div>



          :
          <h1 className='text-center text-xl font-bold mt-5'>cart is empty</h1>


      }


    </>
  )
}

export default Cart
