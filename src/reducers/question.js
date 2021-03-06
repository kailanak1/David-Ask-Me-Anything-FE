const QUESTION_INITIAL_STATE = []

const questionReducer = (state = QUESTION_INITIAL_STATE, action) => {
    switch(action.type){
        case 'GET_QUESTIONS': 
            return action.payload.map(item => item)
        case 'ANSWER_QUESTION':
            return state.map(q => q.id === action.payload.question_id
                ? {...q, answers: [...q.answers, action.payload] } : q) 
        case 'ADD_QUESTION':
            return [...state, action.payload]
        case 'DELETE_QUESTION': 
            let newState = state.filter(question => question.id !== action.payload)
            return newState
        case 'UPDATE_QUESTION': 
           return state.map(q => q.id === action.payload.id
            ? {...q, points: action.payload.points } : q)
        case 'GET_QUESTIONS_ERROR': 
            return action.error
        case 'ANSWER_QUESTION_ERROR': 
            return action.error
        case 'ADD_QUESTION_ERROR': 
            return action.error
        case 'DELETE_QUESTION_ERROR': 
            return action.error
        case 'UPDATE_QUESTION_ERROR': 
            return action.error
        default:
            return state
    }
}

export default questionReducer;