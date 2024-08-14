export function setToken(token){
    window.localStorage.setItem('token', token);
};


export function getToken(){
    let token = window.localStorage.getItem('token');

    return token;
};


export function logout(){
    window.localStorage.removeItem('token');
}

