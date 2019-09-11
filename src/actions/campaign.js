import {createPost, getCampaigns, editPost, deleteCampaign} from '../helpers/requests'
import {startLogout } from './auth'

export const addCampaign = (campaign) => ({
    type: 'ADD_CAMPAIGN',
    campaign: campaign
  });
  


export const startAddCampaign = (campaignData,postType) => {
    return (dispatch, getState) => {
      // const uid = getState().auth.uid;
      const {
        title = '',
        description = '',
        location = '',
        time = '',
        duration = '',
        poster = '',
      } = campaignData;
      const campaign = { title, description, location , duration , time ,poster };
      
      //push to DB 
      console.log(campaign);
  
      createPost(campaign,postType).then((response) =>{
        if(typeof (response.data.message) !== 'undefined'){
          alert('Campaign Message:' + response.data.message)
        }else{
          dispatch(addCampaign(response.data));
        }
      });
  
    };
  };

  // SET_CAMPAIGNS
export const setCampaigns = (campaign) => ({
    type: 'SET_CAMPAIGN',
    campaign: campaign
  });
  
  export const startSetCampaigns = (campaigns) => {
    return (dispatch, getState) => {

        getCampaigns().then((response)=>{
        if(typeof (response.message) !== 'undefined'){
            //user inactive
            // alert("Account inactive, contact admin")
            dispatch(startLogout())
        }else{
          dispatch(setCampaigns(response))
        }
        
      })
    };
  };
  
  export const clearCampaigns = () => ({
    type: 'CLEAR_CAMPAIGN'
  });
  
  export const startclearCampaigns= ()=>{
    return (dispatch, getState) => {
      dispatch(clearCampaigns())
    }
  }
  
  // REMOVE_CAMPAIGN
export const removeCampaign = ({ _id } = {}) => ({
  type: 'REMOVE_CAMPAIGN',
  _id
});

export const startRemoveCampaign = ({ _id } = {}) => {
  return (dispatch, getState) => {
    // const uid = getState().auth.uid;
    // return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
      deleteCampaign(_id ).then(()=>{
        dispatch(removeCampaign({ _id }));
      })
    // });

  };
};

// EDIT_CAMPAIGN
export const editCampaign = (_id, updates) => ({
  type: 'EDIT_CAMPAIGN',
  _id,
  updates
});

export const startEditCampaign = (_id, updates, postType) => {
  return (dispatch, getState) => {
    // const uid = getState().auth.uid;
    // return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
      editPost(_id, updates, postType).then(()=>{
        dispatch(editCampaign(_id, updates));
      })
    // });
  };
};
