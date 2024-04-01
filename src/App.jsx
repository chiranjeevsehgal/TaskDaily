import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Signup from "./components/auth/Signup";
import Dashboard from "./routes/Dashboard";
import Leaderboard from "./routes/Leaderboard";
import Aptitude from "./routes/Aptitude";
import DSA from "./routes/DSA";
import SignIn from "./components/auth/SignIn";


function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="" element={<Home />} />
          <Route path="signup" element={< Signup/>} />
          <Route path="signin" element={< SignIn/>} />
          <Route path="dashboard" element={< Dashboard/>} />
          <Route path="leaderboard" element={< Leaderboard/>} />
          <Route path="dsa" element={< DSA/>} />
          <Route path="aptitude" element={< Aptitude/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
