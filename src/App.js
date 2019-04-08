import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

        </div>


         <Route exact path="/" component  ={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contacts" component={Contacts} />

        <Route exact path="/projects" component={Projects} />

      </Router>
      
    );
  }
}

export default App;
