/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import EditProfileDetails from './editProfileDetails';

const useStyles = makeStyles(theme =>({
  card: {
    minWidth: 275,
    height: "100%",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  editIconPanel:{
    display: "flex",
    justifyContent: "space-between",
  },
  editIcon:{
    '&:hover': {
      cursor: 'pointer'
    },
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
  
})
);

function SimpleCard(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    console.log('test', props)
    
  });

  function handleEditProfile(){
    setOpen(true);
  }
  
  function handleClose() {
    setOpen(false);
  };

  return (
    <Card className={classes.card}>
      <CardContent>
      {console.log('fycasd',props.organisation)}

        <Typography variant="h3" component="h3" className={classes.editIconPanel}>
        Organisation Bio  {props.isOwner &&<EditIcon onClick={handleEditProfile} className={classes.editIcon} />}
        </Typography>
       
        <Typography className={classes.title} color="textSecondary">
         Full Description
      </Typography>
        <Typography className={classes.pos} color="textSecondary">
            {props.organisation.description}
        </Typography>

        <Typography variant="h5" component="span">
            Areas of engagement:
        </Typography>
        <Typography variant="body2" >  {props.organisation.areasOfEngagement||"n/a"} </Typography>

        <div><br></br></div>
        <Typography variant="h5" component="span">
            Location:
        </Typography>
        <Typography variant="body2" >  {props.organisation.location} </Typography>
        <div><br></br></div>
        <Typography variant="h5" component="span">
              PBO/NPO Number:
          </Typography>
          <Typography variant="body2" >  {props.organisation.pboNpoNum||"n/a"} </Typography>
        <div><br></br></div>
        <Typography variant="h5" component="span">
            Contact Details:
        </Typography>
        <Typography variant="body2" component="p"> Email: {props.organisation.pboNpo} </Typography>
        <Typography variant="body2" component="p"> Tel: </Typography>
        <Typography variant="body2" component="p"> Website: </Typography>
        
      </CardContent>
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
              <EditProfileDetails organisation={props.organisation} handleClose={handleClose}/>
            </div>
          </div>
        </Fade>
      </Modal>
    </Card>
  );
}



export default (SimpleCard);