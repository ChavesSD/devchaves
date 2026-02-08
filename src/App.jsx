import Nav from './components/Nav'
import Hero from './sections/Hero'
import SobreDiferenciais from './sections/SobreDiferenciais'
import TechShowcase from './sections/TechShowcase'
import ExperienciaContato from './sections/ExperienciaContato'
import Testimonial from './sections/Testimonial'
import Footer from './sections/Footer'

function App() {
  return (
    <>
      <Nav />
      <main id="main-content" role="main">
        <Hero />
        <SobreDiferenciais />
        <TechShowcase />
        <ExperienciaContato />
        <Testimonial />
        <Footer />
      </main>
    </>
  )
}

export default App
