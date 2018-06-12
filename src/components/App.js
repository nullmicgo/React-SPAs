import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import Header from './Header';


import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';



/* 
//We can use this way to pass props into the Route
<Route  path="/about" render={ () => <About/>} />  
*/



const App = () => (
  <BrowserRouter>
  <div className="container">
      <div className="counter">
        <Header />
        <Route exact path="/" component={Home} />
        <Route  path="/about" component={About} />


        
        <Route  path="/teachers" component={Teachers} />
        <Route  path="/courses" component={Courses} />        
      </div>
  </div>
  </BrowserRouter>
);

export default App;