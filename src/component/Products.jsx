import React, { useContext, useState,useEffect } from 'react'
import ProductType from '../Pages/ProductType'
import ProductSlider from '../Pages/ProductSlider'
import { ProductContext } from './ProductContext'
import { CartContext } from '../context/CartContext'

const Products = () => {

  const {products}=useContext(ProductContext)
  const[data,setdata]=useState(products)
  
  const[selectedCategory,setSelectedCategory]=useState('ALL')

  const [showDetails, setShowDetails] = useState(false);
  const [ProductDetails, setProductDetails] = useState(null);

  const {dispatch,state}=useContext(CartContext);

  useEffect(() => {
    fetchdata();
  }, [selectedCategory]);

  const fetchdata=() =>{

    if(selectedCategory==="ALL"){
      setdata(products)
    }
    else {
      const filterproduct= products.filter((items)=> items.category === selectedCategory)
      setdata(filterproduct)
    }
  }

  const fetchProductDetail=(id)=>{

    const pdetails=products.find((items)=> items.id === id);
    setShowDetails(true);
    setProductDetails(pdetails);
    console.log(ProductDetails)

  }

  const cartHandler=(cart_product)=>{
    dispatch({ 
      type:"ADD_TO_CART", 
      payload:cart_product
    })
  }
  
  return (
   <>
   <div className="mt-30"></div>

   <ProductType />

   <div className="options w-full mt-10 flex justify-center">
        <div className="border border-gray-300 p-3 flex items-center gap-4 bg-white rounded-lg shadow-md w-full max-w-[70vw]">
          <div className="flex items-center gap-3">
            <i className="bx bx-grid-alt text-2xl cursor-pointer text-gray-600 hover:text-blue-500"></i>
            <i className="bx bx-list-ol text-2xl cursor-pointer text-gray-600 hover:text-blue-500"></i>
          </div>

          <div className="ml-auto">
            <select
              className="w-40 px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:ring-2 focus:ring-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="ALL">Category</option>
              <option value="SNACKS">Snacks</option>
              <option value="VEGETABLES">Vegetables</option>
              <option value="FRUITS">Fruits</option>
              <option value="BAKERY">Bakery</option>
              <option value="CLOTHES">Clothes</option>
            </select>
          </div>
        </div>
      </div>

      {/* product grid */}
      <div className="max-w-[90vw] mx-auto mt-10 px-4 mb-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {data.map((val) => (
      <div
        key={val.id}
        className="bg-white rounded-lg shadow-lg p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl"
      >
        {/* Product Image */}
        <div className="h-48 w-full overflow-hidden rounded-md">
          <img
            src={val.img}
            alt={val.name}
            className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition"
           
          />
        </div>

        {/* Product Details */}
        <div className="mt-4 text-center">
          <h3 className="text-green-600 text-xs font-semibold uppercase tracking-wide">
            {val.category}
          </h3>
          <p className="text-gray-800 text-lg font-semibold mt-1">{val.name}</p>
          <p className="text-yellow-500 text-lg mt-1">
            {"★".repeat(val.rating) + "☆".repeat(5 - val.rating)}
          </p>
          <p className="mt-2">
            <span className="text-black font-bold text-lg">${val.offer_price}</span>
            <span className="text-gray-500 line-through text-sm ml-2">
              ${val.p_price}
            </span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex gap-6 justify-center items-center">
          <div className="text-gray-600 text-2xl flex gap-4">
            <i className="bx bx-show hover:text-gray-800 cursor-pointer"
             onClick={() => fetchProductDetail(val.id)}></i>
            <i className="bx bx-shopping-bag hover:text-gray-800 cursor-pointer"></i>
          </div>
          <button
            className="bg-violet-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-violet-500 transition cursor-pointer"
            onClick={() => cartHandler(val)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    ))}
  </div>
</div>



{
showDetails && ProductDetails && (
  <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
    <div className="bg-white p-4 sm:p-6 rounded-lg relative shadow-lg w-full max-w-[750px] h-auto ">
      <button
        onClick={() => setShowDetails(false)}
        className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-400 cursor-pointer"
      >
        Close
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Image Section */}
        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
          <img
            src={ProductDetails.img}
            alt={ProductDetails.name}
            className="w-full h-[300px] object-cover rounded-md"
          />
        </div>

        {/* Details Section */}
        <div className="w-full sm:w-1/2 flex flex-col gap-2">
          <h1 className="text-xl sm:text-2xl uppercase font-bold text-gray-800">{ProductDetails.name}</h1>
          <h3 className="text-green-700 text-md uppercase">{ProductDetails.category}</h3>
          <p className="text-yellow-500 text-xl">
            {"★".repeat(ProductDetails.rating) + "☆".repeat(5 - ProductDetails.rating)}
          </p>
          <p className="text-xl font-semibold">
            <span className="text-black">${ProductDetails.offer_price}</span>
            <span className="text-gray-500 line-through ml-2">${ProductDetails.p_price}</span>
          </p>

          <p className="text-md sm:text-xl font-medium text-gray-700">{ProductDetails.heading}</p>
          <div className="mt-4 flex flex-wrap justify-start gap-3">
            <button className="bg-blue-600 text-white p-2 rounded-md cursor-pointer hover:bg-blue-500">
              Buy Now
            </button>
            <button className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-400 hover:cursor-pointer" onClick={()=>cartHandler(ProductDetails)}>
              Add to Cart
            </button>
            {/* <button
              onClick={() => { 
                if (window.confirm('Are You Sure?')) { 
                  handleRemoveProduct(ProductDetails.id); 
                }
              }}
              className="bg-red-600 cursor-pointer text-white p-2 rounded-md hover:bg-red-500"
            >
              Remove Product
            </button> */}
          </div>
        </div>
      </div>
    </div>
  </div>
)}


<div className="w-full text-center p-3 text-4xl font-medium"><h1>Related 
  <span className="text-[#549E82] mx-3">Products</span></h1>
  <p className="text-gray-600 font-light text-xl mt-2.5">Browse The Collection Of Top Products</p></div>

  <ProductSlider/>
   </>
  )
}

export default Products
