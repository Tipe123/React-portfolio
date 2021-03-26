import React from 'react'
import './App.css';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SighnUp from './components/pages/SighnUp';

function App() {
  return (
    <div>
    <Router>
        <Navbar />
        <Switch>
          <Route  path="/" exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path="/sign-up" component={SighnUp} />
        </Switch>
    </Router>

    
    </div>
  );
}

export default App;
