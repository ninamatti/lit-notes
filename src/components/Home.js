import { useDispatch } from 'react-redux';
import { changeActive } from '../actions';

function Home() {
    const dispatch = useDispatch();

    return (
        <div className="home-container">
            <h1 className="home-container-title">MY BOOKSHELVES</h1> 
            <button className="book-shelf-btn current"
                    onClick={() => {
                        dispatch(changeActive(0));
                    }}
                    >Currently reading</button>
            <button className="book-shelf-btn future"
                    onClick={() => {
                        dispatch(changeActive(1));
                    }}
                    >Want to read</button>
            <button className="book-shelf-btn past"
                    onClick={() => {
                        dispatch(changeActive(2));
                    }}
                    >Read</button>
        </div>
    )
}

export default Home
