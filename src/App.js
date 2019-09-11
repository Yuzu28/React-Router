import React, { Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//connect the router and routes
import Home from './Home'
import About from './About'
import Nav from './Nav'
import SuperHero from './SuperHero';


//Always put the router in app.
//You could put it in the index, but that where redux will go

class App extends Component{
  render(){
    // The router goes around everything that it needs to control
    //You only want one rounter in whole app. 
    return (
      <Router>
        {/* <h1>Hello</h1> */}
        <Route path="/"  component={Nav} />
          {/* extract put it on one page */}
        {/* <Route path="/about" exact component={Nav} />
        <Route path="/SuperHero" exact component={Nav} /> */}


        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/SuperHero" render= {() =>{
          return (<SuperHero heroName="Batman lol" />)
        }} />





      </Router>
    )
  }
}



export default App;
