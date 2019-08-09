import React, { Component } from 'react'
import { Header, Footer } from '../../components/layout'
import ProfileBanner from './ProfileBanner'
import ProfileAbout from './ProfileAbout'
import ProfileTimeline from './ProfileTimeline'



export class Profile extends Component {
    render() {
        return (
            <div>
                <Header pageTitle ="orgProfile"/>
                <div className="content-container">
                    <ProfileBanner/>
                    <ProfileAbout/>
                    <ProfileTimeline/>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Profile
