import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { changeActiveBook } from '../actions';


function Book({ bookIndex }) {
    const bookData = useSelector(state => state.books);
    const title = bookData[bookIndex].title;
    const cover = bookData[bookIndex].cover;
    const coverPath = "images/" + cover;
    let history = useHistory();
    const dispatch = useDispatch();

    function changeToSingleBookView() {
        history.push("/book");
    }

    const showThisBook = () => {
        console.log("showing THIS book: ", bookIndex);
        dispatch(changeActiveBook(bookIndex));
        changeToSingleBookView();
    }

    return (
        <div className="book-card" onClick={showThisBook}>
            <h2 className="listview-booktitle">{title}</h2>
            <div className="card-content">
                <div className="card-content__img-container">
                    <img src={coverPath} className="img book-card__img"/>
                </div>
                <div className="card-content__info-container">
                    <div className="card-content__card-info"><b>Author:</b> {bookData[bookIndex].author}</div>
                    <div className="card-content__card-info"><b>ISBN:</b> {bookData[bookIndex].isbn}</div>
                </div>
            </div>         
        </div>
    )
}

export default Book
