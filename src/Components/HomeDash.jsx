import React from 'react'
import BoxData from './BoxData'
import { Users, Activity, Gamepad } from 'lucide-react';
import Stats from './Stats';


const HomeDash = () => {
  return (
    <div className="flex flex-col md:items-center">
       <div className="flex flex-wrap gap-6 mb-12">
         <BoxData background="bg-yellow-200" icon={Users} title="Player Info"/>
         <BoxData background="bg-pink-200" icon={Activity} title="Server Status"/>
         <BoxData background="bg-green-200" icon={Gamepad} title="Gamemode"/>
         <div className="bg-blue-900 w-[26em] p-4">
            <h2 className='text-white font-semibold text-xl'>Server Running Fluenlty</h2>
         </div>
       </div>
       <div className="flex flex-col px-6 rounded-lg py-6 shadow-xl bg-gray-100 w-full md:w-[75rem]">
          <div className="flex justify-between">
            <h2 className='font-semibold'>UWKS Roleplay</h2>
            <div className="flex gap-12">
             <Stats title="Max Players" data="1000"/>
             <Stats title="Player Count" data="102 / 1000"/>
            </div>
          </div>
       </div>
    </div>
   
  )
}

export default HomeDash