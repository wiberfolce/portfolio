import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Solutions from './components/Solutions.jsx'
import Work from './components/Work.jsx'
import Tools from './components/Tools.jsx'
import Pricing from './components/Pricing.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Nav />
      <main>
        <Hero />
        <Solutions />
        <Work />
        <Tools />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
