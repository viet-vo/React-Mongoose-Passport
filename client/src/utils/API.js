import axios from 'axios';

export default {
    postUserData: (newUserData) => {
        return axios.post("/user/newUser", newUserData);
    },
    postUserLogin: (loginInput) => {
        return axios.post("/user/checkLogin", loginInput);
    },
    getUser: () => {
        return axios.get("/user/");
    },
    postLogout: (logoutUser) => {
        return axios.post("/logout", logoutUser); 
    },
}