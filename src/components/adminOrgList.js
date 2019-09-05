import React from 'react';
import OrganizationCard from './card';
import { connect } from 'react-redux';
import { startSetOrganisation } from '../actions/organisations';

export const Organizationslist = (props)=> {
    return (
        <div>
            {
                props.organisations && props.organisations.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>No organisations</span>
                </div>
                ) : (
                    props.organisations.map((organisation) => {
                        if(props.active && organisation.status === 'ACTIVE'){
                            return  <OrganizationCard key={organisation.title} {...organisation} admin={true} status={organisation.status}/>;
                        }
                        else if(props.inactive && organisation.status === 'INACTIVE') {
                            return  <OrganizationCard key={organisation.title} {...organisation} admin={true} status={organisation.status}/>;
                        }
                        else if (props.active && props.inactive) {
                            return  <OrganizationCard key={organisation.title} {...organisation} admin={true} status={organisation.status}/>;
                        }
                        
                    })
                )
            }
            {props.startSetOrganisation}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        organisations: state.organisations,
        active: state.filters.active,
        inactive: state.filters.inactive
    };
  };

const mapDispatchToProps = (dispatch) => ({
    startSetOrganisation:  dispatch(startSetOrganisation())
})
export default connect(mapStateToProps, mapDispatchToProps)(Organizationslist);