import React from 'react';
import '../Styles/NotFound.css';
import {Link} from 'react-router-dom';

export default function NotFound() {
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


// https://media.giphy.com/media/xT0BKFyZt9MMx9xkpW/giphy.gif