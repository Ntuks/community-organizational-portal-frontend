import React from 'react';
import OrganizationCard from './card';
import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { OrganizationsBySearch } from '../selectors/organisations';
import { startSetOrganisation } from '../actions/organisations';
import GridList from '@material-ui/core/GridList';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexFlow: 'column',
      flexWrap: 'wrap',
      alignContent: 'flex-start',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '100%',
      height: '100vh',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    }
  }));

export const Organizationslist = (props)=> {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <GridList className={classes.gridList}>
           {//console.log(props)
            }
            
                {
                    props.organisations.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No organisations</span>
                    </div>
                    ) : (
                        props.organisations.map((organisation) => {
                          return  organisation.status === 'ACTIVE' ? <OrganizationCard key={organisation._id} {...organisation} /> : null;
                        })
                    )
                }
                {props.startSetOrganisation}
        
            </GridList>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        organisations: OrganizationsBySearch(state.organisations,state.filters)
    };
  };

const mapDispatchToProps = (dispatch) => ({
    startSetOrganisation:  dispatch(startSetOrganisation())
});

export default connect(mapStateToProps, mapDispatchToProps)(Organizationslist);