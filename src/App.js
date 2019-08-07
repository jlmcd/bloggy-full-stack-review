import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import Blog from './components/Blog/Blog'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/blog' component={Blog} />
      </Switch>
    </div>
  );
}

export default App;
