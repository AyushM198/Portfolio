import { StrictMode, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import Layout from './layout.jsx'
import Hero from './components/Hero.jsx'
import Expertise from './components/Expertise.jsx'
import Door from './components/Door.jsx'
import AboutPage from './components/AboutMe.jsx'
import Projects from './components/Projects.jsx'
import Services from './components/Service.jsx'
import Last from './components/Last.jsx'
import Footer from './components/Footer.jsx'
// ✅ Define an App component to handle refs
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <>
              {/* <Navbar /> */}
              <Services />
                            <Expertise />

              <Projects />
              {/* <Last /> */}
              <AboutPage />
              <Footer />
              {/* <Door /> */}
            </>
          }
        />
        
        <Route path="/hero" element={<Hero />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
