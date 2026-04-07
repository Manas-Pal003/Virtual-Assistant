import { Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

const routes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default routes
