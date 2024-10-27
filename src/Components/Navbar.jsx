import React from 'react'

const Navbar = ({username}) => {
  return (
    <div className="absolute justify-between flex w-full gap-2 items-center px-8 bg-white border-b border-gray-400 h-12">
        <h2>Belom ada Navbar</h2>
        {username}
    </div>
  )
}

export default Navbar