//  _id: Schema.Types.ObjectId title description involved poster organization orgManager
// Projects Reducer

const projectsReducerDefaultState = [];

export default (state = projectsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [
        ...state,
        action.project
      ];
    case 'REMOVE_PROJECT':
      return state.filter(({ _id }) => _id !== action._id);
    case 'EDIT_PROJECT':
      return state.map((project) => {
        if (project._id === action._id) {
          return {
            ...project,
            ...action.updates
          };
        } else {
          return project;
        };
      });
    case 'SET_PROJECT':
      return action.project;

    case 'CLEAR_PROJECT':
      return []
    default:
      return state;
  }
};
