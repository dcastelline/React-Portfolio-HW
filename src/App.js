import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './components/navbar/navbar';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route>
            <About />
          </Route>
          <Route>
            <Portfolio />
          </Route>
          <Route>
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
