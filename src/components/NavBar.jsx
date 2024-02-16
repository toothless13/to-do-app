import { NavLink, Link } from "react-router-dom";

const NavBar = ({ loggedIn, setLoggedIn }) => {

  const handleLogout = e => {
    e.preventDefault();
    setLoggedIn(false);
  }

  return (
    <div>
      <Link reloadDocument to="/">To-Do App</Link>
      <div className="user">
        {loggedIn ?  
          <button onClick={handleLogout}>Logout</button>
          : 
          <div>
            <NavLink to="login">Login</NavLink>
            <NavLink to="sign-up">Sign Up</NavLink>
          </div>}
      </div>
    </div>
  )
}

export default NavBar