import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from '../src/components/home'; 
import About from '../src/components/about';
import Contact from '../src/components/contact';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch> 
    </Router>
    </div>
  );
}

export default App;
