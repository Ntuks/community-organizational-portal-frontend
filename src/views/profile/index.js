import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { OrganizationsBySearch } from '../../selectors/organisations';
import { Header} from '../../components/layout'
import ProfileBanner from './ProfileBanner'
import ProfileAbout from './ProfileAbout'
import ProfileTimeline from './ProfileTimeline'

import {startSetProjects, startclearProjects} from '../../actions/project';
import {startSetCampaigns, startclearCampaigns} from '../../actions/campaign'
import {startSetEvents, startclearEvents} from '../../actions/event'

import {history} from '../../routers/AppRouter'

export const Profile  = (props) => {
        var isOwner = (props.location.pathname).includes("/myProfile")? true:false
        // let urlorganisationName
        let org = props.organisation

        useEffect(() => {
            
            if (isOwner){
                props.startSetProject() 
                props.startSetCampaign()
                props.startSetEvent() 

            }else{

                props.startclearProject() 
                props.startclearCampaign()
                props.startclearEvent()
            
            }
                

            return () => {
                
            };
        }, [])
        
//if owner, set projects using authenticated user data
 // clear any existing projects, events and campaigns
        return (
            <div className="content-container-parent">
                <div className="content-container-header">
                    <Header pageTitle ={props.location.pathname} />
                </div>

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
    //console.log(authOrg);
    const path = history.location.pathname
    const id = path.substring(path.indexOf(':')+1).trim()
    console.log(id)
    //console.log("banter : ", id);
    if(Object.keys(authOrg).length > 0 && authOrg.role !=="ADMIN") {
        //console.log('authorg',authOrg)
        return authOrg.orgData
    }
    else {
        const returnedOrg = organisations.filter((org) => (org._id === id))[0]
        //console.log('returnorg',returnedOrg);
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
    startSetProject:  ()=>dispatch(startSetProjects()),
    startSetCampaign: ()=>dispatch(startSetCampaigns()),
    startSetEvent: ()=> dispatch(startSetEvents()),
    startclearProject: ()=>dispatch (startclearProjects()),
    startclearCampaign: ()=>dispatch(startclearCampaigns()),
    startclearEvent: ()=> dispatch(startclearEvents())
  });
export default connect(mapStateToProps, mapDispatchToProps)(Profile);