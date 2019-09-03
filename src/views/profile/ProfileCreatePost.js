import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { TextField, Select, MenuItem, InputLabel } from '@material-ui/core';

import 'react-dates/initialize';
import { DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import '../../styles/vendors/_reactDatesOverrides.scss'

import moment from 'moment';

import Geocode from "react-geocode";
import MUIPlacesAutocomplete, { geocodeByPlaceID } from 'mui-places-autocomplete'

Geocode.setApiKey(process.env.GOOGLE_MAPS_API);
Geocode.enableDebug();

const useStyles = makeStyles({

  selectEmpty: {
    marginTop: 0
  },
  card: {
    minWidth: 275,
    height:"auto",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    paddingTop: 10,
    width: "320px",
  },
  pos: {
    marginBottom: 12,
  },
  postStructure:{
    display: 'flex',
    "justify-content": "space-between",
    paddingBottom: 5,
  },
  postType:{
    display: 'flex',
    flexWrap: 'wrap',
  },
  postCalendar:{
    display: 'flex',
    flexWrap: 'wrap',
    padding: 5,
  },
  inputLabel:{
    color: "intial",
    opacity: 0.2,
    fontSize: 12,
    marginTop:13,
  },
  select:{
    minWidth: 60,
    width: "100px",
    paddingLeft: 10,
  },
  MUI:{
     position: 'relative',
  }
});

export default function SimpleCard() {
  const classes = useStyles();
  
  const [values, setValues] = React.useState({
    postTitle: '',
    postType: "",
    postTime:"",
    postDescription: "",
    startDate:  moment(),
    endDate: null,
    focusedInput: null,
    location:"",
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
      setValues(oldValues => ({
        ...oldValues,
        'location': suggestion.description,
        coordinates
      }));
      console.log(coordinates);
    }).catch((err) => {
      console.log(err)
    })
  }

  function handleChangeCalendar({ startDate, endDate }) {
   
    setValues(oldValues => ({
      ...oldValues,
      startDate,
      endDate,
    }));
  }
  
  function handleFocusCalendar({ focusedInput}) {
   
    setValues(oldValues => ({
      ...oldValues,
      focusedInput
    }));
  }

  function createAutocompleteRequest(inputValue) {
    return {
      input: inputValue,
      componentRestrictions: {country: "za"},
    }
  }

  return (
    <Card className={classes.card}>
      <CardContent >
      <div className={classes.postStructure}>
          <TextField placeholder="Post Title"
          className={classes.title}
          name="postTitle"
          value={values.postTitle}
          onChange={handleChange}
          >
          </TextField>

          <div className={classes.postType}>
              <InputLabel htmlFor="postType" className={classes.inputLabel}>PostType: </InputLabel>
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
          </div>

      </div>
      <br></br>
      <div className={classes.postStructure}>
        <div className={classes.postType}>
          <InputLabel className={classes.inputLabel}>Date: </InputLabel>
          <div className={classes.postCalendar}>
              <DateRangePicker
                startDate={values.startDate} // momentPropTypes.momentObj or null,
                startDateId="stID" // PropTypes.string.isRequired,
                endDate={values.endDate} // momentPropTypes.momentObj or null,
                endDateId="edID" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => handleChangeCalendar({ startDate, endDate })} // PropTypes.func.isRequired,
                focusedInput={values.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => handleFocusCalendar({ focusedInput })} // PropTypes.func.isRequired,
              />
          </div>
        </div>
          
          { //conditional rendering of time selector based on post-type
            values.postType!=="Event"? null:(
            <div className={classes.postType}>
            <InputLabel htmlFor="postTime" className={classes.inputLabel}>Time: </InputLabel>
            <Select
                className = {classes.select}
                value={values.postTime}
                onChange={handleChange}
                inputProps={{
                  name:"postTime",
                  id: 'postTime',
                }}
            >
                    <MenuItem value={"00:00"}>00:00</MenuItem>
                    <MenuItem value={"00:30"}>00:30</MenuItem>
                    <MenuItem value={"01:00"}>01:00</MenuItem>
                    <MenuItem value={"01:30"}>01:30</MenuItem>
                    <MenuItem value={"02:00"}>02:00</MenuItem>
                    <MenuItem value={"02:30"}>02:30</MenuItem>
                    <MenuItem value={"03:00"}>03:00</MenuItem>
                    <MenuItem value={"03:30"}>03:30</MenuItem>
                    <MenuItem value={"04:00"}>04:00</MenuItem>
                    <MenuItem value={"04:30"}>04:30</MenuItem>
                    <MenuItem value={"05:00"}>05:00</MenuItem>
                    <MenuItem value={"05:30"}>05:30</MenuItem>
                    <MenuItem value={"06:00"}>06:00</MenuItem>
                    <MenuItem value={"06:30"}>06:30</MenuItem>
                    <MenuItem value={"07:00"}>07:00</MenuItem>
                    <MenuItem value={"07:30"}>07:30</MenuItem>
                    <MenuItem value={"08:00"}>08:00</MenuItem>
                    <MenuItem value={"08:30"}>8:30</MenuItem>
                    <MenuItem value={"09:00"}>09:00</MenuItem>
                    <MenuItem value={"09:30"}>09:30</MenuItem>
                    <MenuItem value={"10:00"}>10:00</MenuItem>
                    <MenuItem value={"10:30"}>10:30</MenuItem>
                    <MenuItem value={"11:00"}>11:00</MenuItem>
                    <MenuItem value={"11:30"}>11:30</MenuItem>
                    <MenuItem value={"12:00"}>12:00</MenuItem>
                    <MenuItem value={"12:30"}>12:30</MenuItem>
                    <MenuItem value={"13:00"}>13:00</MenuItem>
                    <MenuItem value={"13:30"}>13:30</MenuItem>
                    <MenuItem value={"14:00"}>14:00</MenuItem>
                    <MenuItem value={"14:30"}>14:30</MenuItem>
                    <MenuItem value={"15:00"}>15:00</MenuItem>
                    <MenuItem value={"16:30"}>16:30</MenuItem>
                    <MenuItem value={"17:00"}>17:00</MenuItem>
                    <MenuItem value={"17:30"}>17:30</MenuItem>
                    <MenuItem value={"15:00"}>18:00</MenuItem>
                    <MenuItem value={"16:30"}>18:30</MenuItem>
                    <MenuItem value={"15:00"}>19:00</MenuItem>
                    <MenuItem value={"16:30"}>19:30</MenuItem>
                    <MenuItem value={"15:00"}>20:00</MenuItem>
                    <MenuItem value={"16:30"}>20:30</MenuItem>
                    <MenuItem value={"15:00"}>21:00</MenuItem>
                    <MenuItem value={"16:30"}>21:30</MenuItem>
                    <MenuItem value={"15:00"}>22:00</MenuItem>
                    <MenuItem value={"16:30"}>22:30</MenuItem>
                    <MenuItem value={"15:00"}>23:00</MenuItem>
                    <MenuItem value={"16:30"}>23:30</MenuItem>
            </Select>
            </div>)
      }
      </div>
      <div className= {classes.MUI}>
      <MUIPlacesAutocomplete
        textFieldProps={{ 
          value: values.location,
          placeholder: 'location',
          onChange: handleChange,
          name: 'location',
          style: {
            width: "50%",
            'paddingTop': '10px',
          }
        }}
        onSuggestionSelected={onSuggestionSelected}
        renderTarget={() => (<div />)}
        createAutocompleteRequest={createAutocompleteRequest}
      />
      </div>
      
      <br></br>
      <textarea 
      name="postDescription"
      className="textArea" 
      color="textSecondary" 
      onChange={handleChange}
      placeholder = "Post Description - Tell us more about your post">
      </textarea>
      </CardContent>

      <CardActions>
        <Button size="small">Upload Image</Button>
        <Button size="small">Submit</Button>
      </CardActions>
    </Card>
  );
}