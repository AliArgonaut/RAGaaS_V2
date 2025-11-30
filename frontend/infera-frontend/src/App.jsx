import React, { useState } from 'react';
import { Moon, Sun, Database, Zap, Shield, ArrowRight, CheckCircle, Menu, X } from 'lucide-react';
import LandingPage from './pages/LandingPage'
import SignupPage from './pages/SignupPage'
import Features from './pages/Features.jsx'
import Pricing from './pages/Pricing.jsx'
import Docs from './pages/Docs.jsx'
import { Routes, Route } from 'react-router-dom' 
export default function App() {

  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
  <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/signup" element={<SignupPage/>}/>
    <Route path="/features" element={<Features/>}/>
    <Route path="/pricing" element={<Pricing/>}/>
    <Route path="/docs" element={<Docs/>}/>
    </Routes>
     );
}
