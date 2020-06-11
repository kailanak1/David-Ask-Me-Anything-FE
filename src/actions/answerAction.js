const BACKEND_DOMAIN =  "http://localhost:3000";

let token = () => localStorage.getItem("token")

const headers = () => {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token()
    };
};

export const answerQuestion = (answer_content, question_id) => {
    let answer = {
        answer:{
            content: answer_content,
            question_id: question_id
        }
    }
    return fetch(`${BACKEND_DOMAIN}/api/v1/answers`, {
        method: "POST",
        headers: headers(), 
        body: JSON.stringify(answer)
    }).then(res => res.json())
    .then(res => {
        if (res.error){
            return {
                type: "POST_ANSWER_ERROR", 
                error: res.error
            };
        }
        return {
            type: "ANSWER_QUESTION", 
            payload: res
        }
    })
}