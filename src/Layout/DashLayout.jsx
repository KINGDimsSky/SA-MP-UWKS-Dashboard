import React, { useEffect } from 'react'
import { Flag, House, Settings, User } from 'lucide-react'
import { sidebarItem } from '../config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getUsername } from '../services/Auth.service';

const DashLayout = () => {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);
    const [username, setUsername] = useState('');

    useEffect(() => {
      const tokenStatus = localStorage.getItem('token');
      if (tokenStatus){
        setUsername(getUsername(tokenStatus))      
      }else {
        navigate('/signin')    
      }
    }, [activeIndex])

    const iconMap = {
        House: House,
        User: User,
        Settings: Settings,
        Flag: Flag
      }

  return (
    <div className="flex">
    <div className="flex border-r border-gray-300 items-center  justify-between flex-col w-72 h-screen">
          <ul className='mt-28 flex flex-col w-full gap-y-4'>
            {sidebarItem.map((e, index) => {
            const MyIcons = iconMap[e.icon]
            return <li key={e.title} onClick={() => setActiveIndex(index)} className={`md:pl-6 md:text-base text-sm items-center gap-5 flex ${activeIndex === index ? `bg-pink-50 text-pink-500` : ``} hover:text-pink-500 hover:bg-pink-50 p-2 font-semibold tracking-tight`}><MyIcons size={23}/> {e.title}</li>
            })}
          </ul>
        <div className="text-xs text-gray-500 p-2 w-full flex flex-col items-center">
          <div className="garis w-full border-t border-gray-200 mb-2 bg-gray-200"></div>
          <p>Created By DimsSky</p>
          <p>Copyright © 2024</p>
        </div>
    </div>
    <div className="DashboardContent bg-gray-200 py-12 pl-6 w-full">
        <div className="content bg-white rounded-md h-full">
            <h2 className='text-2xl'>Dashboard Content</h2>
        </div>
    </div>
</div>
  )
}

export default DashLayout

/* mor_2314 */
/* 83r5^_ */