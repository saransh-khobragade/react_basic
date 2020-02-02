import React from 'react';
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import Update from './Update/Update';
import Edit from './Edit/Edit';
import Not_found from './Not_found/Not_found';
import Header from './Header/Header';

import { BrowserRouter,Route,Switch } from 'react-router-dom';


const Routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/update" component={Update} />
        <Route path="/edit" component={Edit} />
        <Route component={Not_found} />
      </Switch>
    </div>
    
  </BrowserRouter>
)

export default Routes;
