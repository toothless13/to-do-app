import { Routes, Route } from "react-router-dom"

import HomePage from "./components/HomePage"
import Login from "./components/Login"
import NavBar from "./components/NavBar"
import SignUp from "./components/SignUp"

const App = () => {

  return (
    <div className="bg-zinc-800 text-zinc-300 min-h-screen">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
