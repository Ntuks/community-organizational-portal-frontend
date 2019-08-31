import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Hidden from '@material-ui/core/Hidden'
import {history} from '../routers/AppRouter'

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

export default function OrgCard(props) {
    const classes = useStyles();
    const handleOnClick = event => {
        event.preventDefault();
        history.push(`/orgProfile:${props.title}`)
    }
    return (
        <Grid item xs={12}>
            <CardActionArea component="a" onClick ={handleOnClick}>
                <Card className={classes.card}>
                    <Hidden xsDown>
                        <CardMedia
                            className={classes.cardMedia}
                            image={ props.imagelink || "https://source.unsplash.com/random"}
                            title="Image title"
                        />
                    </Hidden>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                            {props.title || "Title"}
                        </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            {props.date || "date"}
                        </Typography>
                            <Typography variant="subtitle1" paragraph>
                            {props.description || "description"}
                        </Typography>
                            <Typography variant="subtitle1" color="primary">
                                Continue reading...
                        </Typography>
                        </CardContent>
                    </div>
                </Card>
            </CardActionArea>
        </Grid>
    )
}
