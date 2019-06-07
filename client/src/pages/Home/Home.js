import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import NavBar from '../../components/NavBar';
import GridCard from '../../components/GridCard';
import Button from '@material-ui/core/Button';
import logoutAPI from '../../utils/API';

export class Home extends Component {
  state = {
    data: [],
    cardProp: [
      {
        header: "Allen",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptate natus et dolorem molestias praesentium dicta explicabo illum voluptatibus, totam iste laudantium numquam accusantium quaerat debitis voluptatem quis magni odio.",
        footer: "This is the information footer",
        id: 0,
      },
      {
        header: "Brian",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cumque itaque pariatur corrupti perspiciatis enim, impedit ducimus autem expedita debitis, amet nemo doloribus sequi eaque aliquid? Necessitatibus explicabo voluptates hic!",
        footer: "This is the information footer",
        id: 1,
      },
      {
        header: "Pat",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rem at quia cum alias distinctio officiis debitis, veritatis reiciendis nulla tempore molestiae? Architecto dolorum, tempore provident ut possimus at dolores.",
        footer: "This is the information footer",
        id: 2,
      },
    ],
    pageName: {
      name: "Home"
    }
  };
  logout(event) {
    event.preventDefault();
    console.log('logging out');
    logoutAPI.postLogout()
      .then(res => {
        console.log(res.data);
        if (res.status(200)) {
          this.props.updateUser({
            loggedIn: false,
            username: null,
          });
        };
      })
      .catch(err => console.log(err));
  };
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    const { cardProp, pageName } = this.state;
    return (
      <div>
        <NavBar {...this.props} {...pageName} />
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="center"
        >
          <Grid
            item
            xs={3}
          >
            <Grid 
              container
              spacing={8}
              direction="column"
              alignItems="center"
              justify="center"
              >
                {cardProp.map(index => {
                  return(
                    <Grid
                      item
                      key={index.id} 
                    >
                      <GridCard {...index} />
                    </Grid>
                    )
                })}
              </Grid>
          </Grid>
          <Grid
            item
            xs={6}
          >
            <Grid 
              container
              spacing={0}
              direction="row"
              alignItems="center"
              justify="center"
              >
              <Paper>
                <Grid
                  container
                  alignItems="center"
                  direction="column"
                > 
                  <Typography variant="h5" component="h2" style={{margin: "1em"}}>
                    Welcome to your Home Page
                  </Typography>
                  {this.props.loggedIn ? (
                    <Button to="#" onClick={this.logout}>Logout</Button>
                  ) : (
                    <Button to="/Login">Login</Button>
                  )}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid
            item
            xs={3}
          >
            <Grid 
              container
              spacing={8}
              direction="column"
              alignItems="center"
              justify="center"
              >
                {cardProp.map(index => {
                  // console.log(index)
                  return(
                    <Grid
                      item
                      key={index.id}
                    >
                    <GridCard {...index} />
                    </Grid>
                    )
                })}
              </Grid>
          </Grid>
        </Grid>
      </div>
    )
  };
};

export default Home;
