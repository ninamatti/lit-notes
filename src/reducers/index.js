import { combineReducers } from 'redux';
import bookData from './bookdata';
import activeShelfReducer from './activeShelf';
import shelfReducer from './shelfdata';
import activeBookReducer from './activeBook';

const allReducers = combineReducers({
    books: bookData,
    shelfData: shelfReducer,
    activeShelfId: activeShelfReducer,
    activeBookId: activeBookReducer
});

export default allReducers;