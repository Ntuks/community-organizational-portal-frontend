import {getProjects, createPost, editPost, deleteProject} from '../helpers/requests'
import {startLogout } from './auth'
import {history} from '../routers/AppRouter'

export const addProject = (project) => ({
  type: 'ADD_PROJECT',
  project: project
});

export const startAddProject = (projectData,postType) => {
  return (dispatch, getState) => {
    // const uid = getState().auth.uid;
    const {
      title = '',
      description = '',
      duration = '',
      poster = '',
    } = projectData;
    const project = { title, description, duration, poster };
    
    //push to DB 
    console.log(project);

    createPost(project,postType).then((response) =>{
      if(typeof (response.data.message) !== 'undefined'){
        alert('Project Message:' + response.data.message)
      }else{
        dispatch(addProject(response.data));
      }
    });

  };
};

// SET_PROJECTS
export const setProjects = (project) => ({
  type: 'SET_PROJECT',
  project: project
});


export const startSetProjects = (projects) => {
  return (dispatch, getState) => {
    // const uid = getState().auth.uid;
    getProjects().then( (response)=>{
      console.log('startSetProjects',response.data)
      if(typeof (response.message) !== 'undefined'){
          //user inactive
          // alert("Account inactive, contact admin")
          alert('STARTSETPROJECTS Message: ' + response.message)
          dispatch(startLogout())
          // window.location.href = "/"
          history.push('/')
      }else{
        dispatch(setProjects(response))
      }
      
    })
  };
};

export const clearProjects = () => ({
  type: 'CLEAR_PROJECT'
});
export const startclearProjects= ()=>{
  return (dispatch, getState) => {
    dispatch(clearProjects())
  }
}




// REMOVE_PROJECT
export const removeProject = ({ _id } = {}) => ({
  type: 'REMOVE_PROJECT',
  _id
});

export const startRemoveProject = ({ _id } = {}) => {
  return (dispatch, getState) => {
    // const uid = getState().auth.uid;
    // return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
      deleteProject(_id ).then(()=>{
        dispatch(removeProject({ _id }));

      })
    // });

  };
};

// EDIT_PROJECT
export const editProject = (_id, updates) => ({
  type: 'EDIT_PROJECT',
  _id,
  updates
});

export const startEditProject = (_id, updates, postType) => {
  return (dispatch, getState) => {
    // const uid = getState().auth.uid;
    // return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
      editPost(_id, updates, postType).then(()=>{
        dispatch(editProject(_id, updates));
      })
    // });
  };
};

