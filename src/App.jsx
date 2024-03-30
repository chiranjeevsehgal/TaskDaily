import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Signup from "./components/auth/Signup";
import Dashboard from "./routes/Dashboard";

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="" element={<Home />} />
          <Route path="signup" element={< Signup/>} />
          <Route path="dashboard" element={< Dashboard/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
