import React, { useState } from "react";
import Slider from "react-slick";
import allProducts from "../component/AllProduct";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ProductSlider = () => {
  var settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const product_slider = [
    { id: 1, img: "https://maraviyainfotech.com/wrapbootstrap/masterkart-html/masterkart-html/assets/img/product-images/25_1.jpg", p_price: 35.0, offer_price: 25.0, name: "Lichi", category: "Fruits" },
    { id: 2, img: "https://maraviyainfotech.com/wrapbootstrap/masterkart-html/masterkart-html/assets/img/product-images/28_1.jpg", p_price: 55.0, offer_price: 50.0, name: "Mango Kesar", category: "Fruits" },
    { id: 3, img: "https://maraviyainfotech.com/wrapbootstrap/masterkart-html/masterkart-html/assets/img/product-images/22_1.jpg", p_price: 17.0, offer_price: 15.0, name: "Kamalam Fruit", category: "Fruits" },
    { id: 4, img: "https://maraviyainfotech.com/wrapbootstrap/masterkart-html/masterkart-html/assets/img/product-images/23_1.jpg", p_price: 16.0, offer_price: 11.0, name: "Blueberry", category: "Fruits" },
    { id: 5, img: "https://maraviyainfotech.com/wrapbootstrap/masterkart-html/masterkart-html/assets/img/product-images/24_1.jpg", p_price: 21.0, offer_price: 20.0, name: "Cherry", category: "Fruits" },
    { id: 6, img: "https://maraviyainfotech.com/wrapbootstrap/masterkart-html/masterkart-html/assets/img/product-images/29_1.jpg", p_price: 15.0, offer_price: 14.0, name: "Pineapple", category: "Fruits" },
  ];

//   const [showDetails,setshowDetails]=useState(false)
//   const [data,setdata]=useState([])

//   const ShowHandler=(id)=>{
//     setshowDetails(true);
//     const filterdata=allProducts.filter((items)=>items.id === id) ;
//     setdata(filterdata)
//      console.log(filterdata)
//   }
  return (
    <div className="w-full mx-auto max-w-6xl p-6">
      
      <Slider {...settings}>
        {product_slider.map((product) => (
          <div key={product.id} className="px-2">
            <div className="relative bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              {/* Product Image */}
              <div className="relative">
                <img src={product.img} alt={product.name} className="w-full h-52 object-cover" />
                {/* Eye Icon for Details */}
                <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
                  <i className="bx bx-show text-xl cursor-pointer text-gray-700" ></i>
                </button>
              </div>
              {/* Product Info */}
              <div className="p-4 text-center">
                <p className="text-md uppercase text-green-700">{product.category}</p>
                <h3 className="text-lg font-semibold uppercase text-gray-600 mt-1">
                  {product.name}
                </h3>
                <p className="mt-2 text-lg font-bold text-black">
                  ${product.offer_price}.00
                  <span className="text-md mx-3 text-gray-400 line-through">
                    ${product.p_price}.00
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ProductSlider;
