import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Chatbot from '../src/assets/components/Chatbot.jsx'
import Navbar from './assets/components/Navbar.jsx'
import Hero from './assets/components/Hero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
