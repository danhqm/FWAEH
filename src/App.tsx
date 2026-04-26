import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/scrollToTop/scrollToTop';
import ProductDetail from './components/productdetail/productdetail';

import Login from './pages/login'
import Register from './pages/register';
import Landing from './pages/landing';
import Contact from './pages/contact';
import Product from './pages/product';
import Profile from './pages/profile';
import Support from './pages/support';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Header />
      <Routes>
        <Route path="/" element={<Landing />} />        
        <Route path="/login" element={<Login onLogin={() => {}}/>} />
        <Route path="/register" element={<Register onRegister={() => {}} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App