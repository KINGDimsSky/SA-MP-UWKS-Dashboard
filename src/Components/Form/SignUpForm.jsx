import React from 'react'
import { Rocket } from 'lucide-react';

const SignUpForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
        <div className="box flex flex-col border border-gray-400">
          <div className="flex gap-2 items-center mb-4">
            <Rocket size={22}/>
            <h2 className='text-2xl font-semibold'>Sign Up</h2>
          </div>
          
        </div>
    </div>
  )
}

export default SignUpForm