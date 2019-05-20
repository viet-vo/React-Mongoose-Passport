import React, { Component } from 'react';
import NavBar from '../../components/NavBar';

export class UserCreate extends Component {
    state = {
        data: [],
        username: "",
        password: "",
        lastname: "",
        firstname: "",
        page: {
            name: "User Create"
        }
    }
    render() {
        const { page } = this.state;
        return (
            <div>
                <NavBar {...page}/>
            </div>
        );
    };
};

export default UserCreate;
