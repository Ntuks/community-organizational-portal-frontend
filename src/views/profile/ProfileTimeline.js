import React from 'react';
import {connect} from 'react-redux'
import ProfileCreatePost from './ProfileCreatePost' 
import ProfilePost from './ProfilePost';

import {startSetOrganisation} from '../../actions/project';


export function ProfileTimeline(props) {

  return (
        <div className = "scrollableContainer">
        {props.isOwner && <ProfileCreatePost/>}
        {

          props.projects.length === 0 ? (
            null
            ) : (
                props.projects.map((project) => {
                return  <ProfilePost key={project._id} postType ="Project" {...project}/>;
                })
            )
        

        }
        {props.startSetOrganisation}
        </div>
        
  );
}
const mapDispatchToProps = (dispatch) => ({
  startSetOrganisation:  dispatch(startSetOrganisation())
});

const mapStateToProps = (state) => {
  return {
      projects: state.projects
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ProfileTimeline);