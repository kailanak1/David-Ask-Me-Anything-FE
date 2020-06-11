import userReducer from './user'; 
import  questionReducer  from './question';
import answerReducer from './answer';
import {combineReducers} from 'redux'; 


export default combineReducers({
    userContext: userReducer,
    questions: questionReducer, 
    answers: answerReducer
});