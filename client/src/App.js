// MAIN APP FILE
// Dependencies and associated COMPONENTS
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
import { grey } from '@material-ui/core/colors';

import Home from './pages/Home';

// import API from './utils/test';
const theme = createMuiTheme({
  palette: grey,
  typography: {
    useNextVariants: true,
  },
})

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
      <MuiThemeProvider theme={theme}>
        <Grid>
          <Router>
            <Switch>
              <Route path="/" render={() => <Home {...this.state} onUpdate={this.handleUpdate.bind(this)} />} />} />
              {/* <Route path="/" exact component={Home} /> */}
              {/* <Route path="/" exact component={Home} /> */}
            </Switch>
          </Router>
        </Grid>
      </MuiThemeProvider>
    )
  };
};

export default App;
