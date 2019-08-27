import Organization from './models/organizationClass';
//title, date, description, location, imagelink, tagline,areasOfEngagement, pboNpoNum, facebookLink
const SPCA = new Organization(
  "SPCA",
  "29-01-1997",
  "Society for the Prevention of Cruelty to Animals - Our mission to prevent cruelty to animals.",
  "Rodebosch",
  "/static/images/generic/spca.jpg",
  "Our mission to prevent cruelty to animals. This is done through education, law enforcement, veterinary care services an Animal Care Centre, Horse Care and Farmyard Unit, and Wildlife Facility.",
  "Animals, Safety, Vetenary",
  "PBO-092345",
  null
  
)

const CANSA = new Organization(
  "CANSA",
  "12-06-1897",
  "Cancer Association of South Africa Cape Metro - Our mission to help people with cancer.",
  "Observatory",
  "/static/images/generic/cansa.svg",  
  "Cancer Association of South Africa Cape Metro - Our mission to help people with cancer.",
  "Cancer, Chemotherapy, Support, Counselling",
  null,
  null,
  null
)

const OSID = new Organization(
  "Observatory Improvement District",
  "16-02-1943",
  "Develop and sustain a safer, cleaner and smarter public space throughout Observatory.",
  "Observatory",
  "/static/images/generic/obsid.png",
  "Develop and sustain a safer, cleaner and smarter public space throughout Observatory.",
  null,
  null,
  null
) 

const WCFID = new Organization(
  "Western Cape Forum for Intellectual Disability",
  "03-11-1923",
  "Develop and advance the lives of people with intellectual disabilities.",
  "Mowbray",
  "/static/images/generic/wcfid.png",
  "Develop and advance the lives of people with intellectual disabilities.",
  null,
  null,
  null
)


// OrganisationDetails Reducer

const organisationsReducerDefaultState = [
  SPCA.getObject(),
  CANSA.getObject(),
  OSID.getObject(),
  WCFID.getObject()
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
