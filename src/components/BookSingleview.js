import { useSelector } from 'react-redux';


function BookSingleview(bookIndex = 0) {
    const bookData = useSelector( state => state.books);

    return (
        <div>
            {bookData.map((book) => {
                return (
                    <h2>Title: {book.title}</h2>
                )   
            })}
            
        </div>
    )
}

export default BookSingleview


