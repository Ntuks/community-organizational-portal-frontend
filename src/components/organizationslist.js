import React from 'react';
import OrganizationCard from './card';
import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { OrganizationsBySearch } from '../selectors/organisations';
import { startSetOrganisation } from '../actions/organisations';
import GridList from '@material-ui/core/GridList';
import Box from '@material-ui/core/Box';



const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      'flex-grow': 1,
      'flex-direction': 'column',
      alignItems: 'flex-start',
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '100%',
      height: '100vh',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    containerCards: {
      display: 'flex',
    }
  }));

export const Organizationslist = (props)=> {
    const classes = useStyles();
    return (
        <div>
            <GridList className={classes.gridList}>
                {
                    props.organisations.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No organisations</span>
                    </div>
                    ) : (
                      <div style={{ width: '100%' }}>
                      <Box 
                        display="flex"
                        flexWrap="nowrap"
                        flexDirection="column"
                        alignContent="flex-start"
                        css={{ width: '100%' }}
                      >
                        {
                          props.organisations.map((organisation) => {
                            return  organisation.status === 'ACTIVE' ? 
                              (
                                  <OrganizationCard key={organisation._id} {...organisation} />
                              )
                              : null;
                          })
                        }
                        </Box>
                        </div>
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