import React, { useEffect } from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import Header from './Header'
import TinderCard from './TinderCards'

function App() {
  return (
    <div className='app'>
          <Header/>
        <Router>
          <Switch>
            <Route path="/chat">
              <h2>I am chatr page</h2>
            </Route>
            <Route path="/">
              <TinderCard/>
            </Route>
          </Switch>
        {/* <Route exact path="/" render={()=><Layout/>}/> */}
        {/* <Route exact path="/user-page" render={()=><Layout/>}/> */}
        </Router>
</div>
  );
}

export default App;
