import React from 'react'
import { cn } from '../lib/utils'
import { useNavigate } from 'react-router-dom'

const Button = ({children, className, Logo, link, type}) => {

  const navigate = useNavigate();

  function clickHandler () {
    navigate(link)
  }

  return (
    <button onClick={clickHandler} type={type} className={cn(`flex items-center justify-center border border-gray-300 rounded-md gap-1 py-1 mb-4`, className)}>
      {Logo}
      <a className='text-sm tracking-tight font-medium'>{children}</a>
    </button>
  )
}

export default Button