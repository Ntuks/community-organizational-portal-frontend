import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
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
});

export default function SimpleCard() {
  const classes = useStyles();
 

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h3" component="h3">
        Organisation Bio
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         Full Description
      </Typography>
        <Typography className={classes.pos} color="textSecondary">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </Typography>

        <Typography variant="h5" component="span">
            Area of engagement:
        </Typography>
        <Typography variant="body2" > Children, Social Welfare, Abuse </Typography>

        <div><br></br></div>

        <Typography variant="h5" component="span">
            Contact Details:
        </Typography>
        <Typography variant="body2" component="p"> Email: </Typography>
        <Typography variant="body2" component="p"> Tel: </Typography>
        <Typography variant="body2" component="p"> Website: </Typography>
        
      </CardContent>

    </Card>
  );
}