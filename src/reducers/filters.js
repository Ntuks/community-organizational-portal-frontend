
// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  active: false,
  inactive: true,
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SET_ACTIVE_FILTER':
      return {
        ...state,
        active: action.active
      }
    case 'SET_INACTIVE_FILTER':
        return {
          ...state,
          inactive: action.inactive
        }
    default:
      return state;
  }
};
