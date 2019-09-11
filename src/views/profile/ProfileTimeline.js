import React from 'react';
import {connect} from 'react-redux'
import ProfileCreatePost from './ProfileCreatePost' 
import ProfilePost from './ProfilePost';

// import {startSetProjects} from '../../actions/project';
// import {startSetCampaigns} from '../../actions/campaign'
// import {startSetEvents} from '../../actions/event'

function ProfileTimeline(props) {

  return (
        <div className = "scrollableContainer">
        {props.isOwner && <ProfileCreatePost/>}
        {

          props.projects && props.projects.length === 0 ? (
            null
            ) : (
                props.projects.map((project) => {
                return  <ProfilePost key={project._id} postType ="Project" {...project} isOwner ={props.isOwner} id = {project._id} />;
                })
            )
        

        }
        {

          props.campaigns && props.campaigns.length === 0 ? (
            null
            ) : (
                props.campaigns.map((campaign) => {
                return  <ProfilePost key={campaign._id} postType ="Campaign" {...campaign} isOwner ={props.isOwner} id = {campaign._id} />;
                })
            )
        

        }
        {

          props.events && props.events.length === 0 ? (
            null
            ) : (
                props.events.map((event) => {
                return  <ProfilePost key={event._id} postType ="Event" {...event} isOwner ={props.isOwner} _id = {event._id} />;
                })
            )
        

        }

        </div>
        
  );
}
// const mapDispatchToProps = (dispatch) => ({
//   startSetProjects:  dispatch(startSetProjects()),
//   startSetCampaigns: dispatch(startSetCampaigns()),
//   startSetEvents: dispatch(startSetEvents())
// });

const mapStateToProps = (state) => {
  return {
      projects: state.projects,
      campaigns: state.campaigns,
      events: state.events,
  };
};


export default connect(mapStateToProps)(ProfileTimeline);