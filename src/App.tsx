import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register';
import Landing from './pages/landing';
import Contact from './pages/contact';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />        
        <Route path="/login" element={<Login onLogin={() => {}}/>} />
        <Route path="/register" element={<Register onRegister={() => {}} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App