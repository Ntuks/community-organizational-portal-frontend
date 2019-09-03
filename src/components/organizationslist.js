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
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '100%',
      height: '100vh',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    titleBar: {
      background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
      color: 'white',
    },
  }));

export const Organizationslist = (props)=> {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <GridList cellHeight={200} spacing={1} className={classes.gridList}>
           {//console.log(props)
            }
            
                {
                    props.organisations.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No organisations</span>
                    </div>
                    ) : (
                        props.organisations.map((organisation) => {
                        return  <OrganizationCard key={organisation.title} {...organisation} />;
                        })
                    )
                }
                { props.startSetOrganisation}
        
            </GridList>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        organisations: state.organisations/** OrganizationsBySearch(state.organisations,state.filters) */
    };
  };

const mapDispatchToProps = (dispatch) => ({
    startSetOrganisation:  dispatch(startSetOrganisation())
});

export default connect(mapStateToProps, mapDispatchToProps)(Organizationslist);