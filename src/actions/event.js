import {createPost, getEvents} from '../helpers/requests'
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
      console.log(event);
  
      createPost(event,postType).then((response) =>{
        if(typeof (response.data.message) !== 'undefined'){
          alert(response.data.message)
        }else{
          dispatch(addEvent(response.data));
        }
      });
  
    };
  };

  // SET_PROJECTS
export const setEvents = (event) => ({
    type: 'SET_EVENT',
    event: event
  });
  
  export const startSetEvents = (projects) => {
    return (dispatch, getState) => {

        getEvents().then((response)=>{
        if(typeof (response.message) !== 'undefined'){
            //user inactive
            alert("Account inactive, contact admin")
            dispatch(startLogout())
        }else{
          dispatch(setEvents(response))
        }
        
      })
    };
  };
  