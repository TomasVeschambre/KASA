import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import styled from 'styled-components'
import Logement from './pages/Logement'
import Header from './components/Header'
import './index.css'
import About from './pages/About'
import Error from './pages/Error'

const AppContainer = styled.div.attrs({ className: 'app-container' })`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (min-width: 376px) and (max-width: 1439px) {
    padding: 0 20px;
    box-sizing: border-box;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Logement/:id" element={<Logement />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  </React.StrictMode>
)
