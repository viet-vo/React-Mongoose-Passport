import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import NavBar from '../../components/NavBar';

import submitDataAPI from '../../utils/API';

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
    };

    updateInput = event => {
        const { id, value } = event.target;
        this.setState({ [id]: value });
    };

    clearUserData = () => {
        this.setState({ username: "", password: "", lastname: "", firstname: "", })
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.password && this.state.firstname && this.state.lastname) {
            submitDataAPI.postUserData({
                username: this.state.username,
                password: this.state.password,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
            })
            .then(res => this.clearUserData())
            .catch(err => console.log(err));
        };
    };

    render() {
        const { page } = this.state;
        return (
            <div>
                <NavBar {...page}/>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '75vh' }}
                >
                    <Paper>
                        <Grid
                            container
                            alignItems="center"
                            direction="column"
                        >
                            <Typography variant="h5" component="h2" style={{margin: "1em"}}>
                                Log into your user account
                            </Typography>
                            <TextField 
                                id="firstname"
                                label="Enter Your First Name"
                                value={this.state.firstname}
                                onChange={this.updateInput.bind(this)}
                                style={{margin: "0.5em"}}
                            />
                            <TextField 
                                id="lastname"
                                label="Enter Your Last Name"
                                value={this.state.lastname}
                                onChange={this.updateInput.bind(this)}
                                style={{margin: "0.5em"}}
                            />
                            <TextField 
                                id="username"
                                label="Enter Username"
                                value={this.state.username}
                                onChange={this.updateInput.bind(this)}
                                style={{margin: "0.5em"}}
                            />
                            <TextField 
                                id="password"
                                label="Enter Password"
                                type="password"
                                value={this.state.password}
                                onChange={this.updateInput.bind(this)}
                                style={{margin: "0.5em"}}
                            />
                            <Button
                                style={{margin: "1em"}}
                                disabled={!(this.state.username && this.state.password)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Paper>
                </Grid>
            </div>
        );
    };
};

export default UserCreate;
