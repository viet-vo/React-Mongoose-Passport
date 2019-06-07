import React, { Component } from 'react';

import AppBar from '../../components/NavBar';

export class Profile extends Component {
    state = {
        page: {
            name: "Profile"
        },
    }
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        const { page } = this.state;
        return (
            <div>
                <AppBar {...this.props} {...page} ></AppBar>
            </div>
        )
    };
};

export default Profile;
