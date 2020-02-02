import React from 'react';
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import Update from './Update/Update';
import Edit from './Edit/Edit';
import Not_found from './Not_found/Not_found';

import { BrowserRouter,Route,Switch } from 'react-router-dom';


const Routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact={true}/>
      <Route path="/dashboard/:id" component={Dashboard} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/update" component={Update} />
      <Route path="/edit" component={Edit} />
      <Route component={Not_found} />
    </Switch>
  </BrowserRouter>
)

export default Routes;
