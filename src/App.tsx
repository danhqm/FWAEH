import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login onLogin={() => {}}/>} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Register onRegister={() => {}} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
