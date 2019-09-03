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

function registerRequest({name, surname,email,password}){
    return axios.post(
        'http://localhost:2876/register', 
        {   
            name,
            surname,
            email,
            password
        }
        )
      .then(function (response, error) {
        if(error){
            alert(error)
          }else{
            return response
          }
      })
}
function getProjects(){
    return axios.get(`http://localhost:2876/api/v1/projects`).then((response)=>{ 
        const postData =  response.data;  // set this to the store for the organisation logged in 
       return postData
    })
}
function getCampaigns(){
    return axios.get(`http://localhost:2876/api/v1/campaigns`).then((response)=>{ 
        const postData =  response.data;  // set this to the store for the organisation logged in 
       return postData
    })
}


function createPost(postObj,postType){
    switch(postType){
        case "Project":
            return axios.post(
                'http://localhost:2876/api/v1/projects', 
                postObj
                )
            .then(function (response, error) {
                if(error){
                    alert(error)
                }else{
                    return response
                }
            })
            break ;
        case "Campaign": 
            return axios.post(
                'http://localhost:2876/api/v1/campaigns', 
                postObj
                )
            .then(function (response, error) {
                if(error){
                    alert(error)
                }else{
                    return response
                }
            })
            break ;

        //no default
    }

}

export {loginRequest, getOrganisation, registerRequest,getProjects, createPost}

