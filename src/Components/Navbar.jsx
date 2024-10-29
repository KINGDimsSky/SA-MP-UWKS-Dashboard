import React, { useEffect, useState } from 'react'
import { Bell, ChevronDown  } from 'lucide-react';

const Navbar = () => {
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

  useEffect(() => {
    console.log (clicked)
  }, [clicked])

  return (
    <div className="absolute justify-between flex w-full gap-2 items-center px-8 bg-white border-b border-gray-400 h-12">
      <div className="flex items-center gap-3">
       <p className='bg-yellow-50 '>...</p>
       <h2 className='font-semibold text-2xl'>UWKS Roleplay</h2>
      </div>
      <div className="flex items-center gap-2">
        <Bell className='cursor-pointer' onClick={handlerClicker}/>
        <p className='ml-4 tracking-tight font-semibold'>{username}</p>
        <div className="w-8 h-8 rounded-full bg-red-500"></div>
        <ChevronDown onClick={dropdownHandler}/>
      </div>
      {clicked && (
         <div className="absolute bg-emerald-300 right-0 w-44 top-12 transition-all duration-500">test</div>
      )}
     
    </div>
  )
}

export default Navbar