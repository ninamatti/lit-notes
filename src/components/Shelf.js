import React from 'react';
import shelf1 from '../img/shelf1.png';

function Shelf() {
    return (
        <div className="shelf-container">
            <h1 className="shelf-container-title">SHELF 1: Books I'm currently reading</h1> 
            <img src={shelf1} alt="shelf-img-1"></img>
            
        </div>
    )
}

export default Shelf
