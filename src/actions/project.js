import {getPosts, createPost} from '../helpers/requests'

export const addProject = (project) => ({
  type: 'ADD_PROJECT',
  project: project
});

export const startAddProject = (projectData) => {
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

    createPost(project).then((response) =>{
      if(typeof (response.data.message) !== 'undefined'){
        alert(response.data.message)
      }else{
        dispatch(addProject(response.data));
      }
    });

  };
};

// REMOVE_EXPENSE
export const removeOrganisation = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveOrganisation = ({ id } = {}) => {
  return (dispatch, getState) => {
    // const uid = getState().auth.uid;
    // return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
    //   dispatch(removeOrganisation({ id }));
    // });

  };
};

// EDIT_EXPENSE
export const editOrganisation = (id, updates) => ({
  type: 'EDIT_Organisation',
  id,
  updates
});

export const startEditOrganisation = (id, updates) => {
  return (dispatch, getState) => {
    // const uid = getState().auth.uid;
    // return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
    //   dispatch(editOrganisation(id, updates));
    // });
  };
};

// SET_PROJECTS
export const setProjects = (project) => ({
  type: 'SET_PROJECT',
  project: project
});

export const startSetOrganisation = (projects) => {
  return (dispatch, getState) => {
    // const uid = getState().auth.uid;
    getPosts().then((response)=>{

      dispatch(setProjects(response))
    })
  };
};

export const activateOrg = (id, status) => ({
  type: 'ACTIVATE_OR_DEACTIVATE_ORG',
  id,
  status
});
export const startActivateOrg = (id, status) => {
  return (dispatch, getState) => {
    dispatch(activateOrg(id, status))
  };
};

