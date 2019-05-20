import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import Divider from '@material-ui/core/Divider';
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
    };

    updateInput = event => {
        const { id, value } = event.target;
        this.setState({ [id]: value });
    };

    handleFormSubmit = () => {
        console.log("test")
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
                                value={this.state.password}
                                onChange={this.updateInput.bind(this)}
                                style={{margin: "0.5em"}}
                            />
                            <Button
                                style={{margin: "1em"}}
                                disabled={!(this.state.username && this.state.password)}
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
