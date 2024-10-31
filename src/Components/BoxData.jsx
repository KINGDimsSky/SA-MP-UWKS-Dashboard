import React from 'react'

const BoxData = ({background, icon: Users, title}) => {
  return (
    <div className={`box flex flex-col ${background} p-4 w-40 md:w-80 flex-wrap h-36 rounded-lg p-4"`}>
        {Users && <Users size ={24} className="mb-2"/>}
        <h2 className='md:text-base text-sm'>{title}</h2>
    </div>
  )
}

export default BoxData