import React from 'react';
import {connect} from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { startEditProject, startRemoveProject } from '../../actions/project';
import { startEditEvent, startRemoveEvent } from '../../actions/event';
import { startEditCampaign, startRemoveCampaign } from '../../actions/campaign';
import EditPost from './editPost'

const useStyles = makeStyles(theme => ({
  card: {
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export function ProfilePost(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const {title='', description='', duration='', location='',startDate='', endDate='', postType, isOwner=false ,_id} = props
  // function handleExpandClick() {
  //   setExpanded(!expanded);
  // }

  const [open, setOpen] = React.useState(false);
  
  function handleClose() {
    setOpen(false);
  };

   const handleEdit = (event) => {
     if(isOwner){
      
       setOpen(true);
     }
  }
  const handleDelete = (event) => {
    if(isOwner){
      if (postType === 'Project'){
        props.startRemoveProject({_id})
      }else if (postType === 'Event'){
        props.startRemoveEvent({_id})
      }else if(postType === 'Campaign'){
        props.startRemoveCampaign({_id})
      }
    }
 }
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            *
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={postType==='Project'? ("Duration: "+duration) : ("Start: "+startDate +" end: "+endDate) }
      />
      <CardMedia
        className={classes.media}
        image="/static/images/generic/newPost.gif"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      {isOwner?
        <div>
            <IconButton aria-label="edit">
              <CreateIcon onClick={handleEdit}/>
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteIcon onClick={handleDelete} />
            </IconButton>
        </div>
        : null
      }
        {//<IconButton
        //   className={clsx(classes.expand, {
        //     [classes.expandOpen]: expanded,
        //   })}
        //   onClick={handleExpandClick}
        //   aria-expanded={expanded}
        //   aria-label="show more"
        // >
        //   <ExpandMoreIcon />
        // </IconButton>
      }
      </CardActions>{

      
      // <Collapse in={expanded} timeout="auto" unmountOnExit>
      //   <CardContent>
      //     <Typography paragraph>Method:</Typography>
      //     <Typography paragraph>
      //       Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
      //       minutes.
      //     </Typography>
      //     <Typography paragraph>
      //       Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
      //       heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
      //       browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
      //       and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
      //       pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
      //       saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
      //     </Typography>
      //     <Typography paragraph>
      //       Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
      //       without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
      //       medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
      //       again without stirring, until mussels have opened and rice is just tender, 5 to 7
      //       minutes more. (Discard any mussels that don’t open.)
      //     </Typography>
      //     <Typography>
      //       Set aside off of the heat to let rest for 10 minutes, and then serve.
      //     </Typography>
      //   </CardContent>
      // </Collapse>
    }
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Oganisation Profile Details </h2>
            <div id="transition-modal-description">
              <EditPost {...props}  handleClose={handleClose}/>
            </div>
          </div>
        </Fade>
      </Modal>
    </Card>
  );
}

const mapDispatchToProps = (dispatch) => ({
  // startLogin: (loginObj) => dispatch(startLogin(loginObj)),
  startRemoveProject: (id)=>dispatch (startRemoveProject(id)),
  startRemoveEvent: (id)=>dispatch (startRemoveEvent(id)),
  startRemoveCampaign: (id)=>dispatch (startRemoveCampaign(id))
});

export default connect(undefined, mapDispatchToProps)(ProfilePost);