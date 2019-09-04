import { bool } from "prop-types";

// Get visible expenses

const OrganizationsBySearch = (organisations, {text}) => {
  if(typeof(text) !== undefined) {
    text = text && text.trim()
    let words = text.split(" ");
    //loops through each word in text
    let master = [];
    words.forEach((word) =>{
      //loops through organisation object with the word being searched
        let wordMatches = organisations.filter((organisation) => {
        //returns an object of all matches between organisation and word.
        const titleMatch = organisation.title.toLowerCase().includes(word.toLowerCase());
        const descriptionMatch = organisation.description.toLowerCase().includes(word.toLowerCase());
        const locationMatch = organisation.location.toLowerCase().includes(word.toLowerCase());
        const taglineMatch = organisation.tagline.toLowerCase().includes(word.toLowerCase());
        return titleMatch||descriptionMatch||locationMatch||taglineMatch;
      })
  
      
      wordMatches.forEach((wordMatch)=>{
        //for each wordMatch, filter and only return matches that havent already been matched.
        //console.log("wordmatch: ",wordMatch)
        if(master.length>0){
          let exists = false;
          master.forEach((wordInMaster)=>{
  
            if (isEquivalent(wordInMaster,wordMatch) ){
              //Flag if found in master
              exists = true
            }else{
             ///do nothing if word not found master
            }
  
          })
          if (!exists) {
            //if not found in master, add to master
            master.push(wordMatch);
            exists = true;
          }
  
        }else if(master.length === 0){
          // if master is empty, then assign all word matches
          //console.log(wordMatches)
          master = master.concat(wordMatches)
        }
  
      })
  
      
    })
    return master;
  }
  return;
  
  //checking for exact match and placing at top
  //incomplete
  
};

const OrganizationsByActiveState = (organisations, { active, inactive }) => {
  console.log(organisations);
  if(active === true && inactive === true) {
    return [...organisations]
  }
  else if(inactive === true && active === false) {
    return organisations.filter((organisation) => organisation.status !== 'active')
  }
  else if(active === true && inactive === false) {
    return organisations.filter((organisation) => organisation.status !== 'inactive')
  }
  else {
    return []
  }
};

export {
  OrganizationsBySearch,
  OrganizationsByActiveState
}


function isEquivalent(a, b) {
  // Create arrays of property names
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  // If number of properties is different,
  // objects are not equivalent
  if (aProps.length != bProps.length) {
      return false;
  }

  for (var i = 0; i < aProps.length; i++) {
      var propName = aProps[i];

      // If values of same property are not equal,
      // objects are not equivalent
      if (a[propName] !== b[propName]) {
          return false;
      }
  }

  // If we made it this far, objects
  // are considered equivalent
  return true;
}
