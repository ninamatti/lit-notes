import { useDispatch } from 'react-redux';
import { changeActiveShelf } from '../actions';
import { useHistory } from 'react-router-dom';


function Home() {
    const dispatch = useDispatch();
    let history = useHistory();

    function changeToShelfview() {
        history.push("/shelf");
    }

    return (
        <div className="home-container">
            <h1 className="home-container-title">My Bookshelves</h1> 
            <div className="home-container_content-wrapper">
                <div className="home-container_left">
                    <button className="book-shelf-btn current"
                            onClick={() => {
                                dispatch(changeActiveShelf(0));
                                changeToShelfview();
                            }}
                            >Currently reading</button>
                    <button className="book-shelf-btn future"
                            onClick={() => {
                                dispatch(changeActiveShelf(1));
                                changeToShelfview();
                            }}
                            >Want to read</button>
                    <button className="book-shelf-btn past"
                            onClick={() => {
                                dispatch(changeActiveShelf(2));
                                changeToShelfview();
                            }}
                            >Read</button>
                </div>
                <div className="home-container_right">
                    <img src="images/undraw_reading4.png" className="home-img"/>
                </div>

            </div>
            
        </div>
    )
}

export default Home
