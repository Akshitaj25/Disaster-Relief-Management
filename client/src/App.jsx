import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup.jsx'
import Login from './Login.jsx'
import Home from './Home.jsx'
import Donate from './Donate.jsx'
import EmergencyReport from './EmergencyReport.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/report-emergency" element={<EmergencyReport />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
