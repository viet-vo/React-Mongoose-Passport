import axios from 'axios';

export default {
    getUser: () => {
        return axios.get("/user/");
    },
    postUserData: (newUserData) => {
        return axios.post("/user/newUser", newUserData);
    },
    postUserLogin: (loginInput) => {
        return axios.post("/user/checkLogin", loginInput);
    },
    postLogout: (logoutUser) => {
        return axios.post("/user/logout", logoutUser); 
    },
}