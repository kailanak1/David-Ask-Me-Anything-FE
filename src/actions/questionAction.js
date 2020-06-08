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

export const addQuestion = (question_title, question_context) => {
    let question = {
        question:{
            title: question_title, 
            context: question_context
        }
    }
    console.log(question)
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

