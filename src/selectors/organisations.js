
// Get visible expenses

export default (organisations, {text}) => {
  return organisations.filter((organisation) => {
    const textMatch = organisation.description.toLowerCase().includes(text.toLowerCase());

    return textMatch;
  })

};
