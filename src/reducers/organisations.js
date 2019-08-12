// OrganisationDetails Reducer

const organisationsReducerDefaultState = [
  {
    title: "SPCA",
    date: "29-01-1997",
    description: "Society for the Prevention of Cruelty to Animals - Our mission to prevent cruelty to animals.",
    location: "Rodebosch",
    imagelink: "/static/images/generic/spca.jpg"
  },
  {
    title: "CANSA",
    date: "12-06-1897",
    description: "Cancer Association of South Africa Cape Metro - Our mission to help people with cancer.",
    location: "Observatory",
    imagelink: "/static/images/generic/cansa.svg"
  },
  {
    title: "Observatory Improvement District",
    date: "16-02-1943",
    description: "Develop and sustain a safer, cleaner and smarter public space throughout Observatory.",
    location: "Observatory",
    imagelink: "/static/images/generic/obsid.png"    
  },
  {
    title: "Western Cape Forum for Intellectual Disability",
    date:  "03-11-1923",
    description: "Develop and advance the lives of people with intellectual disabilities.",
    location: "Mowbray",
    imagelink: "/static/images/generic/wcfid.png"
  }
];

export default (state = organisationsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_ORG':
      return [
        ...state,
        action.organisation
      ];
    case 'REMOVE_ORG':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_ORG':
      return state.map((organisation) => {
        if (organisation.id === action.id) {
          return {
            ...organisation,
            ...action.updates
          };
        } else {
          return organisation;
        };
      });
    case 'SET_ORG':
      return action.organisations;
    default:
      return state;
  }
};
