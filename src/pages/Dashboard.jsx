import { Flag, House, Settings, User } from 'lucide-react'
import { sidebarItem } from '../config'

const Dashboard = () => {

  const iconMap = {
    House: House,
    User: User,
    Settings: Settings,
    Flag: Flag
  }

  return (
    <div className="flex">
        <div className="flex border-r border-gray-300 items-center  justify-between flex-col w-80 h-screen">
            <h2 className='text-3xl  ml-2 mt-2 font-semibold'>UWKS RolePlay</h2>
            <div className="navigation">
              <ul className='bg-yellow-200 flex flex-col gap-y-6'>
                {sidebarItem.map((e) => {
                const MyIcons = iconMap[e.icon]
                return <li key={e.title} className=' gap-2 flex text-lg font-semibold tracking-tight'><MyIcons/> {e.title}</li>
                })}
              </ul>
            </div>
            <div className="text-2xl">
              <p>Footer</p>
            </div>
        </div>
        <div className="DashboardContent bg-gray-200 p-6 w-full">
            <div className="content">
                <h2 className='text-2xl'>Dashboard Content</h2>
            </div>
        </div>
    </div>
  )
}

export default Dashboard