import React from 'react';

import { connect } from 'react-redux';
import { OrganizationsBySearch } from '../../selectors/organisations';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Geocode from "react-geocode";
import MUIPlacesAutocomplete, { geocodeByPlaceID } from 'mui-places-autocomplete';
import { startAddOrganisation } from '../../actions/auth';

Geocode.setApiKey('AIzaSyArIRJ8PDlCmFfTslAi7hT3PTJhjB1hJoY');
Geocode.enableDebug();

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

export const EditProfileDetails = (props)=>{
  const classes = useStyles();
  
  const organisation = props.organisation;

  const [values, setValues] = React.useState({
    title: organisation.title||"",
    tagline: organisation.tagline||"",
    description:organisation.description||"",
    areasOfEngagement: organisation.areasOfEngagement||"",
    location:organisation.location||"",
    pboNpoNumber: organisation.pboNpoNumber||"",
    facebookPagelink: organisation.facebookLink||"",
    coordinates: organisation.coordinates||""
  });

  function handleChange(event) {
    event.persist();
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  } 

  // Handle suggestions for dropdown of locations
  // stores lats & longs
  function onSuggestionSelected(suggestion) {
    console.log(suggestion);
    geocodeByPlaceID(suggestion.place_id).then((results) => {
      const { geometry } = results[0]
      const coordinates = {
        lat: geometry.location.lat(),
        lng: geometry.location.lng(),
      }

      //need to set state based on whats selected from dropdown
      // setValues(oldValues => ({
      //   ...oldValues,
      //   'location': suggestion.description,
      //   coordinates
      // }));
      console.log(coordinates);
    }).catch((err) => {
      console.log(err)
    })
  }

  function createAutocompleteRequest(inputValue) {
    return {
      input: inputValue,
      componentRestrictions: {country: "za"},
    }
  }

  function handleUpdateProfile() {
    props.handleClose();
    console.log('testing')
    props.startAddOrganisation(props.organisation._id, values);
  }

  return (
    <div>
        <TextField placeholder="Organisation Name"
        className={classes.title}
        name="title"
        value={values.title}
        onChange={handleChange}
        >
        </TextField>
        
        <TextField placeholder="Tagline"
        className={classes.title}
        name="tagline"
        value={values.tagline}
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

        <TextField placeholder="areasOfEngagement"
        className={classes.title}
        name="areasOfEngagement"
        value={values.areasOfEngagement}
        onChange={handleChange}
        >
        </TextField>

        <MUIPlacesAutocomplete
          textFieldProps={{ 
            value: values.location,
            placeholder: 'location',
            onChange: handleChange,
            name: 'location',
            style: {
              width: "100%",
              'paddingTop': '10px',
            }
          }}
          onSuggestionSelected={onSuggestionSelected}
          renderTarget={() => (<div />)}
          createAutocompleteRequest={createAutocompleteRequest}
        />   

        <TextField placeholder="pboNpoNumber"
        className={classes.title}
        name="pboNpoNumber"
        value={values.pboNpoNumber}
        onChange={handleChange}
        >
        </TextField>

        <TextField placeholder="facebookPagelink"
        className={classes.title}
        name="facebookPagelink"
        value={values.facebookPagelink}
        onChange={handleChange}
        >
        </TextField>
          <div className={classes.buttonDiv}>
          <Button variant="contained" color="primary" className={classes.button} onClick={handleUpdateProfile}>
            Update Profile
          </Button>
          </div>
        
    </div>
    
  );
}

const mapDispatchToProps = (dispatch) => ({
  startAddOrganisation: (id, organisation) => dispatch(startAddOrganisation(id, organisation))
})

export default connect(null, mapDispatchToProps)(EditProfileDetails);