import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error404 from './Error404';


function App(){
  return (
    <div>
      <style jsx global>{`
        body {
          text-align: center;
        }
        .clickable {
          color: blue;
        }
        .clickable:hover {
          cursor: pointer;
        }
      `}</style>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;