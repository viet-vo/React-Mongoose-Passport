import React, { Component } from 'react';

export class Profile extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div>
                test
            </div>
        )
    };
};

export default Profile;
