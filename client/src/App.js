// MAIN APP FILE
// Dependencies and associated COMPONENTS
import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
import { grey } from '@material-ui/core/colors';

// import API from './utils/test';
const theme = createMuiTheme({
  palette: grey,
  typography: {
    useNextVariants: true,
  },
})

class App extends Component {
  state = {
    data: []
  };
  
  // componentDidMount() {
  //   API.getTestData()
  //     .then(res => this.setState({data: res.data }))
  //       .catch(err => console.log(err));
  // }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        {/* <AppBar /> */}
        {/* <h2>{this.state.data.test}</h2>      */}
      </MuiThemeProvider>
    )
  };
};

export default App;
