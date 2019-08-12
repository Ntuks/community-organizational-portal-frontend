
// Get visible expenses

export default (organisations, {text}) => {
  return organisations.filter((organisation) => {
    const titleMatch = organisation.title.toLowerCase().includes(text.toLowerCase());
    const descriptionMatch = organisation.description.toLowerCase().includes(text.toLowerCase());
    const locationMatch = organisation.location.toLowerCase().includes(text.toLowerCase());

    return titleMatch||descriptionMatch||locationMatch;
  })

};
