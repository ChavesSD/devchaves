import { useMemo } from 'react'
import AmbientBackground from './components/AmbientBackground'
import FullPage from './components/FullPage'
import Hero from './sections/Hero'
import SobreDiferenciais from './sections/SobreDiferenciais'
import TechShowcase from './sections/TechShowcase'
import ExperienciaContato from './sections/ExperienciaContato'
import Contato from './sections/Contato'
import { navSections } from './data/nav'

function App() {
  const sections = useMemo(
    () => [
      { ...navSections[0], content: <Hero /> },
      { ...navSections[1], content: <SobreDiferenciais /> },
      { ...navSections[2], content: <TechShowcase /> },
      { ...navSections[3], content: <ExperienciaContato /> },
      { ...navSections[4], content: <Contato /> },
    ],
    []
  )

  return (
    <>
      <AmbientBackground />
      <main id="main-content" role="main" className="relative z-10">
        <FullPage sections={sections} />
      </main>
    </>
  )
}

export default App
