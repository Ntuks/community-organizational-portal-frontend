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
                return statevalues;
          }else if (response.data.message){
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


export {loginRequest}