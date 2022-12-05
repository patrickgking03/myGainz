import { NavLink } from 'react-router-dom';

export default function TopNavBar({ navLinks }) {
  return <>
    <div id="sidebar" className="inline sm:hidden items-center border selection:border-b-2 bg-slate-100">
      <div className="p-4 flex justify-between text-center items-center">
        {
          navLinks.map(n => (
            <NavLink
              key={n.name}
              to={n.path}
              className={({ isActive }) =>
                isActive ? "text-white bg-blue-500 px-6 py-4 rounded-lg"
                  : "text-black px-6 py-4 rounded-lg hover:bg-slate-200"
              }
            >
              {n.icon}
            </NavLink>
          ))
        }
      </div>
    </div>
  </>;
}