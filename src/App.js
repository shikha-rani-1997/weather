import React from 'react';
import './App.css';
import Login from './Login.jsx';
import Second from './Secondpage';
import Logout from './Logout';
import { Switch, Redirect, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/second' component={Second} />
        <Route path='/logout' component={Logout} />
        <Redirect to='/' />
        

</Switch>

    </div>
   
  );
}

export default App;
