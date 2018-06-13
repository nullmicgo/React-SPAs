import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Header from './Header';


import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';


/* 
//We can use this way to pass props into the Route
<Route  path="/about" render={ () => <About/>} />  
*/



const App = () => (
  <BrowserRouter>
  <div className="container">
      <div className="counter">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/about" render={ () => <About title='About' />} />        
          <Route  path="/teachers" component={Teachers} />
          <Route  path="/courses" component={Courses} />      
          <Route   component={NotFound} />        
        </Switch>
      </div>
  </div>
  </BrowserRouter>
);

export default App;