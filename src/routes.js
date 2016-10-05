import React from 'react';
import { IndexRoute, Route }  from 'react-router';
import App from 'components/App';
import LoginPage from 'components/LoginPage';


export default (
  <Route component={App} path='/'>
    <IndexRoute component={LoginPage}/>
    <Route component={LoginPage} path='login'/>
  </Route>
);
