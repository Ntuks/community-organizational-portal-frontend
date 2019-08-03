import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';


const useStyles = makeStyles(theme => ({
    root: {
        padding: '10px 6px',
        display: 'flex',
        alignItems: 'center',
        width: '50%',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4)
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    }
}));

export default function Search() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <IconButton className={classes.iconButton} aria-label="menu">
                <HomeIcon />
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder="Search Community Organizations"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}