export default (state = {}, action) => {
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
      default:
        return state;
    }
  };
  