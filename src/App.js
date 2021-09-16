import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Nav from '../src/components/Nav';
import DisplayProduct from './components/DisplayProduct';
import About from '../src/components/About';
import Login from '../src/components/Login';
import Dashboard from '../src/components/Dashboard';


function App() {
  return (
    <Router className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={DisplayProduct} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
