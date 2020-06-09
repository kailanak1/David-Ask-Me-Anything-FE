const QUESTION_INITIAL_STATE = []

const questionReducer = (state = QUESTION_INITIAL_STATE, action) => {
    switch(action.type){
        case 'GET_QUESTIONS': 
            console.log(action, state)
            return {...state, questions: action.payload}
        case 'ADD_QUESTION':
            return {...state, question: action.payload}
        case 'DELETE_QUESTION': 
            return state.filter((question) => question.id !== question.id)
        case 'UPDATE_QUESTION': 
            return {...state, question: action.payload}
        default:
            return state
    }
}

export default questionReducer;