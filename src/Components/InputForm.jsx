import React from 'react'

const InputForm = ({label, placeholder, type, value}) => {


  return (
    <div className="container">
        <h2 className='text-sm font-medium tracking-tight mb-2'>{label}</h2>
        <input value={value} onChange={(e) => console.log(e.target.value)} type={type} className='border w-full py-2 px-2 border-gray-300 rounded-md mb-4 placeholder:text-xs' placeholder={placeholder}/>
    </div>
  )
}

export default InputForm