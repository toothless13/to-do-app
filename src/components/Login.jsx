import { useNavigate } from "react-router-dom";

const Login = ({ setLoggedIn }) => {

  const navigate = useNavigate();
  
  const handleLogin = e => {
    e.preventDefault();
    setLoggedIn(true);
    navigate("/");
  }

  return (
    <button onClick={handleLogin}>Login</button>
  )
}

export default Login