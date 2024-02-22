import { NavLink, Link } from "react-router-dom";

const NavBar = ({ loggedIn, setLoggedIn }) => {

  const handleLogout = e => {
    e.preventDefault();
    setLoggedIn(false);
  }

  return (
    <div className="flex justify-between p-3 text-teal-400">
      <Link reloadDocument to="/" className="text-xl font-bold">To-Do App</Link>
      <div className="user mx-2 text-xl">
        {loggedIn ?  
          <button onClick={handleLogout} className="mx-2" >Logout</button>
          : 
          <div>
            <NavLink to="login" className="mx-2">Login</NavLink>
            <NavLink to="sign-up" className="mx-2" >Sign Up</NavLink>
          </div>}
      </div>
    </div>
  )
}

export default NavBar