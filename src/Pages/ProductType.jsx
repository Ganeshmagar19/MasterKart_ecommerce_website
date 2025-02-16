import React from 'react'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Bakery from '../assets/Bakery.svg';
import Vegetables from '../assets/Vegetables.svg';
import DairyMilk from '../assets/Dairy&Milk.svg';
import Eggs from '../assets/Eggs.svg';
import FastFood from '../assets/fastFood.svg';
import Fruits from '../assets/Fruits.svg';
import Juice from '../assets/Juice.svg';
import Seafood from '../assets/seafood.png';
import SnackSpice from '../assets/Snack&Spice.svg';

const ProductType = () => {

    var settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:5,
                }
            },
            {
                breakpoint:768,
                settings:{
                    slidesToShow:3,
                }
            },
            {
                breakpoint:480,
                settings:{
                    slidesToShow:1
                }
            }
        ]
    };

    const product_type = [
        { img: Bakery, Title: 'Bakery', no: 65 },
        { img: Vegetables, Title: 'Vegetables', no: 648 },
        { img: DairyMilk, Title: 'Dairy & Milk', no: 48 },
        { img: Eggs, Title: 'Eggs', no: 154 },
        { img: FastFood, Title: 'FastFood', no: 253 },
        { img: Fruits, Title: 'Fruits', no: 320 },
        { img: Juice, Title: 'Juice', no: 845 },
        { img: Seafood, Title: 'Seafood', no: 652 },
        { img: SnackSpice, Title: 'Snack & Spice', no: 48 }
    ];
    return (
        <>

            <div className="mt-32  md:mt-0 w-full  md:w-3/4 mx-auto  ">
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"> */}

                <div className="mt-20 border border-[#EEEEEE] p-5 ">
                    <Slider {...settings}>

                        {
                            product_type.map((val, index,array) => {

                                return (

                                    <>
                                        <div key={index} className="bg-slate-100 flex flex-col items-center justify-center mx-3 rounded p-5 cursor-pointer ">

                                            <div>
                                                <img src={val.img} alt="" className='w-14 h-14 ' />
                                            </div>
                                            <h3 className='uppercase text-black mt-2 font-semibold'>{val.Title}</h3>
                                            <p className='text-gray-500 text-lg mt-2'>{val.no} items</p>
                                        </div>



                                    </>
                                )
                            })
                        }
                    </Slider>

                </div>
            </div>

        </>
    )
}

export default ProductType
