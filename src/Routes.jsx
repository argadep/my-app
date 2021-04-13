import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Developers from './Developers';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/developers' component={Developers}/>
    </Switch>
  </main>
)

export default Main
