import React, { useState } from 'react'
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [data,setdata]=useState({no:'',email:'',pass:''})
  const[emailerror,Setemailerror]=useState('');
  const[noerror,Setnoerror]=useState();
  const[passerror,Setpasserror]=useState(false);


  const datahandler=(e)=>{ 

    const{value,name}=e.target;
    setdata({...data,[name]:value})
  }

  const Saveform=(e)=>{
    e.preventDefault();

    if (validations()){

      
  


      alert("form submitted");

    }
    console.log(data)

  }

  const validations=() =>{

    var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    let error=true;

    if(data.email===''){

      Setemailerror('Enter your Email');
       error=false;


    }
    else if(!pattern.test(data.email)){
      Setemailerror('enter a valid email');
      error=false;
    }
    else{
      Setemailerror('')
    }

    if(data.no==='' && data.no.length != 10){
      Setnoerror('enter a 10 digit registered mobile number');
      error=false;
    }
    else{
      Setnoerror('')
    }

    if(data.pass===''){
      Setpasserror('enter a password');
      error=false;
    }

    else if(!passwordPattern.test(data.pass)){
      Setpasserror('Password must be 8+ chars, with 1 uppercase, 1 lowercase, 1 digit, and 1 special character');
      error=false;
    }

    else{
      Setpasserror('')
    }
  }

  


  return (
   <>  
      
       

      <div className="w-full h-[100vh] flex flex-col items-center justify-center bg-gray-800">
       <h1 className='text-white font-semibold text-center text-3xl mb-5 '>Login</h1>
        <div className="  rounded-lg p-6 overflow-hidden bg-white drop-shadow-2xl w-[300px]
        h-[410px]">

          <form action="" onSubmit={(e)=>Saveform(e)}>
          <div className=" my-6 ">
            <input type="email" name='email' placeholder='abc@gmail.com' 
            className='p-2 bg-white w-60  rounded-2xl focus:outline-none border border-gray-500' value={data.email} onChange={(e)=>datahandler(e)} />
            {
                   emailerror ? <p className='text-red-600 font-bold text-sm'> {emailerror}</p> :null
                 }
          </div>

          <div className="my-6 ">
            <input type="text" name='no' placeholder='Enter Mobile Number' 
            className='p-2 bg-white w-60  rounded-2xl focus:outline-none border border-gray-500' value={data.no} onChange={(e)=>datahandler(e)} />
            {
                   noerror ? <p className='text-red-600 font-bold text-sm'> {noerror}</p> :null
                 }
          </div>

          <div className="my-6 ">
            <input type="password" name='pass' placeholder='Enter password' 
            className='p-2 bg-white w-60  rounded-2xl focus:outline-none border border-gray-500'  value={data.pass} onChange={(e)=>datahandler(e)}/>
            {
                   passerror ? <p className='text-red-600 font-bold text-sm'> {passerror}</p> :null
                 }
          </div>

          <div className="flex justify-center">
          <button className=' text-center px-5 text-lg font-semibold py-1 text-white bg-blue-400 rounded-md cursor-pointer hover:bg-blue-600'>Login </button>
          

          </div>

          <div className="flex justify-between mt-5 ?">
            <p className='text-blue-600 hover:text-blue-400 text-sm font-semibold cursor-pointer'>Forgot Password?</p>
            <NavLink to='/Signup'> <p className='text-blue-600 hover:text-blue-400 text-sm font-semibold cursor-pointer'>Sign up</p>
           </NavLink> 
          </div>


          <img src={logo} alt="" className='mt-7 ms-9 w-48' />


          </form> 
        </div>
      </div>
   </>
  )
}

export default Login

