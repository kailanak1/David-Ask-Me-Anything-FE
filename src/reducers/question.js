
const questionReducer = (state, action) => {
    switch(action.type){
        case 'ADD_QUESTION': 
            return "something" 
        
        default:
            return state
    }
}

export default questionReducer;