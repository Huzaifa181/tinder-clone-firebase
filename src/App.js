import React, { useEffect } from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import Header from './Header'
import TinderCard from './TinderCards'
import SwipeButtons from './SwipeButtons'
import Chats from './Chats'
import ChatScreen from './ChatScreen'

function App() {
  return (
    <div className='app'>
        <Router>     
          <Switch>
            <Route path="/chat/:person">
              <Header backButton='/chat'/>
              <ChatScreen/>
            </Route>
            <Route path="/chat">
              <Header backButton='/'/>
              <Chats/>
            </Route>
            <Route path="/">
            <Header/>
              <TinderCard/>
              <SwipeButtons/>
            </Route>
          </Switch>
        {/* <Route exact path="/" render={()=><Layout/>}/> */}
        {/* <Route exact path="/user-page" render={()=><Layout/>}/> */}
        </Router>
</div>
  );
}

export default App;
