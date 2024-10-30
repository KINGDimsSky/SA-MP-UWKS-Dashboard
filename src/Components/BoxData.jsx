import React from 'react'

const BoxData = ({background, icon: Users}) => {
  return (
    <div className={`box flex flex-col ${background} p-4  w-64 flex-wrap h-36 rounded-lg p-4"`}>
        {Users && <Users size ={24} className="mb-2"/>}
        <h2>Player Info</h2>
    </div>
  )
}

export default BoxData