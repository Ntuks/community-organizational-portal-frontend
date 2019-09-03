import {createPost} from '../helpers/requests'

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
          alert(response.data.message)
        }else{
          dispatch(addCampaign(response.data));
        }
      });
  
    };
  };