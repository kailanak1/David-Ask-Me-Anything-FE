const ANSWER_INITIAL_STATE = []

const answerReducer = (state = ANSWER_INITIAL_STATE, action) => {
    switch(action.type){
        // case 'ANSWER_QUESTION':
        //    console.log(state)
        //     return [...state, action.payload]
        case 'DELETE_ANSWER': 
            return state.filter((answer) => answer.id !== answer.id)
        default:
            return state
    }
}

export default answerReducer;