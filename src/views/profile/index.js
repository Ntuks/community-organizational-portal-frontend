import React from 'react'
import { connect } from 'react-redux';
import { OrganizationsBySearch } from '../../selectors/organisations';
import { Header} from '../../components/layout'
import ProfileBanner from './ProfileBanner'
import ProfileAbout from './ProfileAbout'
import ProfileTimeline from './ProfileTimeline'

import {startSetProjects} from '../../actions/project';
import {startSetCampaigns} from '../../actions/campaign'
import {startSetEvents} from '../../actions/event'

import {history} from '../../routers/AppRouter'

export const Profile  = (props) => {
        var isOwner = (props.location.pathname).includes("/myProfile")? true:false
        // let urlorganisationName
        let org = props.organisation
        console.log('found',org);
        console.log('found2',org.description);
        // if(isOwner){
        //     // this is when the user is the owner and is viewing  their own profile
        //     const { id } = props.match.params
        //     urlorganisationName = id.substring(1)  

        //     organisation = props.organisation
        // }else{
        //     // Any user can open this
        //     const { orgName } = props.match.params
        //     urlorganisationName = orgName.substring(1)     
        //     organisation = findOrgDetails()  
        // }

        // function findOrgDetails(){
        //     let org =   props.organisationsCardDetails.filter((org)=>{
        //           return org.title===urlorganisationName
        //     })
        //     return org[0]
        // }
        

        return (
            <div className="content-container-parent">
                <div className="content-container-header">
                    <Header pageTitle ={props.location.pathname} />
                </div>
                {props.startSetProjects && props.startSetCampaigns && props.startSetEvents}
             
                <div className="content-container">
                    <div className="content-container-child">
                        <ProfileBanner organisation = {org}/>
                        <br></br>
                        <div className="row">
                                <div className="col-lg-4">
                                        <ProfileAbout isOwner = {isOwner} organisation={org} />
                                </div>
                                <div className="col-lg-8">
                                        <ProfileTimeline isOwner = {isOwner}/>
                                </div>
                        </div>
                    </div>
                    
                </div>
                
                {//<div className="content-container-footer">
                   // <Footer/> 
                //</div>
                }
            </div>
        )
    }
const findOrg = (organisations, authOrg) =>{
    console.log(authOrg);
    const path = history.location.pathname
    const id = path.substring(path.indexOf(':')+1).trim()
    console.log("banter : ", id);
    if(Object.keys(authOrg).length > 0) {
        console.log('authorg',authOrg)
        return authOrg.orgData
    }
    else {
        const returnedOrg = organisations.filter((org) => (org._id === id))[0]
        console.log('returnorg',returnedOrg);
        return returnedOrg
    }
}

const mapStateToProps = (state) => {
    return {
        organisationsCardDetails: OrganizationsBySearch(state.organisations,state.filters),
        organisation: findOrg(state.organisations, state.auth),
    };
  };

const mapDispatchToProps = (dispatch) => ({
    startSetProjects:  dispatch(startSetProjects()),
    startSetCampaigns: dispatch(startSetCampaigns()),
    startSetEvents: dispatch(startSetEvents())
  });
export default connect(mapStateToProps, mapDispatchToProps)(Profile);