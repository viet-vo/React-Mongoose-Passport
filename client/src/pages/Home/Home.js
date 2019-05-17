import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import NavBar from '../../components/NavBar';
import { Grid } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";

export class Home extends Component {

  componentDidMount() {
    console.log(this.props)
  } 
  render() {
    return (
      <div>
        <NavBar />
        <Grid 
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justify="center"
          >
          <Paper>
            <Typography variant="h5" component="h2" style={{margin: "1em"}}>
              Welcome to your Home Page
            </Typography>
          </Paper>
        </Grid>
      </div>
    )
  };
};

export default Home;
