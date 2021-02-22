import { useSelector } from 'react-redux';
import Quicknote from './Quicknote';
import BookListview from './BookListview';

function BookSingleview() {
    const bookData = useSelector(state => state.books);
    const activeBook = useSelector(state => state.activeBookId);
    const notes = bookData[activeBook].notes;
    const title = bookData[activeBook].title;
    const cover = bookData[activeBook].cover;
    const coverPath = "images/" + cover;

    return (
        <div className="singleview-container">
            <div className="top-wrapper">
                <div className="book-card">
                    <h2 className="singleview-booktitle">{title}</h2>
                    <div className="card-content">
                        <div className="card-content__img-container">
                            <img src={coverPath} className="img book-card__img"/>
                        </div>
                        <div className="card-content__info-container">
                            <div className="card-content__card-info"><b>Author:</b> {bookData[activeBook].author}</div>
                            <div className="card-content__card-info"><b>ISBN:</b> {bookData[activeBook].isbn}</div>
                        </div>
                    </div>         
                </div>

                <div className="quick-note-container">
                    <Quicknote />
                </div>
            </div>
            <div className="note-slider">
                {notes.map((note) => {
                            return (
                                <div className="slider-note" key={note.id}>
                                    <h4 className="slider-note_title">{note.title}</h4>
                                    <p className="slider-note_content">{note.content}</p>
                                </div>   
                            )     
                })}
            </div>
        </div>
    )
}

export default BookSingleview


