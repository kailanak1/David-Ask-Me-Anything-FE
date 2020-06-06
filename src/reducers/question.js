const QUESTION_INITIAL_STATE = []

const questionReducer = (state = QUESTION_INITIAL_STATE, action) => {
    switch(action.type){
        case 'GET_QUESTIONS': 
            console.log(action, state)
         
        
        default:
            return state
    }
}

export default questionReducer;