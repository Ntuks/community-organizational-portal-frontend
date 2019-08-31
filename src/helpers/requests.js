import axios from 'axios';

// let config = {
//     headers: {
//         'withCredentials': true,
//     }
//   }

axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:2876' // for POST requests
axios.defaults.withCredentials = true

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
              const statevalues  = {
                  ...response.data.orgManager,
                  token: response.data.token
              };
              axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`  // for all requests the token will now be in the header 
              
              return statevalues;
          }else if (response.data.message){
              return {message: response.data.message}
          }
          else{
              return "Error"
          }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
}


export {loginRequest}