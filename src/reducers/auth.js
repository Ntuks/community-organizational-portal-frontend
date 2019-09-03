const defaultAuthState = {
  userid: '',
  role: '',
  organizationid: '',
  token: '',
  orgData: '',
}

export default (state = defaultAuthState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
            ...state,
            userid: action._id,
            role: action.role,
            organizationid: action.organization,
            token: action.token,
            orgData: action.orgData,
        };
      case 'LOGOUT':
        return {};
      case 'EDIT_AUTH_ORG':
        return {
          ...state,
          orgData: action.organisation
        }
      default:
        return state;
    }
  };
  