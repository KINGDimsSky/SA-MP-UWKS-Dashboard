import React from 'react'

const InputForm = ({label, placeholder, type, htmlFor}) => {

  return (
    <form action="">
      <label htmlFor={htmlFor} className='text-sm font-medium tracking-tight mb-2'>{label}</label>
      <input name={htmlFor} id={htmlFor} type={type} placeholder={placeholder} className='border w-full py-2 px-2 border-gray-300 rounded-md mb-4 placeholder:text-xs' />
    </form>
    
  )
}

export default InputForm