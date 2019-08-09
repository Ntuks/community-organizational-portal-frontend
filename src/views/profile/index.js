import React, { Component } from 'react'
import { Header, Footer } from '../../components/layout'
import ProfileBanner from './ProfileBanner'
import ProfileAbout from './ProfileAbout'
import ProfileTimeline from './ProfileTimeline'


const Profile  = (props) => {
        var isOwner = props.location.pathname==="/myProfile"? true:false
        console.log(props);
        return (
            <div className="content-container-parent">
                <div className="content-container-header">
                    <Header pageTitle ="orgProfile" />
                </div>
                
                <div className="content-container">
                    <div className="content-container-child">
                        <ProfileBanner/>
                        <br></br>
                        <div className="row">
                                <div className="col-lg-4">
                                        <ProfileAbout />
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

export default Profile
