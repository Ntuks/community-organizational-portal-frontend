import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Hidden from '@material-ui/core/Hidden'

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

export default function OrgCard() {
    const classes = useStyles();
    return (
        <Grid item xs={12}>
            <CardActionArea component="a" href="#">
                <Card className={classes.card}>
                    <Hidden xsDown>
                        <CardMedia
                            className={classes.cardMedia}
                            image="https://source.unsplash.com/random"
                            title="Image title"
                        />
                    </Hidden>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                "Title"
                        </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                "date"
                        </Typography>
                            <Typography variant="subtitle1" paragraph>
                                description
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
