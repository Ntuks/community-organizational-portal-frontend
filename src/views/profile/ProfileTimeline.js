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
                return  <ProfilePost key={project._id} postType ="Project" {...project}/>;
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
      projects: state.projects
  };
};


export default connect(mapStateToProps)(ProfileTimeline);