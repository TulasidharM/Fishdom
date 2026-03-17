import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SetupCards from './components/SetupCards'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean-50 via-cyan-50 to-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <SetupCards />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
