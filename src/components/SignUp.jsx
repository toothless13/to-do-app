import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../config/firebase";


const SignUp = () => {
  const initialState = {
    fields: {
      username: "",
      email: "",
      password: "",
    },
  }

  const navigate = useNavigate();
  const [fields, setFields] = useState(initialState.fields);
  
  const handleSignup = async e => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, fields.email, fields.password)
      .then(({ user }) => {
        // console.log(user);
        updateProfile(user, { displayName: fields.username });
        console.log("Account Created");
        setFields(initialState.fields);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const handleFieldChange = e => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  }

  return (
    <div>
      <h2 className="mx-auto w-fit text-2xl mb-8">Sign-up Page</h2>
      <form onSubmit={handleSignup} className="flex flex-col w-1/4 mx-auto text-zinc-300 space-y-4">
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="username" placeholder="Username" autoComplete="off" required onChange={handleFieldChange} className="text-zinc-800"/>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" placeholder="Email" required onChange={handleFieldChange} className="text-zinc-800"/>
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" placeholder="Password" autoComplete="off" required onChange={handleFieldChange} className="text-zinc-800"/>
        <button type="submit" className="mx-2 hover:bg-teal-400 hover:text-zinc-800 p-4 border-2 border-zinc-300 hover:border-teal-400">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp