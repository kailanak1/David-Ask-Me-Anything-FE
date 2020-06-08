import userReducer from './user'; 
import  questionReducer  from './question';
import {combineReducers} from 'redux'; 


export default combineReducers({
    userContext: userReducer,
    questions: questionReducer
});