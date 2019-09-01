import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


import { setActiveFilter, setInactiveFilter } from '../actions/filters';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '10px 6px',
        display: 'flex',
        alignItems: 'center',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4)
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    }
}));

export const AdminFilters = (props) =>{
    const classes = useStyles();

    const handleChange = name => event => {
        console.log(name);
        switch(name) {
            case 'active':
                return props.setActiveFilter(event.target.checked);
            case 'inactive':
                return props.setInactiveFilter(event.target.checked);
            default:
                return name;
        }
      };

    return (
        <Grid className={classes.root} container spacing={1} direction="column" alignItems="center">
            <FormGroup row>
                <FormControlLabel
                        control={
                        <Checkbox
                            checked={props.inactive}
                            onChange={handleChange('inactive')}
                            value="inactive"
                            color="primary"
                        />
                        }
                        label="Inactive"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={props.active}
                                onChange={handleChange('active')}
                                value="active"
                                color="primary"
                            />
                        }
                        label="Active"
                    />
            </FormGroup>
        </Grid>
        
    );
}

const mapStateToProps = (state) => ({
    active: state.filters.active,
    inactive: state.filters.inactive
})

const mapDispatchToProps = (dispatch) => ({
    setActiveFilter: (active) => dispatch(setActiveFilter(active)),
    setInactiveFilter: (inactive) => dispatch(setInactiveFilter(inactive))
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(AdminFilters);
  