import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export class Profile extends Component {
    state = {
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        data: [],
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <Grid
                    container
                    direction="row"
                    justify="center"
                >
                    <Grid
                        item
                        xs={2}
                    >
                        <Grid 
                            container
                            direction="column"
                        >
                            <Grid
                                item
                            >
                                <img src="https://via.placeholder.com/300" alt="profile pic"/>
                            </Grid>
                            <Grid
                                item
                            >
                                <Paper style={{padding: 3}}>
                                    <Typography variant="h5" component="h3">
                                        This is a Bio:
                                    </Typography>
                                    <Typography component="p">
                                        {this.state.bio}
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={9}
                    >   
                        
                    </Grid> 
                </Grid>
            </div>
        )
    };
};

export default Profile;
