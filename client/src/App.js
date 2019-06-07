// Dependencies 
// !^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import getCurrentUser from './utils/API';
// !^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// Pages/Components
// !^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
import Home from './pages/Home';
import Login from './pages/Login';
import UserCreate from './pages/UserCreate';
import Profile from './pages/Profile';
// !^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

const theme = createMuiTheme({
  pallete: {
    primary: { main: "#546E7A" },
    secondary: { main: "#FF8A80" }
  },
  typography: {
    useNextVariants: true,
  }, 
  overrides: {
    MuiButton: {
      root: {
        color: 'grey',
        '&:hover': {
          backgroundColor: 'purple'
        }
      }
    }
  },
})

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      string: "test",
      loggedIn: false,
      username: null,
    };

    this.getUser = this.getUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
  };
  
  componentDidMount() {
    this.getUser();
  };

  updateUser (userObject) {
    this.setState(userObject)
  };

  getUser() {
    getCurrentUser.getUser()
    .then(res => {
      console.log('Get user response: ');
      console.log(res.data);
      if (res.data.user) {
        console.log('Get User: There is a user saved in the server session: ')
        this.setState({
          loggedIn: true,
          username: res.data.user.username
        });
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        });
      };
    });
   };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Grid>
          <Router>
            <Switch>
              <Route path="/" exact render={() => <Home {...this.state} updateUser={this.updateUser} />} />
              <Route path="/Login" render={() => <Login updateUser={this.updateUser} />} />
              <Route path="/UserCreate" component={UserCreate} />
              <Route path="/Profile" render={() => <Profile {...this.state} />} />
            </Switch>
          </Router>
        </Grid>
      </MuiThemeProvider>
    )
  };
};

export default App;
