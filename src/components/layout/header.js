import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import {startLogout} from '../../actions/auth';


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
      border: "solid",
      "border-colour": "white",
      "border-width": "thin",
      "border-radius": "5px",
      "padding": "10px",
    },
  }));

  

function Header(props) {
    const classes = useStyles();

    function renderMenu(auth, classes) {
      if(auth.role === 'Organization Manager') {
        return (
        <div>
          <Typography variant="h6" className={classes.title}>
            <Link to = {`/myProfile:${props.auth.organizationid}`} className={classes.link}>
              My Profile
            </Link>
            <Link to = "/" className={classes.link} onClick = {props.startLogout}>
              Log Out 
            </Link>
            </Typography>
          </div>
          )
      }
      else if(auth.role === 'Admin') {
        return (
        <div>
          <Typography variant="h6" className={classes.title}>
            <Link to = "/" className={classes.link} onClick = {props.startLogout}>
              Log Out 
            </Link>
            </Typography>
          </div>
          )
      }
      else {
        return (
          <div>
            <Typography variant="h6" className={classes.title}>
                <Link to = "/sign-up" className={classes.link}>
                  Organisation Sign Up 
                </Link>
                <Link to = "/sign-in" className={classes.link}>
                  Organisation Sign In 
                </Link>
            </Typography>
            </div>
        )
      }
    }
    return (
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to = "/" className={classes.link}>Community Organisation Portal </Link>
          </Typography>
          {
            renderMenu(props.auth, classes)
          }
        </Toolbar>
      </AppBar>
    )
}

const mapStateToProps = (state) => ({
  auth: state.auth
})
const mapDispatchToProps = (dispatch,state) => ({
  startLogout: (loginObj) => dispatch(startLogout())
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
