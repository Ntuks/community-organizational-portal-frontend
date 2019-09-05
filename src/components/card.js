import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Hidden from '@material-ui/core/Hidden'
import {history} from '../routers/AppRouter'

import { startActivateOrg } from '../actions/organisations'


import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
        marginBottom: theme.spacing(2),
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },

}));

function OrgCard({ title, imagelink, date, description, admin=false, status, _id, startActivateOrg, tagline }) {
    const classes = useStyles();

    const [state, setState] = React.useState({
        slider: false,
    });
    const handleChange = name => event => {
        const status = event.target.checked ? 'ACTIVE' : 'INACTIVE'
        startActivateOrg(title, status)
        setState({ ...state, [name]: event.target.checked });
    };

    const handleOnClick = event => {
        event.preventDefault();
        if(!admin)
            history.push(`/orgProfile:${_id}`)
    }

    return (
        <Grid item xs={12}>
            <CardActionArea component="a" onClick ={handleOnClick}>
                <Card className={classes.card}>
                    <Hidden xsDown>
                        <CardMedia
                            className={classes.cardMedia}
                            image={ imagelink || "https://source.unsplash.com/random"}
                            title="Image title"
                        />
                    </Hidden>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                            {title || "Title"}
                        </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            {date || "date"}
                        </Typography>
                            <Typography variant="subtitle1" paragraph>
                            {tagline || "tagline"}
                        </Typography>

                            { 
                                admin ? (
                                <FormControlLabel
                                    control={
                                    <Switch
                                        checked={status === 'ACTIVE' ? true : false}
                                        onChange={handleChange('slider')}
                                        value="slider"
                                        color="primary"
                                    />
                                    }
                                    label={status === 'ACTIVE' ? "Account Activated" : "Account Deactivated"}
                                />
                            ) : (
                                <Typography variant="subtitle1" color="primary">
                                    Continue reading...
                                </Typography>
                            ) 
                            }
                        </CardContent>
                    </div>
                </Card>
            </CardActionArea>
        </Grid>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startActivateOrg: (id, status) => dispatch(startActivateOrg(id, status)),
    // setInactiveFilter: (inactive) => dispatch(setInactiveFilter(inactive))
});

export default connect(null, mapDispatchToProps)(OrgCard);
