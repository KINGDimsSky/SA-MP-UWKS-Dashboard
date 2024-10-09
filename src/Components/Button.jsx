import React from 'react'
import { cn } from '../lib/utils'
import { Link } from 'react-router-dom'

const Button = ({children, className, Logo, link}) => {

  return (
    <Link to={link} className={cn(`flex items-center justify-center border border-gray-300 rounded-md gap-1 py-1 mb-4`, className)}>
      {Logo}
      <p className='text-sm tracking-tight font-medium'>{children}</p>
    </Link>
  )
}

export default Button