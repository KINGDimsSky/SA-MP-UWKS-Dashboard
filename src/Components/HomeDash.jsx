import React from 'react'
import BoxData from './BoxData'
import { Users, Activity, Gamepad } from 'lucide-react';


const HomeDash = () => {
  return (
    <div className="flex gap-6">
       <BoxData background="bg-yellow-200" icon={Users}/>
       <BoxData background="bg-pink-200" icon={Activity}/>
       <BoxData background="bg-green-200" icon={Gamepad}/>
    </div>
  )
}

export default HomeDash