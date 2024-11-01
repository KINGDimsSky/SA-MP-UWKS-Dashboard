import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="border border-gray-200 shadow-2xl p-4 flex flex-col w-[26rem]">
        {children}
        </div>
    </div>
  )
}

export default AuthLayout