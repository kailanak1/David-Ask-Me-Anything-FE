import userReducer from './user'; 
import  questionReducer  from './question';
import {combineReducers} from 'redux'; 

// const rootReducer = combineReducers => ({
//     userContext: userReducer, 
//     question: questionReducer
// })

// export default rootReducer;

export default combineReducers({
    userContext: userReducer,
    questions: questionReducer
});