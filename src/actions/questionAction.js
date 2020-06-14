

const BACKEND_DOMAIN =  "http://localhost:3000";


let token = () => localStorage.getItem("token")

const headers = () => {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token()
    };
};


export const getQuestions = () => {
    return fetch(`${BACKEND_DOMAIN}/api/v1/questions`, {
        method: "GET",
        headers: headers()
    }).then(res => res.json())
    .then(res => {
        if (res.message) {
            return {
                type: "GET_QUESTIONS_ERROR",
                error: res.message };
            }
        return {
                type: "GET_QUESTIONS",
                payload: res }
        });
}

export const addQuestion = (question_title, question_context, question_coin) => {
  
    let question = {
        question:{
            title: question_title, 
            context: question_context,
            coin: question_coin,
            points: 0
        }
    }
    return fetch(`${BACKEND_DOMAIN}/api/v1/questions`, {
        method: "POST",
        headers: headers(), 
        body: JSON.stringify(question)
    }).then(res => res.json())
    .then(res => {
        if (res.error){
            return {
                type: "ADD_QUESTION_ERROR", 
                error: res.error
            };
        }
        return {
            type: "ADD_QUESTION", 
            payload: res
        }
    })
}


export const updateQuestion = (question_id, question_points) => {
    let question = {
        question:{
            id: question_id,
            points: question_points
        }
    }
    return fetch(`${BACKEND_DOMAIN}/api/v1/questions/${question_id}`, {
        method: "PATCH",
        headers: headers(), 
        body: JSON.stringify(question)
    }).then(res => res.json())
    .then(res => {
        if (res.error){
            return {
                type: "UPDATE_QUESTION_ERROR", 
                error: res.error
            };
        }
        return {
            type: "UPDATE_QUESTION", 
            payload: res
        }
    })
}

export const deleteQuestion = (question_id) => {
    return fetch(`${BACKEND_DOMAIN}/api/v1/questions/${question_id}`,{
        method: "DELETE", 
        headers: headers()
    }).then(res => res.json())
    .then(res => {
        if (res.error){
            return {
                type: "DELETE_QUESTION_ERROR", 
                error: res.error
            };
        }
        return {
            type: "DELETE_QUESTION", 
            payload: question_id
        }
    })
}


