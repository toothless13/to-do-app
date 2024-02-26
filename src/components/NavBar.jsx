import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = ({ loggedIn, setLoggedIn }) => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleLogout = e => {
    e.preventDefault();
    setLoggedIn(false);
  }

  return (
    <div className="flex justify-between items-center p-3 text-zinc-300 border-solid border-b-2 border-zinc-300 mb-5">
      <Link reloadDocument to="/" className="text-xl font-bold hover:text-teal-400">To-Do App</Link>
      <div className="mobile-nav flex lg:hidden">
        <div 
          className="hamburger-icon space-y-2"
          onClick={() => setIsNavOpen((prev) => !prev)}  
        >
          <span className="block h-0.5 w-8 bg-zinc-300"></span>
          <span className="block h-0.5 w-8 bg-zinc-300"></span>
          <span className="block h-0.5 w-8 bg-zinc-300"></span>
        </div>
        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div 
            className="absolute top-0 right-0 p-3"
            onClick={() => setIsNavOpen(false)}
          >
            <svg 
              className="h-8 w-8 text-zinc-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          {loggedIn ? 
            <ul className="nav-mobile-open flex flex-col items-center min-h-[250px]">
              <a onClick={(e) => {handleLogout(e); setIsNavOpen(false);}} className="ml-2 hover:bg-teal-400 hover:text-zinc-800 hover:cursor-pointer p-4" >Logout</a>
            </ul> :
            <ul className="nav-mobile-open flex flex-col items-center min-h-[250px]">
              <NavLink 
                to="login" 
                className="border-b border-zinc-300 my-3 
                uppercase" onClick={() => setIsNavOpen(false)}
              >
                Login
              </NavLink>
              <NavLink 
                to="sign-up" 
                className="border-b border-zinc-300 my-3 uppercase" 
                onClick={() => setIsNavOpen(false)} 
              >
                Sign Up
              </NavLink>          
            </ul>
          }
        </div>
      </div>
      <div className="desktop-nav user text-xl hidden lg:flex">
        {loggedIn ?  
          <a onClick={() => {handleLogout; setIsNavOpen(false);}} className="ml-2 hover:bg-teal-400 hover:text-zinc-800 hover:cursor-pointer p-4" >Logout</a>
          : 
          <div>
            <NavLink to="login" className="mx-2 hover:bg-teal-400 hover:text-zinc-800 p-4">Login</NavLink>
            <NavLink to="sign-up" className="ml-2 hover:bg-teal-400 hover:text-zinc-800 p-4" >Sign Up</NavLink>
          </div>}
      </div>
    </div>
  )
}

export default NavBar