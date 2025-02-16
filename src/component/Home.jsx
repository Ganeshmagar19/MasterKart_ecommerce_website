import React, { useEffect, useState } from 'react'
import newsletter from '../assets/newsletter.png';
import HeroTop from '../assets/HeroTop.png';
import HeroTop2 from '../assets/HeroTop2.png';
import slider from '../assets/slider.png'
import slider2 from '../assets/slider2.png'
import DairyandBakery from '../assets/Dairy&Bakery.png';
import fruitandveggie from '../assets/Fruit&veggie.png';
import snackandspice from '../assets/snack&spice.png';
import ProductType from '../Pages/ProductType';
import BakeryProduct from '../Pages/BakeryProduct';
import ProductSlider from '../Pages/ProductSlider';
import NewProduct from './NewProduct';

const Home = () => {
  const images = [slider, slider2];
  const [selectedCategory, setselectedCategory] = useState("ALL")

  const [currentIndex, setCurrentIndex] = useState(0)
  const [showMessage, setshowMessage] = useState(false);

  const PrevSlide = () => {

    setCurrentIndex((PrevIndex) => (PrevIndex + 1) % images.length)
  }


  const NextSlide = () => {
    setCurrentIndex((PrevIndex) => (PrevIndex === 0 ? images.length - 1 : PrevIndex - 1))
  }

  useEffect(() => {
    const interval = setInterval(NextSlide, 8000);
    return () => clearInterval(interval);
  }, [currentIndex])

  useEffect(() => {


    setTimeout(() => {

      setshowMessage(true);
      // alert('settimeout called')
    }, 5000);

    // return () => clearTimeout(timer);
  }, [])
  return (
    <>
      {showMessage && (

        <div className="newsletter flex items-center justify-center inset-0 
           fixed  bg-[rgba(0,0,0,0.7)]   z-50 ">
          <div className="newsletter-content drop-shadow-2xl relative
            rounded-xl bg-white flex md:w-[550px] h-auto p-6 gap-6">

            <button
              onClick={() => setshowMessage(false)}
              className="absolute top-2 right-2 cursor-pointer px-2 py-1 
                  text-sm  bg-white"
            >
              ✖
            </button>


            <div className="newsletter-image w-1/2">
              <img src={newsletter} alt="" className='md:w-[320px]' />
            </div>
            <div className="newsletter-text w-1/2 text-center">
              <h1 className='text-dark  text-center text-3xl  font-semibold'>Newsletter</h1>
              <p className='text-gray-400 mt-2 text-center mb-2'>Subscribe the Masterkart to get in touch and getthe future update  </p>

              <input type="email" name="email" id="n_email" placeholder='Enter Email'
                className='md:p-2 p-1  mt-3 focus-outline:none border border-gray-400 rounded-md' />

              <button className='bg-violet-500 text-white text-lg text-center
                   px-4 py-2  rounded-md mt-3  '>Subscribe</button>

            </div>
          </div>

        </div>



      )}

      <section id='Home' className='w-full md:mx-12 pt-10 md:mb-20 mb-40 mt-5'>
        <div className="hero-section flex flex-col md:flex-row gap-10 relative h-[500px]">

          <div className=" slider md:w-3/5 w-full flex justify-center items-center relative min-h-[250px] overflow-hidden ">

            <div className=" h-[250px] mx-auto md:h-full w-full absolute bg-center bg-cover object-cover transition-all duration-[1500ms] ease-in-out flex flex-col justify-center
                     items-start md:px-12 px-8 "
              style={{ backgroundImage: `url(${images[currentIndex]})` }}>
              {
                currentIndex === 0 ? (<>


                  <p className='mt-1 text-lg text-gray-600 '>Fresh & Healthy</p>
                  <p className='mt-1 md:text-[32px] text-lg font-[Quicksand]  text-green-800 font-semibold'>Fruits & Vegetables</p>
                  <p className='mt-1 md:text-[22px] text-lg text-gray-600 font-bold '>Starting at $ 29.99</p>
                  <button className='bg-black px-3 py-1 font-semibold mt-2 text-white rounded cursor-pointer hover:bg-gray-800'>Shop Now <span ><i className='bx bx-chevrons-right '></i></span></button>
                </>) : (<>

                  <p className='mt-1 text-lg text-gray-600 '>Organic & Healthy</p>
                  <p className='mt-1 md:text-[32px] text-lg  font-[Quicksand]  text-green-800 font-semibold'>Snack & Spices</p>
                  <p className='mt-1 md:text-[22px] text-lg text-gray-600 font-bold '>Starting at $ 20.00</p>
                  <button className='bg-black px-3 py-1 font-semibold mt-2 text-white rounded cursor-pointer hover:bg-gray-800'>Shop Now <span ><i className='bx bx-chevrons-right '></i></span></button>




                </>


                )
              } :

              <div className="absolute  inset-0 flex items-end gap-2 justify-center px-4 pb-4">
                <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 hover:bg-black hover:text-white transition-all" onClick={() => PrevSlide()}>●</button>
                <button className=' w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 hover:bg-black hover:text-white transition-all' onClick={() => NextSlide()}> ●</button>
              </div>
            </div>



          </div>

          <div className='md:w-2/5 w-full  flex flex-col gap-3 '>
            <div className="md:w-96 w-full   h-[250px] bg-center bg-cover flex flex-col items-start px-8 justify-center "
              style={{ backgroundImage: `url(${HeroTop})` }}>
              <p className='mt-1 text-lg text-green-800'>Fresh</p>
              <p className='mt-1 text-[22px] font-semibold'>Fruits</p>
              <button className='bg-black px-3 py-1 font-semibold mt-2 text-white rounded cursor-pointer hover:bg-gray-800'>Shop Now <span ><i className='bx bx-chevrons-right '></i></span></button>
            </div>

            <div className="md:w-96 w-full h-[250px] bg-center bg-cover flex flex-col items-start px-8 justify-center"
              style={{ backgroundImage: `url(${HeroTop2})` }}>
              <p className='mt-1 text-lg text-green-800'>Organics</p>
              <p className='mt-1 text-[22px] font-semibold'>Vegetables </p>
              <button className='bg-black px-3 py-1 font-semibold mt-2 text-white rounded cursor-pointer hover:bg-gray-800'>Shop Now <span ><i className='bx bx-chevrons-right '></i></span></button>
            </div>
          </div>

        </div>






      </section>

      <div className='mt-80 md:mt-5 relative'>
        <ProductType />
      </div>


      <div className='flex flex-col md:flex-row justify-between lg:w-3/4 w-full ms-2 md:ms-20

         mx-auto mt-10'>
        <h1 className='text-black text-3xl font-semibold'>New <span className='text-green-800'>Products</span></h1>
        <ul className='flex gap-5 cursor-pointer'>
          <li className={`uppercase  text-gray-700 text-md font-medium ${selectedCategory === "ALL" ? 'text-green-600' : ''}`}
            onClick={() => setselectedCategory("ALL")}>All</li>

          <li className={`uppercase text-gray-700 text-md font-medium ${selectedCategory === "SNACKS" ? 'text-green-600' : ''}`}
            onClick={() => setselectedCategory("SNACKS")}>snack & spices</li>

          <li className={`uppercase text-gray-700 text-md font-medium ${selectedCategory === "FRUITS" ? 'text-green-600' : ''}`}
            onClick={() => setselectedCategory("FRUITS")}
          >Fruits</li>

          <li className={`uppercase text-gray-700 text-md font-medium ${selectedCategory === "VEGETABLES" ? 'text-green-600' : ''}`}
            onClick={() => setselectedCategory("VEGETABLES")}>vegetables</li>
        </ul>
      </div>

     

        <NewProduct selectedCategory={selectedCategory} />
      


      <div className="bakery w-full md:w-[90vw] p-5 text-end mx-auto md:h-[400px] 
          h-[250px]     bg-cover bg-center object-cover my-10 "
        style={{ backgroundImage: `Url(${DairyandBakery})` }}>
        <h1 className='text-[#84cc9e] md:text-3xl md:font-bold md:me-[50px] text-sm font-medium mt-18' >Dairy And Bakery Fresh Products </h1>
        <h3 className='text-black md:text-3xl md:me-[100px] mt-2 text-sm md:mt-5'>30% off sale <span className='text-gray-600'>hurry up !!!</span></h3>
     </div>

     <BakeryProduct/>


     <div className=' md:w-[90%] w-full h-[400px] mx-auto md:h-[300px]  flex flex-col md:flex-row gap-7 my-10'>
       <div className='mx-2 w-full h-full bg-center bg-cover p-3' style={{backgroundImage:`Url(${fruitandveggie})`}}>
         
     
         <div className='flex flex-col gap-2  items-end md:mt-10'>
         <h1 className='text-[#84cc9e] md:text-3xl md:font-bold md:me-[40px] text-sm font-medium '>Fruit and veggie</h1>
         <p className='text-gray-600 text-md  md:me-[50px]'>A healthy meal for everyone</p>
         <button className='bg-black text-white md:me-[50px] rounded py-1  px-2'>shop now</button>
         </div>
         
       </div>
       <div className='mx-2 w-full h-full bg-center bg-cover p-3' style={{backgroundImage:`Url(${snackandspice})`}}>
       <div className='flex flex-col gap-2 items-end md:mt-10'>
           <h1 className='text-[#84cc9e] md:text-3xl md:font-bold md:me-[20px] text-sm font-medium '>Snack and spices</h1>
         <p className='text-gray-600 md:text-md text-sm  md:me-[20px] '>The Flavor of something special</p>
         <button className='bg-black text-white md:me-[20px] rounded py-1 px-2'>shop now</button>
         </div>
       </div>
     </div>


     <div className="w-[90vw] p-3 mx-auto font-bold text-3xl"><h1>Deal Of The <span className='text-[#84cc9e] '>Day</span></h1></div>

<div>

<ProductSlider/>
</div>




    </>
  )
}

export default Home
