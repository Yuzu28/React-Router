import React from 'react';
import {Link} from 'react-router-dom';

function Nav(props){
    //in react, we dont use <a> 
    //we use link components. Link is the new <a>
    return (
        <div className="nav">
            {/* <a href="/"> Home Page</a>
            <a href="/about"> About Page</a> */}
            <Link to="/">Home Page</Link>
            <Link to="/about">About Page</Link>
            <Link to="/superhero">Superhero Page</Link>




        </div>
        
    )


}

export default Nav;