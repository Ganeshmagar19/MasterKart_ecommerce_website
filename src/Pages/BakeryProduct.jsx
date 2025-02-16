import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const BakeryProduct = () => {
  const nav=useNavigate()
  const bakery = [
    {
      id: "29",
      img: "https://www.aromabakeryonline.com/image/cache/catalog/products/milk-cookies-600x600.jpg",
      name: "Milk Cookies",
      p_price: "100.00",
      offer_price: "80.00",
    },
    {
      id: "30",
      img: "https://www.aromabakeryonline.com/image/cache/catalog/products/ginger-cookies-600x600.jpg",
      name: "Ginger Cookies",
      p_price: "90.00",
      offer_price: "80.00",
    },
    {
      id: "31",
      img: "https://www.aromabakeryonline.com/image/cache/catalog/products/rye-cookies-600x600.jpg",
      name: "Rye Cookies",
      p_price: "80.00",
      offer_price: "60.00",
    },
    {
      id: "32",
      img: "https://www.aromabakeryonline.com/image/cache/catalog/products/fruit-nut-cookies-600x600.jpg",
      name: "Fruit & Nut Cookies",
      p_price: "60.00",
      offer_price: "50.00",
    },
    {
      id: "33",
      img: "https://www.aromabakeryonline.com/image/cache/catalog/products/cookies/salt-cookie-600x600.jpg",
      name: "Salt Cookies",
      p_price: "70.00",
      offer_price: "60.00",
    },
    {
      id: "34",
      img: "https://www.aromabakeryonline.com/image/cache/catalog/products/sweet-cookies-600x600.jpg",
      name: "Sweet Cookies",
      p_price: "80.00",
      offer_price: "60.00",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bakery-slider-container mx-auto w-full max-w-[1200px] p-5">
     

      <Slider {...settings}>
        {bakery.map((val) => (
          <div key={val.id} className="p-4">
            <div className="bakery-card bg-white shadow-lg rounded-lg p-4">
              {/* Image */}
              <div className="image-container">
                <img
                  src={val.img}
                  alt={val.name}
                  className="w-full h-[250px] object-cover cursor-pointer rounded-md"
                  onClick={()=>nav('/Products')}
                />
              </div>

              {/* Product Name & Price */}
              <div className="text-center mt-3">
                <h3 className="text-lg font-semibold">{val.name}</h3>
                <p className="text-green-700 font-bold text-lg">
                  ${val.offer_price}{" "}
                  <span className="text-gray-500 line-through text-sm">
                    ${val.p_price}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BakeryProduct;
