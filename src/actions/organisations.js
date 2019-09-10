import { updateOrganisation, getAllOrganisations } from '../helpers/requests';

// SET_EXPENSES
export const setOrganisation = (organisations) => ({
  type: 'SET_ORG',
  organisations
});

export const startSetOrganisation = () => {
  console.log('running startSetOrganisation');
  return (dispatch, getState) => {
    getAllOrganisations()
      .then((orgs) => {
        dispatch(setOrganisation(orgs))
      })
      .catch(error => console.log('The following error occured:', error))
  };
};

export const activateOrg = (id, status) => ({
  type: 'ACTIVATE_OR_DEACTIVATE_ORG',
  id,
  status
});
export const startActivateOrg = (id, status) => {
  return (dispatch, getState) => {
    updateOrganisation(id, { status })
      .then(org => {
        dispatch(activateOrg(id, status))
      })
      .catch(error => console.log('activateOrganisation - updateAPI error', error))
    
  };
};

