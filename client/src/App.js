// MAIN APP FILE
// Dependencies and associated COMPONENTS
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import rootReducers from './reducers'
import  { createStore } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

import Home from './pages/Home';
import Login from './pages/Login';
import UserCreate from './pages/UserCreate';

// import API from './utils/test';
const theme = createMuiTheme({
  palette: grey,
  typography: {
    useNextVariants: true,
  },
})

const store = createStore(rootReducers)

class App extends Component {
  state = {
    data: [],
    string: "test"
   };

  handleUpdate (updateProps) {
    this.setState({ string: updateProps});
  }

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Grid>
            <Router>
              <Switch>
                <Route path="/" exact render={() => <Home {...this.state} onUpdate={this.handleUpdate.bind(this)} />} />} />
                <Route path="/Login" component={Login} />
                <Route path="/UserCreate" component={UserCreate} />
              </Switch>
            </Router>
          </Grid>
        </MuiThemeProvider>
      </Provider>
    )
  };
};

export default App;
