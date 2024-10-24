import { forwardRef } from 'react'

const InputForm = forwardRef(({label, placeholder, type, htmlFor}, ref) => {
  return (
    <div>
      <label htmlFor={htmlFor} className='text-sm font-medium tracking-tight mb-2'>{label}</label>
      <input ref={ref} name={htmlFor} id={htmlFor} type={type} placeholder={placeholder} className='border w-full py-2 px-2 border-gray-300 rounded-md mb-4 placeholder:text-xs' />
    </div>
  )
})

export default InputForm