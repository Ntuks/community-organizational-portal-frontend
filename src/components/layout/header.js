import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },  
    link: {
      margin: theme.spacing(1),
      background: "none",
      "text-decoration": "none",
      color: "white",
    },
  }));

function Header(props) {
    const classes = useStyles();
    return (
        <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            <Link to = "/" className={classes.link}>Community Organisation Portal </Link>
          </Typography>
          {(props.pageTitle === "home") 
          ? 
          <div> 
            <Button color="inherit">Sign Up <br /> as Organization </Button>
            <Button color="inherit">Sign In <br /> Organization </Button>
          </div>
          : 
          null
        
          }
          
        </Toolbar>
      </AppBar>
    )
}

export default Header
