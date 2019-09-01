
// Get visible expenses

const OrganizationsBySearch = (organisations, {text}) => {
  return organisations.filter((organisation) => {
    const titleMatch = organisation.title.toLowerCase().includes(text.toLowerCase());
    const descriptionMatch = organisation.description.toLowerCase().includes(text.toLowerCase());
    const locationMatch = organisation.location.toLowerCase().includes(text.toLowerCase());
    return titleMatch||descriptionMatch||locationMatch;
  })
};

const OrganizationsByActiveState = (organisations, { active, inactive }) => {
  console.log(organisations);
  if(active == true && inactive == true) {
    console.log('1')
    return [...organisations]
  }
  else if(inactive == true && active == false) {
    console.log('2')
    let test = organisations.filter((organisation) => organisation.status != 'active')
    console.log('test',test)
    return organisations.filter((organisation) => organisation.status != 'active')
  }
  else if(active == true && inactive == false) {
    console.log('3')
    let test = organisations.filter((organisation) => organisation.status != 'inactive')
    console.log('test',test)
    return organisations.filter((organisation) => organisation.status != 'inactive')
  }
  else {
    return []
  }
};

export {
  OrganizationsBySearch,
  OrganizationsByActiveState
}
