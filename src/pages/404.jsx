import React from 'react'

const NotFound = () => {
  return (
    <div className="flex gap-2 justify-center items-center h-screen">
        <h2 className='text-2xl font-bold'>404</h2>
        <div className="h-9 bg-black w-1"></div>
        <p className='text-xl font-semibold'>Pages Not Found!</p>
    </div>
  )
}

export default NotFound