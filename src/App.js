import React, {Component} from 'react';
import './App.css';
import MainPage from './container/MainPage/MainPage';
import {Route, Switch, Redirect} from 'react-router-dom';
import View from './components/View/View';
import Error from './components/Error/error';

class App extends Component { 
  render () {
    return (
    
      <div className ="App">
        <h1> My React Assessment</h1>
        <br/>
        <br></br>
        <Switch>
        <Route path="/view/:id" exact component={View} />
        <Route path="/error" exact component={Error} />
        <Route path="/" exact component={MainPage} />
        <Redirect to="/error"/>
      </Switch> 
        </div>
     
  );
  
}
}
export default App;
