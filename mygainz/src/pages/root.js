import { Outlet } from 'react-router-dom';
import SideNavBar from '../components/SideNavBar';

export default function Root() {
  const navLinks = [
    {
      name: 'Home',
      path: ''
    },
    {
      name: 'Excercises',
      path: 'excercises'
    },
    {
      name: 'Programs',
      path: 'programs'
    },
    {
      name: 'Progress',
      path: 'progress'
    }
  ];

  return (
    <div className="flex h-screen">
      <SideNavBar navLinks={navLinks} />

      <div id="detail" className="w-full p-12">
        <Outlet />
      </div>
    </div>
  );
}