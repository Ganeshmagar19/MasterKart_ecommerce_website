import React, { useContext, useState } from 'react';
import allProducts from './AllProduct';
import { ProductContext } from './ProductContext';

const AddProduct = () => {
  // const[products,setproducts]=useState(allProducts);
  const {addProduct, products}=useContext(ProductContext)
  const [data, setData] = useState({name: '', img: '', p_price: '', offer_price: '', category: '',heading: '', rating: '',p_id:products.length})
  const datahandler=(e)=>{

const{name,value}=e.target;
    setData({...data,[name]:value})
    // console.log(data)
  }

  const saveform= (e)=>{
    e.preventDefault();
    console.log(data);
    if (!data.name || !data.img || !data.p_price || !data.category) {
      alert('Please fill in all required fields.');
      return;
    }

    addProduct(data);
    alert('product added')

    console.log(data)
    console.log('addproduct called')
    setData({
      name: '',
      img: '',
      p_price: '',
      offer_price: '',
      category: '',
      heading: '',
      rating: '',
    })
    
    

   
    

  }
  return (
    <>
      <div className="product mt-10">
        <form action="" onSubmit={(e) => saveform(e)}>
          <div className="p-10 text-light bg-gray-800 flex flex-wrap justify-center gap-10">

          <div className="flex flex-col items-start">
              <label className="text-white font-semibold">Product Id</label>
              <input type="text" name="p_id" 
                className="p-2 w-[300px] bg-white border border-gray-800 rounded-md"
                value={data.p_id} />
            </div>

            {/* Product Name */}
            <div className="flex flex-col items-start">
              <label className="text-white font-semibold">Enter Product Name</label>
              <input type="text" name="name" placeholder="Enter product name"
                className="p-2 w-[300px] bg-white border border-gray-800 rounded-md"
                value={data.name} onChange={(e) => datahandler(e)} />
            </div>

           

            {/* Product Image */}
            <div className="flex flex-col items-start">
              <label className="text-white font-semibold">Enter Product Image</label>
              <input type="text" name="img" placeholder="Enter product image URL"
                className="p-2 w-[300px] bg-white border border-gray-800 rounded-md"
                value={data.img} onChange={(e) => datahandler(e)} />
            </div>

            {/* Product Price */}
            <div className="flex flex-col items-start">
              <label className="text-white font-semibold">Enter Product Price</label>
              <input type="text" name="p_price" placeholder="Enter product price"
                className="p-2 w-[300px] bg-white border border-gray-800 rounded-md"
                value={data.p_price} onChange={(e) => datahandler(e)} />
            </div>

            {/* Offer Price */}
            <div className="flex flex-col items-start">
              <label className="text-white font-semibold">Enter Offer Price</label>
              <input type="text" name="offer_price" placeholder="Enter product offer price"
                className="p-2 w-[300px] bg-white border border-gray-800 rounded-md"
                value={data.offer_price} onChange={(e) => datahandler(e)} />
            </div>

            {/* Product Heading */}
            <div className="flex flex-col items-start">
              <label className="text-white font-semibold">Product Heading</label>
              <input type="text" name="heading" placeholder="Enter product heading"
                className="p-2 w-[300px] bg-white border border-gray-800 rounded-md"
                value={data.heading} onChange={(e) => datahandler(e)} />
            </div>

            {/* Product Rating */}
            <div className="flex flex-col items-start">
              <label className="text-white font-semibold">Product Rating</label>
              <input type="text" name="rating" placeholder="Enter product rating"
                className="p-2 w-[300px] bg-white border border-gray-800 rounded-md"
                value={data.rating} onChange={(e) => datahandler(e)} />
            </div>

            {/* Category Dropdown */}
            <div className="flex flex-col items-start w-[300px]">
              <label className="text-white font-semibold">Choose Product Category</label>
              <select name="category" className="p-2 w-full border border-gray-700 bg-white rounded-md"
                value={data.category} onChange={(e) => datahandler(e)}>
                <option value="none">Select</option>
                <option value="SNACKS">SNACKS</option>
                <option value="FRUITS">FRUITS</option>
                <option value="VEGETABLES">VEGETABLES</option>
                <option value="MENS">MENS</option>
                <option value="WOMENS">WOMENS</option>
                <option value="KIDS">KIDS</option>
                <option value="OTHER">OTHER</option>
              </select>
            </div>

            {/* Add Product Button */}
            <div className="w-full flex justify-center mt-5">
              <button className="bg-red-500 border border-red-500 p-2 hover:cursor-pointer rounded-md text-white font-semibold">
                Add Product
              </button>
            </div>

          </div>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
