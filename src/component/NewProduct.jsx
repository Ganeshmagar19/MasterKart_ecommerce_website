import allproduct from './AllProduct';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from './ProductContext';

const NewProduct = ({ selectedCategory }) => {
  const nav = useNavigate();
  const [data, setData] = useState([]);
  const {products}=useContext(ProductContext)

  // console.log(products)  

  useEffect(() => {
    fetchData();
  }, [selectedCategory,products]);

  const fetchData = () => {
    try {
      if (selectedCategory === 'ALL') {
        setData(products.slice(0, 8));
        // setData(products)
      } else {
        const filteredData =products.filter((item) => item.category === selectedCategory);
        setData(filteredData.slice(0, 8));
      }
    } catch (error) {
      console.log('Error fetching data', error);
    }
  };

  return (
    <div className="w-full md:w-[90vw] mx-auto min-h-screen p-5">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((val, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => nav('/Products')}
          >
            {/* Product Image */}
            <div className="w-full h-[220px] bg-gray-100 flex justify-center items-center">
              <img
                src={val.img}
                alt={val.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card Body */}
            <div className="p-4 text-center">
              <h3 className="text-green-600 text-md uppercase font-semibold tracking-wide">
                {val.category}
              </h3>
              <p className="text-gray-800 font-semibold text-base mt-1">{val.name}</p>

              {/* Rating */}
              <div className="flex justify-center items-center mt-1 text-yellow-500 text-xl">
                {'★'.repeat(val.rating) + '☆'.repeat(5 - val.rating)}
              </div>

              {/* Pricing */}
              <p className="mt-2">
                <span className="text-black font-bold text-lg">$ {val.offer_price}</span>
                <span className="text-gray-500 text-sm line-through ml-2">$ {val.p_price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProduct