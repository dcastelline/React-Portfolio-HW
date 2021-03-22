import React from 'react';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer'

export default function App() {
  return (
    <Router>
      <Header />
        <Route exact path='/' component={About} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Portfolio' component={Portfolio} />
        <Route exact path='/Contact' component={Contact} />
        <br />
      <Footer />  
    </Router>
  )
}
