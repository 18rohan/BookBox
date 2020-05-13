import { BOOKS } from '../../data/dummy-data';
import {TOGGLE_FAVOURITE, TOGGLE_COMPLETE, APPLY_FILTERS } from '../actions/BooksAction';


const initalState = {
    books: BOOKS,
    filteredBooks: BOOKS,
    FavBooks : [],
    CompleteBooks : [],
    
};


const BooksReducer = (state = initalState, action) =>{
    switch(action.type){
        case TOGGLE_FAVOURITE:
            const existingIndex = state.FavBooks.findIndex(book => book.id === action.bookId);
            if (existingIndex >= 0){
                const updatedFavBooks = [...state.FavBooks];
                updatedFavBooks.splice(existingIndex,1);
                return {...state, FavBooks:updatedFavBooks};  // returning the existing state with all the attributes so we dont overide any existing state, and only override the state we want to.(Here FavBooks)
            }else{
                const book = state.books.find(book => book.id === action.bookId);
                return {...state, FavBooks: state.FavBooks.concat(book)};
            }
        case TOGGLE_COMPLETE:
            const existingIndexComplete = state.CompleteBooks.findIndex(book => book.id === action.bookId);
            if (existingIndexComplete >= 0){
                const updatedCompleteBooks = [...state.CompleteBooks];
                updatedCompleteBooks.splice(existingIndex,1);
                return {...state, CompleteBooks: updatedCompleteBooks}
            }else{
                const bookCompleted = state.books.find(book => book.id === action.bookId);
                return {...state, CompleteBooks:state.CompleteBooks.concat(bookCompleted)}
            }
        case APPLY_FILTERS:
            const appliedFilters = action.filters;
            const UpdatedfilteredBooks = state.books.filter(book=> {
                if (appliedFilters.Fiction && books.Fiction){
                    return false;
                }
                if (appliedFilters.NonFiction && !books.NonFiction){
                    return false;
                }
                if (appliedFilters.Crime && !books.Crime){
                    return false;
                }
                if (appliedFilters.isHorror && !books.isHorror){
                    return false;
                }
                if (appliedFilters.isHumour && !books.isHumour){
                    return false;
                }
                if (appliedFilters.isClassic && !books.isClassic){
                    return false;
                }
                if (appliedFilters.isMythology && !books.isMythology){
                    return false;
                }
                if (appliedFilters.isScienceFiction && !books.isScienceFiction){
                    return false;
                }
                if (appliedFilters.isBiography && !books.isBiography){
                    return false;
                }
                if (appliedFilters.isSelfHelp && !books.isSelfHelp){
                    return false;
                } 
                return true;
            });
                return {...state, filteredBooks:UpdatedfilteredBooks};
        default:
            return state    
        
    }
    return state;
};

export default BooksReducer;