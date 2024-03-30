import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Signup from "./components/auth/Signup";
import Dashboard from "./routes/Dashboard";
import Leaderboard from "./routes/Leaderboard";


function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="" element={<Home />} />
          <Route path="signup" element={< Signup/>} />
          <Route path="dashboard" element={< Dashboard/>} />
          <Route path="leaderboard" element={< Leaderboard/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
