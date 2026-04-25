import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer'; 
import Login from './pages/login'
import Register from './pages/register';
import Landing from './pages/landing';
import Contact from './pages/contact';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Landing />} />        
        <Route path="/login" element={<Login onLogin={() => {}}/>} />
        <Route path="/register" element={<Register onRegister={() => {}} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App