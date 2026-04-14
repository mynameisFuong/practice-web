import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import Devices from "./pages/Devices"
import Rooms from "./pages/Rooms"
import Reports from './pages/Reports'
import Statistics from './pages/Statistics'
  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>

  )
}

export default App
