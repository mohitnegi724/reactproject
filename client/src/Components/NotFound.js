import React from 'react';
import '../Styles/NotFound.css';
import {Link} from 'react-router-dom';

const NotFound=()=>{
    return (
        <div className="notFound">
            <div className="innerText">
                <div>
                    <iframe title="notFound" src="https://giphy.com/embed/l0ExeAkpaMaEAuX5e" frameBorder="0" className="giphy-embed"></iframe>
                </div>
                <h3><Link to="/">Come Home</Link></h3>
            </div>
        </div>
    )
}

export default NotFound;