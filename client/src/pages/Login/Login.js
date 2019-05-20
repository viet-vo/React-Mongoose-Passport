import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import NavBar from '../../components/NavBar';

export class Login extends Component {
    state = {
        data: [],
        username: "",
        password: "",
        page: {
            name: "Login"
        }
    };

    updateInput = event => {
        const { id, value } = event.target;
        this.setState({ [id]: value });
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
                <Paper
                >
                    <Grid
                        container
                        alignItems="center"
                        direction="column"
                    > 
                        <Typography variant="h5" component="h2" style={{margin: "1em"}}>
                                Log into your user account
                        </Typography>
                        {/* <Divider variant="middle"/> */}
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

export default Login;
