import React from 'react'
import { connect } from 'react-redux';
import { OrganizationsBySearch } from '../../selectors/organisations';
import { Header} from '../../components/layout'
import ProfileBanner from './ProfileBanner'
import ProfileAbout from './ProfileAbout'
import ProfileTimeline from './ProfileTimeline'


export const Profile  = (props) => {
        var isOwner = (props.location.pathname).includes("/myProfile")? true:false
        let urlorganisationName
        if(isOwner){
            const { id } = props.match.params
            urlorganisationName = id.substring(1)     
        }else{
            const { orgName } = props.match.params
            urlorganisationName = orgName.substring(1)       
        }

        function findOrgDetails(){
            let org =   props.organisations.filter((org)=>{
                  return org.title===urlorganisationName
            })
            return org[0]
        }
        const organisation = findOrgDetails()

        return (
            <div className="content-container-parent">
                <div className="content-container-header">
                    <Header pageTitle ="orgProfile" />
                </div>
                
                <div className="content-container">
                    <div className="content-container-child">
                        <ProfileBanner organisation = {organisation}/>
                        <br></br>
                        <div className="row">
                                <div className="col-lg-4">
                                        <ProfileAbout isOwner = {isOwner} organisation= {organisation} />
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

const mapStateToProps = (state) => {
    return {
        organisations: OrganizationsBySearch(state.organisations,state.filters)
    };
  };

export default connect(mapStateToProps)(Profile);