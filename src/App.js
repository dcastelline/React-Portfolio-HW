import React from 'react';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';

export default function App() {
  return (
    <Router>
      <Navbar />
        <Route exact path='/' component={About} />
        <Route exact path='/about' component={About} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/contact' component={Contact} />
    </Router>
  )
}
