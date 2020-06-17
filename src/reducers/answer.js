const ANSWER_INITIAL_STATE = []

const answerReducer = (state = ANSWER_INITIAL_STATE, action) => {
    switch(action.type){
        case 'DELETE_ANSWER': 
            return state.filter((answer) => answer.id !== answer.id)
        case 'POST_ANSWER_ERROR':
            return action.error
        default:
            return state
    }
}

export default answerReducer;