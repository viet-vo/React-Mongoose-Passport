import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function GridCard(props) {
  const { classes, header, body, footer, id } = props;
  return (
    <Card className={classes.card} key={id}> 
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {header}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography className={classes.pos} color="textSecondary" gutterBottom>
          {body}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {footer}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography className={classes.pos} color="textSecondary" gutterBottom>
          {id}
        </Typography>
      </CardContent>
    </Card>
  );
};

GridCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridCard);
