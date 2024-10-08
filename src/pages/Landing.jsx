import React from 'react'
import Button from '../Components/Button'


const Landing = () => {
  return (
    <div className="min-h-screen flex justify-between items-center ">
        <div className="title md:ml-40 mb-20">
            <h2 className='font-bold text-xl md:text-4xl tracking-tight'>UWKS SA:MP Roleplay</h2>
            <h2 className='font-bold text-xl md:text-4xl tracking-tight mb-4'>GET YOUR EXPERIENCE WITH US!</h2>
            <p className='text-xs md:text-sm text-gray-600 mb-8'>Bergabunglah dengan dunia multiplayer tanpa batas <br /> Nikmati pengalaman bermain GTA San Andreas <br /> bersama teman-teman dengan fitur kustom UWKS yang seru dan kompetitif.</p>
            <div className="flex gap-2">
                <Button link="/signin" className="w-28 bg-purple-500 text-white py-2 px-6">
                Login
                </Button>
                <Button link="/signup" className="w-28 bg-black text-white px-6">
                 Register
                </Button>
            </div>
        </div>
        <div className="w-[40rem] h-[30rem] flex items-center md:mb-32 justify-center md:mr-40">
            <img className='w-[22rem] select-none' draggable='false' src="/public/PED.png" alt="img" />
        </div>
    </div>
  )
}

export default Landing