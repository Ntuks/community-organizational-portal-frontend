// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

export const setActiveFilter = (active=false) => ({
  type: 'SET_ACTIVE_FILTER',
  active
});

export const setInactiveFilter = (inactive=true) => ({
  type: 'SET_INACTIVE_FILTER',
  inactive
});


