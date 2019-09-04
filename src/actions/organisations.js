import { updateOrganisation, getAllOrganisations } from '../helpers/requests';

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

// SET_EXPENSES
export const setOrganisation = (organisations) => ({
  type: 'SET_ORG',
  organisations
});

export const startSetOrganisation = () => {
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
    dispatch(activateOrg(id, status))
  };
};

