const QUESTION_INITIAL_STATE = []

const questionReducer = (state = QUESTION_INITIAL_STATE, action) => {
    switch(action.type){
        case 'GET_QUESTIONS': 
            console.log(action, state)
            return {...state, questions: action.payload}
        default:
            return state
    }
}

export default questionReducer;