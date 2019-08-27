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
    backgroundColor: "white",
    border: "1px solid grey"
  },
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/generic/bluewhitebanner.jpg"
          title="ProfileBanner"  
        >
            <Grid>
                <Avatar alt="IMG" src={`${props.organisation.imagelink}`} className={classes.bigAvatar} />
            </Grid>
        </CardMedia>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h3" component="h2">
                {props.organisation.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
                  {props.organisation.tagline}
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );
}