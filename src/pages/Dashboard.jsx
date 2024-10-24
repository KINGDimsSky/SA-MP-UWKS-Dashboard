import Navbar from '../Components/Navbar';
import DashLayout from '../Layout/DashLayout';

const Dashboard = () => {

  return (
    <div className="flex flex-col">
      <Navbar/>
      <DashLayout/>
    </div>
  )
}

export default Dashboard