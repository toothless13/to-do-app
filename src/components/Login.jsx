import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../config/firebase";

const Login = () => {
  const initialState = {
    fields: {
      email: "",
      password: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const navigate = useNavigate();
  
  const handleLogin = async e => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, fields.email, fields.password)
      .then(() => {
        console.log("User Logged In");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFieldChange = e => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <div>
      <h2 className="mx-auto w-fit text-2xl mb-8">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col w-1/4 mx-auto text-zinc-300 space-y-4">
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" onChange={handleFieldChange} className="text-zinc-800"/>
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" autoComplete="off" onChange={handleFieldChange} className="text-zinc-800" />
        <button type="submit" className="mx-2 hover:bg-teal-400 hover:text-zinc-800 p-4 border-2 border-zinc-300 hover:border-teal-400">Login</button>
      </form>
    </div>
  )
}

export default Login