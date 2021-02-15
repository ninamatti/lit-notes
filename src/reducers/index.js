import { combineReducers } from 'redux';
import bookData from './bookdata';
import activeShelfReducer from './activeShelf';
import shelfReducer from './shelfdata';

const allReducers = combineReducers({
    books: bookData,
    shelfData: shelfReducer,
    activeShelfId: activeShelfReducer
});

export default allReducers;