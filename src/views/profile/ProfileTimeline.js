import React from 'react';

import ProfileCreatePost from './ProfileCreatePost' 
import ProfilePost from './ProfilePost';

export default function SimpleContainer(props) {
  return (
        <div className = "scrollableContainer">
        {props.isOwner && <ProfileCreatePost/>}
        <ProfilePost/>
        <ProfilePost/>

        </div>
        
  );
}
