import axios from 'axios';

// let config = {
//     headers: {
//         'withCredentials': true,
//     }
//   }

axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:2876' // for POST requests
axios.defaults.withCredentials = true //ensures all credentials are passed.

function loginRequest(email,password){

    return axios.post(
        'http://localhost:2876/login', 
        {
            email,
            password
        },
        //config settings object
        )
      .then(function (response) {
          
          if (response.data.orgManager){
              let statevalues  = {
                  ...response.data.orgManager,
                  token: response.data.token,
              };
              
                //axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`  // for all post requests the token will now be in the header 
                
                // sets cookie in header for all 
                axios.defaults.headers.common['set-cookie'] = response.data.token; 
                //console.log(statevalues)
                return statevalues;
          }else if(response.data.role){
                let statevalues  = {
                    ...response.data,
                    token: response.data.token,
                };
                //console.log(statevalues)
                return statevalues;
          }
          else if (response.data.message){
              return {message: response.data.message}
          }
          else{
              return {error: "Error"}
          }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
}

function getOrganisation(orgId){
                    // Trying to find organisation data to load organisation page.

                //Get request to load organisation data using /:orgToken 
                return axios.get(`http://localhost:2876/api/v1/organization/${orgId}`).then((response)=>{ 
                    const orgData =  response.data;  // set this to the store for the organisation logged in 
                   return orgData
                })
                
                //Get request to load organisation data using /?var=x - querystring
                //   axios.get(`http://localhost:2876/api/v1/organization/`,{
                //   params: {
                //       orgToken: statevalues.organization
                //     },
                //   }).then((response)=>{ 
                //   console.log(response);   
                // })
}

export {loginRequest, getOrganisation}