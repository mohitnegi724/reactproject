import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

const Header=()=>{
    return (
        <div>
            <header>
            <Link to="/"><h4>Go Guide!</h4></Link>
            <Link to="/addplace"><button className="addPlaceButton">Add New Place!</button></Link>
          </header>
        </div>
    )
}

export default Header;