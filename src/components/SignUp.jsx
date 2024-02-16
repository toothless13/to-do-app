import { useNavigate } from "react-router-dom";

const SignUp = ({ setLoggedIn }) => {

  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    setLoggedIn(true);
    navigate("/");
  }

  return (
    <button onClick={handleLogin}>Sign Up</button>
  )
}

export default SignUp