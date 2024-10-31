import React from 'react'
import BoxData from './BoxData'
import { Users, Activity, Gamepad } from 'lucide-react';


const HomeDash = () => {
  return (
    <div className="flex flex-col md:items-center">
       <div className="flex flex-wrap gap-6 mb-12">
         <BoxData background="bg-yellow-200" icon={Users} title="Player Info"/>
         <BoxData background="bg-pink-200" icon={Activity} title="Server Status"/>
         <BoxData background="bg-green-200" icon={Gamepad} title="Gamemode"/>
         <div className="bg-blue-200 w-[26em] p-4">
            <h2 className='text-white font-semibold text-xl'>Server Running Fluenlty</h2>
         </div>
       </div>
       <div className="data bg-gray-100 w-full md:w-[75rem]">
        <h2 className=''>Data</h2>
       </div>
    </div>
   
  )
}

export default HomeDash