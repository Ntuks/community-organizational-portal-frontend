//  _id: Schema.Types.ObjectId title description involved poster organization orgManager
// Campaigns Reducer

const campaignsReducerDefaultState = [];

export default (state = campaignsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_CAMPAIGN':
      return [
        ...state,
        action.campaign
      ];
    case 'REMOVE_CAMPAIGN':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_CAMPAIGN':
      return state.map((campaign) => {
        if (campaign.id === action.id) {
          return {
            ...campaign,
            ...action.updates
          };
        } else {
          return campaign;
        };
      });
    case 'SET_CAMPAIGN':
      return action.campaign;
    
    case 'CLEAR_CAMPAIGN':
      return []
    default:
      return state;
  }
};
