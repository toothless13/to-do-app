import { NavLink, Link } from "react-router-dom";

const NavBar = ({ loggedIn, setLoggedIn }) => {

  const handleLogout = e => {
    e.preventDefault();
    setLoggedIn(false);
  }

  return (
    <div className="flex justify-between items-center p-3 text-zinc-300 border-solid border-b-2 border-zinc-300 mb-5">
      <Link reloadDocument to="/" className="text-xl font-bold hover:text-teal-400">To-Do App</Link>
      <div className="user text-xl">
        {loggedIn ?  
          <a onClick={handleLogout} className="ml-2 hover:bg-teal-400 hover:text-zinc-800 hover:cursor-pointer p-4" >Logout</a>
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