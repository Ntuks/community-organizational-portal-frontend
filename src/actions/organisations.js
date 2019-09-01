import uuid from 'uuid';

// ADD_EXPENSE
export const addOrganisation = (organisation) => ({
  type: 'ADD_EXPENSE',
  organisation
});

export const startAddOrganisation = (organisationData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = organisationData;
    const expense = { description, note, amount, createdAt };

    //push to DB 

    // return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
    //   dispatch(addExpense({
    //     id: ref.key,
    //     ...expense
    //   }));
    //});
  };
};

// REMOVE_EXPENSE
export const removeOrganisation = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveOrganisation = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
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
    const uid = getState().auth.uid;
    // return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
    //   dispatch(editOrganisation(id, updates));
    // });
  };
};

// SET_EXPENSES
export const setOrganisation = (Organisations) => ({
  type: 'SET_Organisation',
  Organisations
});

export const startSetOrganisation = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
  };
};

export const activateOrg = (id, status) => ({
  type: 'ACTIVATE_ORG',
  id,
  status
});
export const startActivateOrg = (id, status) => {
  console.log(id, 'testing')
  return (dispatch, getState) => {
    dispatch(activateOrg(id, status))
  };
};

