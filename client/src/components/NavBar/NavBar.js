import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function NavBar(props) {
  console.log(props)
  const { classes, loggedIn, } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" href="/">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Mongo-Express-React-Node w/ a Material-UI front-end
          </Typography>
          {loggedIn ? (
            <div>
              <Button href="" onClick={props.logout} color="inherit">Logout</Button>
              <Button href="/Profile" color="inherit">Profile</Button>
            </div>
          ) : (
            <div>
              <Button href="/Login" color="inherit">Login</Button> 
              <Button href="/UserCreate" color="inherit">Sign Up</Button>
            </div>
           )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
