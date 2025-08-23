import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import Layout from './layout.jsx'

import Hero from './components/Hero.jsx'
import Expertise from './components/Expertise.jsx'
import GridLayout from './components/Skills.jsx'
import Door from './components/Door.jsx'
import AboutPage from './components/AboutMe.jsx'
import Projects from './components/Projects.jsx'
import TreasureMap from './components/try.jsx'
import Services from './components/Service.jsx'
import Last from './components/Last.jsx'
import Footer from './components/Footer.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Layout />}>

      <Route index element={
          <>
            <Hero />
            <Services />
            <Projects />
            {/* <Last /> */}
            <AboutPage />
            {/* <TreasureMap /> */}
            {/* <Expertise /> */}
            {/* <GridLayout /> */}
            <Footer />
            {/* <Door /> */}
            
          </>
          }
          />
      <Route path="/hero" element={<Hero />} />
      <Route path="/expertise" element={<Expertise />} />

    </Route>
    </>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
          <RouterProvider router={router} />
  </StrictMode>,
)
