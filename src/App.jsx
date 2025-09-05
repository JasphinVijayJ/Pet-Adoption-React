import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './pages/navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Pets from './pages/Pets'
import Services from './pages/Services'
import Contact from './pages/Contact'
import ScrollArrow from './components/common/ScrollArrow'
import Footer from './pages/footer/Footer'
import ScrollToTop from './components/common/ScrollToTop'

function App() {

  return (
    <>
      <Navbar />
      <ScrollArrow />
      <ScrollToTop />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/pets' element={<Pets />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
