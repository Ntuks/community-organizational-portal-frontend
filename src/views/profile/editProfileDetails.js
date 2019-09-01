import React from 'react';

import { connect } from 'react-redux';
import { OrganizationsBySearch } from '../../selectors/organisations';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    postStructure:{
        display: 'flex',
        "justify-content": "space-between",
        paddingBottom: 5,
      },
      postType:{
        display: 'flex',
        flexWrap: 'wrap',
      },
      title: {
        fontSize: 14,
        paddingTop: 10,
        width: "100%",
      },
}));

export const EditProfileDetails=  (props)=>{
  const classes = useStyles();
  
//    function findOrgDetails(){
//       let org =   props.organisations.filter((org)=>{
//             return org.title==='SPCA'
//       })
//       return org
//   }
//   const organisation = findOrgDetails()
const organisation =props.organisation;

  const [values, setValues] = React.useState({
    organisationName: organisation.title||"",
    tagline: organisation.tagline||"",
    description:organisation.description||"",
    areasOfEngagement: organisation.areasOfEngagement||"",
    location:organisation.location||"",
    pboNpoNumber: organisation.pboNpoNum||"",
    facebookPagelink: organisation.facebookLink||"",
  });

  function handleChange(event) {
    event.persist();
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  } 

  return (
    
    <div>
        
        <TextField placeholder="Organisation Name"
        className={classes.title}
        name="organisationName"
        value={values.organisationName}
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

        <TextField placeholder="location"
        className={classes.title}
        name="location"
        value={values.location}
        onChange={handleChange}
        >
        </TextField>

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


    </div>
    
  );
}

const mapStateToProps = (state) => {
    return {
        organisations: OrganizationsBySearch(state.organisations,state.filters)
    };
  };

export default connect(mapStateToProps)(EditProfileDetails);