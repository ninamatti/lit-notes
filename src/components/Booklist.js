import React from 'react'
import Book from './BookListview'

function Booklist() {
    return (
        <div className="booklist-container">
            <h1>List of Books</h1>
            <div className="book-list-filtered">
                
                <Book />
            </div>
        </div>
    )
}

export default Booklist
