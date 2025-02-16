import React from 'react'
import { useNavigate } from 'react-router-dom'

const Discover = () => {
  const navigator=useNavigate()
  return (
    <>
     <div className="mt-30 text-center mb-5 ">
    <button className='bg-violet-600 rounded-lg cursor-pointer text-white font-medium px-3 py-1.5 ' onClick={()=>navigator('/')}>Homepage</button>
    </div>
    </>
  )
}

export default Discover
