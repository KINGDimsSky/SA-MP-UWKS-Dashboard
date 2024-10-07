import React from 'react'
import { cn } from '../lib/utils'

const Button = ({children, className, Logo}) => {
  return (
    <button className={cn('flex items-center justify-center border border-gray-300 rounded-md gap-1 py-1 w-full mb-4', className)}>
       {Logo}
        <p className='text-sm tracking-tight font-medium'>{children}</p>
    </button>
  )
}

export default Button