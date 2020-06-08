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
