import { BOOKS } from '../../data/dummy-data';
import {TOGGLE_FAVOURITE} from '../actions/BooksAction';


const initalState = {
    books: BOOKS,
    filteredBooks: BOOKS,
    FavBooks : [],
    
};


const BooksReducer = (state = initalState, action) =>{
    switch(action.type){
        case TOGGLE_FAVOURITE:
            const existingIndex = state.FavBooks.findIndex(book => book.id === action.bookId);
            if (existingIndex >= 0){
                const updatedFavBooks = [...state.FavBooks];
                updatedFavBooks.splice(existingIndex,1);
                return {...state, FavBooks:updatedFavBooks};
            }else{
                const book = state.books.find(book => book.id === action.bookId);
                return {...state, FavBooks: state.FavBooks.concat(book)};
            }
        
        default:
            return state    
        
    }
    return state;
};

export default BooksReducer;