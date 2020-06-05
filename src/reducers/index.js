import loggedReducer from './isLogged'; 
import questionReducer from './question';
import {combineReducers} from 'redux'; 

const rootReducer = combineReducers => ({
    isLogged: loggedReducer, 
    question: questionReducer
})

export default rootReducer;