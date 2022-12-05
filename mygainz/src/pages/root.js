import { Outlet } from 'react-router-dom';
import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';
import { ImHome } from 'react-icons/im';
import { FaDumbbell, FaChartLine, FaListAlt } from 'react-icons/fa';

export default function Root() {
  const navLinks = [
    {
      name: 'Home',
      path: '',
      icon: <ImHome />
    },
    {
      name: 'Excercises',
      path: 'excercises',
      icon: <FaDumbbell />
    },
    {
      name: 'Programs',
      path: 'programs',
      icon: <FaListAlt />
    },
    {
      name: 'Progress',
      path: 'progress',
      icon: <FaChartLine />
    }
  ];

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <SideNavBar navLinks={navLinks} />
      <TopNavBar navLinks={navLinks} />
      <div id="detail" className="w-full h-[calc(100%-75px)] sm:h-full p-7 sm:p-12">
        <Outlet />
      </div>
    </div>
  );
}