import { NavLink } from 'react-router-dom';

export default function SideNavBar({ navLinks }) {
  return <>
    <div id="sidebar" className="hidden sm:inline w-48 md:w-64 items-center border-r-2 bg-slate-100 h-full">
      <div className="bg-gray-100 w-full h-20 grid place-content-center border-b-2">
        <h1 className="font-bold text-3xl text-blue-600 select-none">myGainz</h1>
      </div>
      <div className="py-8 px-6 flex flex-col text-center items-center w-full gap-6">
        {
          navLinks.map(n => (
            <NavLink
              key={n.name}
              to={n.path}
              className={({ isActive }) =>
                isActive ? "text-white bg-blue-500 px-8 py-4 rounded-lg w-full"
                  : "text-black px-8 py-4 rounded-lg w-full hover:bg-slate-200"
              }
            >
              {n.name}
            </NavLink>
          ))
        }
      </div>
    </div>
  </>;
}