import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import System from './components/System'


function App() {


  return (
    <div className="bg-gradient-to-r from-white to-cyan-100 overflow-x-hidden w-full" >
    <Navbar />
    <Hero />
    <About />
    <System />
    <Contact />
    <Footer />
      
    </div>
  )
}

export default App
