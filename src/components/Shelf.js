import shelf1 from '../img/2shelves_one.png';
import Booklist from './Booklist';
import { useSelector } from 'react-redux';

function Shelf( { shelfName} ) {
    const actShelfIndex = shelfName;
    const allShelves = useSelector(state => state.shelfData);
    const activeShelfContent = allShelves[actShelfIndex];

    return (
        <div className="shelf-container">
            <h1 className="shelf-container-title">Shelf:   {activeShelfContent.shelfName}</h1> 
            <img src={shelf1} alt="shelf-img-1" className="shelf-img"></img>
            <Booklist bookIds={activeShelfContent.bookIds}/>
        </div>
    )
}

export default Shelf
