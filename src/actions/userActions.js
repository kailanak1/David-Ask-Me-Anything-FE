const BACKEND_DOMAIN = ;

const loginSignup = (apiUrl, username, password, is_admin) => {
    const user = {
        user: {
            username,
            password, 
            is_admin
        }
    }
    return fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(user)
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            return {
                type: "LOGIN_ERROR",
                error: res.error
            };
        }
        return {
            type: "LOGIN",
            payload: res
        }
    });
}

export const login = (username, password) => {
    return loginSignup(`${BACKEND_DOMAIN}/api/v1/login`, username, password);
}

export const signup = (username, password, is_admin=false) => {

    const user = {
        user: {
            username,
            password, 
            is_admin
        }
    }
    return fetch(`${BACKEND_DOMAIN}/api/v1/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(user)
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            return {
                type: "SIGNUP_ERROR",
                error: res.error
            };
        }
        return {
            type: "SIGNUP",
            payload: res
        }
    }); 

}

export const logout = () => {
    return {
        type: "LOGOUT"
    }
}