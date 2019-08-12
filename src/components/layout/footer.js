import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    marginBottom: 0,
    backgroundColor: 'white',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="body1">Community Organization Portal</Typography>
          <Typography variant="body2" color="textSecondary">Changing lives. One step at a time. Together</Typography>
        </Container>
      </footer>
    </div>
  );
}