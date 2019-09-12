import React from 'react';

import { connect } from 'react-redux';
import { OrganizationsBySearch } from '../../selectors/organisations';
import { TextField,  Select, MenuItem, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { startEditProject} from '../../actions/project';
import { startEditEvent } from '../../actions/event';
import { startEditCampaign} from '../../actions/campaign';



const useStyles = makeStyles(theme => ({
    postStructure:{
        display: 'flex',
        "justify-content": "space-between",
        paddingBottom: 5,
      },
      buttonDiv:{
        display: 'flex',
        flexWrap: 'wrap',
        'justifyContent': 'space-around'
      },
      title: {
        fontSize: 14,
        paddingTop: 10,
        width: "100%",
      },
      button: {
        marginTop: theme.spacing(2),
        display: 'flex',
      },
}));

export const EditPost = (props)=>{
  const classes = useStyles();
  
  const {title, description, duration, location,date, postType, isOwner=false ,_id} = props

  const [values, setValues] = React.useState({
    title: title,
    description:description,
    duration: duration,
    location: location,
    date: date,
    postType: postType,
  });

  function handleChange(event) {
    event.persist();
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  } 



  function handleUpdatePost() {
    props.handleClose();
    let updates = values
    if (postType === 'Project'){
      props.startEditProject(_id, updates, postType)
    }else if (postType === 'Event'){
      props.startEditEvent(_id, updates, postType)
      
    }else if(postType === 'Campaign'){
      props.startEditCampaign(_id, updates, postType)
    }
    
  }

  return (
    <div>
        <TextField placeholder="title"
        className={classes.title}
        name="title"
        value={values.title}
        onChange={handleChange}
        >
        </TextField>
        
        <TextField placeholder="description"
        className={classes.title}
        name="description"
        value={values.description}
        onChange={handleChange}
        >
        </TextField>

        <TextField placeholder="duration"
        className={classes.title}
        name="duration"
        value={values.duration}
        onChange={handleChange}
        >
        </TextField>

        <TextField placeholder="location"
        className={classes.title}
        name="location"
        value={values.location}
        onChange={handleChange}
        >
        </TextField>


        <TextField placeholder="startDate"
        className={classes.title}
        name="date"
        value={values.date}
        onChange={handleChange}
        >
        </TextField>


          <Select
              className = {classes.select}
              value={values.postType}
              onChange={handleChange}
              inputProps={{
                name:"postType",
                id: 'postType',
              }}
          >
                  <MenuItem value={"Event"}>Event</MenuItem>
                  <MenuItem value={"Campaign"}>Campaign</MenuItem>
                  <MenuItem value={"Project"}>Project</MenuItem>
          </Select>
          <div className={classes.buttonDiv}>
          <Button variant="contained" color="primary" className={classes.button} onClick={handleUpdatePost}>
            Update Post
          </Button>
          </div>
        
    </div>
    
  );
}

const mapDispatchToProps = (dispatch) => ({
  startEditProject: (_id, updates, postType) => dispatch(startEditProject(_id, updates,postType)),
  startEditEvent: (_id, updates, postType) => dispatch(startEditEvent(_id, updates, postType)),
  startEditCampaign: (_id, updates, postType) => dispatch(startEditCampaign(_id, updates, postType))
})

export default connect(null, mapDispatchToProps)(EditPost);