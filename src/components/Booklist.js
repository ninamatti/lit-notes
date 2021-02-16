import Book from './BookListview'
import { useSelector } from 'react-redux';


function Booklist({ bookIds }) {
    const bookData = useSelector(state => state.books);
    const listLength = bookIds.length;


    return (
        <div className="booklist-container">
            <h1>List of Books</h1>
            <div className="book-list-filtered">
            {bookData.map((book, index) => {
                for(let i = 0; i < listLength; i++) {
                    if(book.id === bookIds[i]) {
                        return (
                            <Book bookIndex={index}/>
                        ) 
                    }
                }  
            })}
            </div>
        </div>
    )
}

export default Booklist
