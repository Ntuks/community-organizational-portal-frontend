import {createPost, getCampaigns} from '../helpers/requests'
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

  // SET_PROJECTS
export const setCampaigns = (campaign) => ({
    type: 'SET_CAMPAIGN',
    campaign: campaign
  });
  
  export const startSetCampaigns = (projects) => {
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
  