import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home/Home.jsx'
// AOS imports
import AOS from 'aos'
import 'aos/dist/aos.css'

// initialize AOS
AOS.init({
  duration: 1000, // animation duration (ms)
  once: true,     // whether animation should happen only once
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
