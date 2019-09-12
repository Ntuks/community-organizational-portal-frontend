import {createPost, getEvents,editPost, deleteEvent} from '../helpers/requests'
import {startLogout } from './auth'

export const addEvent = (event) => ({
    type: 'ADD_EVENT',
    event: event
  });
  


export const startAddEvent = (eventData,postType) => {
    return (dispatch, getState) => {
      // const uid = getState().auth.uid;
      const {
        title = '',
        description = '',
        location = '',
        time = '',
        date = '',
        poster = '',
      } = eventData;
      const event = { title, description, location , date , time ,poster };
      
      //push to DB 
      //console.log(event);
  
      createPost(event,postType).then((response) =>{
        if(typeof (response.data.message) !== 'undefined'){
          alert('Event Message:' +response.data.message)
        }else{
          dispatch(addEvent(response.data));
        }
      });
  
    };
  };

  // SET_EVENTS
export const setEvents = (event) => ({
    type: 'SET_EVENT',
    event: event
  });
  
  export const startSetEvents = (events) => {
    return (dispatch, getState) => {

        getEvents().then((response)=>{
        if(typeof (response.message) !== 'undefined'){
            //user inactive
            // alert("Account inactive, contact admin")
            dispatch(startLogout())
        }else{
          dispatch(setEvents(response))
        }
        
      })
    };
  };

  export const clearEvents = () => ({
    type: 'CLEAR_EVENT',
  });
  
  export const startclearEvents= ()=>{
    return (dispatch, getState) => {
      dispatch(clearEvents())
    }
  }

  // REMOVE_EVENT
export const removeEvent = ({ _id } = {}) => ({
  type: 'REMOVE_EVENT',
  _id
});

export const startRemoveEvent = ({ _id } = {}) => {
  return (dispatch, getState) => {
    // const uid = getState().auth.uid;
    // return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
      deleteEvent(_id ).then(()=>{
        dispatch(removeEvent({ _id }));
        
      })
    // });

  };
};

// EDIT_EVENT
export const editEvent = (_id, updates) => ({
  type: 'EDIT_EVENT',
  _id,
  updates
});

export const startEditEvent = (_id, updates, postType) => {
  return (dispatch, getState) => {
    // const uid = getState().auth.uid;
    // return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
      editPost(_id, updates, postType).then(()=>{
      dispatch(editEvent(_id, updates));
      })
    // });
  };
};
