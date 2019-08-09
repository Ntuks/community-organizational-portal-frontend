import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    maxWidth: "100%",
  },
  cardContent:{
    marginLeft: 200,
  },
  media: {
    height: 140,
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/generic/bluewhitebanner.jpg"
          title="ProfileBanner"  
        >
            <Grid container justify="left" alignItems="bottom">
                <Avatar alt="Remy Sharp" src="/static/images/generic/spca.gif" className={classes.bigAvatar} />
            </Grid>
        </CardMedia>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            SPCA - Society for the Prevention of Cruelty to Animals
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
             Our mission to prevent cruelty to animals. This is done through education, law enforcement, veterinary care services an Animal Care Centre, Horse Care and Farmyard Unit, and Wildlife Facility.
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );
}