import React from 'react';
import OrganizationCard from './card';
import { connect } from 'react-redux';
import selectOrganisations from '../selectors/organisations';


export const Organizationslist = (props)=> {
    return (
        <div>
        
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
            
        
            
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        organisations: selectOrganisations(state.organisations,state.filters)
    };
  };

export default connect(mapStateToProps)(Organizationslist);