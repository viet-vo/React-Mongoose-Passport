import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
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
        this.setState({ [id]: value })
        console.log(this.state)
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
                    style={{
                        width: '50%',        
                        }}
                >
                    <Typography variant="h5" component="h2" style={{margin: "1em"}}>
                            Log into your user account
                    </Typography>
                    <Divider />
                    <TextField 
                        id="username"
                        value={this.state.username}
                        onChange={this.updateInput.bind(this)}
                    />
                    <Divider variant="middle" />
                    <TextField 
                        id="password"
                        value={this.state.password}
                        
                        onChange={this.updateInput.bind(this)}
                    />
                    <Divider />
                    <Button>Submit</Button>
                </Paper>
            </Grid>
                    
        </div>
        );
    };
};

export default Login;
