import React, { useEffect, useState } from 'react'
import { Bell, ChevronDown, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
  const username = localStorage.getItem('username');
  const [clicked, setClicked] = useState(false)

  const handlerClicker = () => {
    alert("Clicked")
  }

  const dropdownHandler = () => {
    if (clicked){
      setClicked(false)
    }else{
      setClicked(true)
    }
  }

  const logOutHandler = () => {
    localStorage.removeItem('token');
    navigate('/')
    
  }
  
  return (
    <div className="fixed z-50 justify-between flex w-full  gap-2 items-center px-8 bg-white border-b border-gray-400 h-14">
      <div className="flex items-center gap-3"> 
       <p className='bg-yellow-50 '>...</p>
       <h2 className='font-semibold text-2xl'>UWKS Roleplay</h2>
      </div>
      <div className="flex h-full bg-white items-center gap-2">
        <Bell className='cursor-pointer' onClick={handlerClicker}/>
        <p className='ml-4 tracking-tight font-semibold'>{username}</p>
        <div className="w-8 h-8 rounded-full bg-red-500"></div>
        <ChevronDown onClick={dropdownHandler}/>
      </div>
         <div className={`absolute flex  -z-30 right-8 w-[11.5rem] h-12 transition-all duration-500 p-2 tracking-tight ${clicked ? 'translate-y-12 flex bg-white border border-gray-200 shadow-md text-black' : 'bg-white'}`}>
          <div onClick={logOutHandler} className="flex gap-3 items-center  text-base w-full font-semibold py-1 px-2 hover:text-pink-400 hover:bg-pink-50">
          <LogOut size={18}/>
          <a className=''>LogOut</a>
          </div>
         </div>
    </div>
  )
}

export default Navbar