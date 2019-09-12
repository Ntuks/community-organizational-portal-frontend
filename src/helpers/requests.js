import axios from "axios";

// let config = {
//     headers: {
//         'withCredentials': true,
//     }
//   }

axios.defaults.headers.post["Access-Control-Allow-Origin"] =
  "http://localhost:7900"; // for POST requests
axios.defaults.withCredentials = true; //ensures all credentials are passed.

function loginRequest(email, password) {
  return axios
    .post(
      "http://localhost:7900/auth/signin",
      {
        email,
        password
      }
      //config settings object
    )
    .then(function(response) {
      if (response.data.orgManager) {
        let statevalues = {
          ...response.data.orgManager,
          token: response.data.token
        };

        //axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`  // for all post requests the token will now be in the header

        // sets cookie in header for all
        axios.defaults.headers.common["set-cookie"] = response.data.token;
        //console.log(statevalues)
        return statevalues;
      } else if (response.data.role) {
        let statevalues = {
          ...response.data,
          token: response.data.token
        };
        //console.log(statevalues)
        return statevalues;
      } else if (response.data.message) {
        return { message: response.data.message };
      } else {
        return { error: "Error" };
      }
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
}

function getOrganisation(orgId) {
  // Trying to find organisation data to load organisation page.

  //Get request to load organisation data using /:orgToken
  return axios
    .get(`http://localhost:7900/api/v1/organizations/${orgId}`)
    .then(response => {
      const orgData = response.data; // set this to the store for the organisation logged in
      return orgData;
    });

  //Get request to load organisation data using /?var=x - querystring
  //   axios.get(`http://localhost:7900/api/v1/organizations/`,{
  //   params: {
  //       orgToken: statevalues.organizations
  //     },
  //   }).then((response)=>{
  //   console.log(response);
  // })
}

function registerRequest({ name, surname, email, password }) {
  return axios
    .post("http://localhost:7900/auth/signup", {
      name,
      surname,
      email,
      password
    })
    .then(function(response, error) {
      if (error) {
        alert("Register Error:" + error);
      } else {
        return response;
      }
    });
}

function updateOrganisation(orgId, organisation) {
  console.log("fockol", orgId, organisation);
  // Trying to find organisation data to load organisation page.
  //Get request to load organisation data using /:orgToken
  const objToPut = {
    ...organisation
  };
  console.log(objToPut);
  return axios
    .patch(`http://localhost:7900/api/v1/organizations/${orgId}`, objToPut)
    .then(response => {
      console.log("focko2l", response.data);
      const orgData = response.data; // set this to the store for the organisation logged in
      return orgData;
    })
    .catch(error => {
      console.log("bjhbhjkbjk", error);
    });
}

function getProjects() {
  return axios.get(`http://localhost:7900/api/v1/projects`).then(response => {
    const postData = response.data; // set this to the store for the organisation logged in
    return postData;
  });
}
function getCampaigns() {
  return axios.get(`http://localhost:7900/api/v1/campaigns`).then(response => {
    const postData = response.data; // set this to the store for the organisation logged in
    return postData;
  });
}
function getEvents() {
  return axios.get(`http://localhost:7900/api/v1/events`).then(response => {
    const postData = response.data; // set this to the store for the organisation logged in
    return postData;
  });
}

function getAllOrganisations() {
  return axios
    .get(`http://localhost:7900/api/v1/organizations/public-data`)
    .then(response => {
      const orgData = response.data; // set this to the store for the organisation logged in
      console.log("successfully receiving data...", orgData);
      return orgData;
    });
}

//need a get organisation id posts, events and projects route

function createPost(postObj, postType) {
  
    if (postType === "Project") {
      return axios
        .post("http://localhost:7900/api/v1/projects", postObj)
        .then(function(response, error) {
          if (error) {
            alert("Create Post Error:" + error);
          } else {
            return response;
          }
        });
    } else if (postType === "Campaign") {
      return axios
        .post("http://localhost:7900/api/v1/campaigns", postObj)
        .then(function(response, error) {
          if (error) {
            alert("Campaign Error:" + error);
          } else {
            return response;
          }
        });
    } else if (postType === "Event") {
      //comment
      return axios
        .post("http://localhost:7900/api/v1/events", postObj)
        .then(function(response, error) {
          if (error) {
            alert("Event Message:" + error);
          } else {
            return response;
          }
        });
    }


  //no default
}

function editPost(_id, updates, postType) {
  if (postType === "Project") {
    return axios
      .patch(`http://localhost:7900/api/v1/projects/${_id}`, updates)
      .then(function(response, error) {
        if (error) {
          alert("Create Post Error:" + error);
        } else {
          return response;
        }
      });
  } else if (postType === "Campaign") {
    return axios
      .patch(`http://localhost:7900/api/v1/campaigns/${_id}`, updates)
      .then(function(response, error) {
        if (error) {
          alert("Campaign Error:" + error);
        } else {
          return response;
        }
      });
  } else if (postType === "Event") {
    //comment
    return axios
      .patch(`http://localhost:7900/api/v1/events/${_id}`, updates)
      .then(function(response, error) {
        if (error) {
          alert("Event Message:" + error);
        } else {
          return response;
        }
      });
  }
  //default
  return axios
    .patch(`http://localhost:7900/api/v1/campaigns/${_id}`, updates)
    .then(function(response, error) {
      if (error) {
        alert(error);
      } else {
        return response;
      }
    });
}

function deleteProject(_id) {
  return axios
    .delete(`http://localhost:7900/api/v1/projects/${_id}`)
    .then(response => {
      const postData = response.data; // set this to the store for the organisation logged in
      return postData;
    });
}
function deleteCampaign(_id) {
  return axios
    .delete(`http://localhost:7900/api/v1/campaigns/${_id}`)
    .then(response => {
      const postData = response.data; // set this to the store for the organisation logged in
      return postData;
    });
}
function deleteEvent(_id) {
  return axios
    .delete(`http://localhost:7900/api/v1/events/${_id}`)
    .then(response => {
      const postData = response.data; // set this to the store for the organisation logged in
      return postData;
    });
}

export {
  loginRequest,
  getOrganisation,
  registerRequest,
  getProjects,
  getCampaigns,
  createPost,
  updateOrganisation,
  getAllOrganisations,
  getEvents,
  deleteProject,
  deleteCampaign,
  deleteEvent,
  editPost
};
