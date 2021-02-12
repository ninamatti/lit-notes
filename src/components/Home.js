import React from 'react'

function Home() {
    return (
        <div className="home-container">
            <h1 className="home-container-title">MY BOOKSHELVES</h1> 
            <button className="book-shelf-btn current">Currently reading</button>
            <button className="book-shelf-btn future">Want to read</button>
            <button className="book-shelf-btn past">Read</button>
        </div>
    )
}

export default Home
