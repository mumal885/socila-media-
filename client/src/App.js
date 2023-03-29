import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Redirect,
  Route
} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";



function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}>{user ? <Home /> : <Register />}</Route>

        <Route path="/login" element={<Login/>}>{user ? <Redirect to="/" element={<Home/>}/> : <Login />}</Route>
        <Route path="/register" element={<Register/>}>{user ? <Redirect to="/" element={<Home/>}/> : <Register />}</Route>
        <Route path="/profile/:username" element={<Profile/>}><Profile /></Route>
      </Routes>
    </Router>
  );
}

export default App;
