import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register';
import Landing from './pages/landing';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login onLogin={() => {}}/>} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Register onRegister={() => {}} />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
