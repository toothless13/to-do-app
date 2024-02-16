import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import HomePage from "./components/HomePage"
import Login from "./components/Login"
import NavBar from "./components/NavBar"
import SignUp from "./components/SignUp"

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/sign-up" element={<SignUp loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
      </Routes>
    </>
  )
}

export default App
