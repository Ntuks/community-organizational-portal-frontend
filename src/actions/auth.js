import {loginRequest} from '../helpers/requests'


export const login = (loginObj) => ({
    type: 'LOGIN',
    ...loginObj
  });
  
  export const startLogin = ({email,password}) => {
      //make login request and send object to action.{userid,role,userid,token}
      return loginRequest(email,password)
      
  };
  
  export const logout = () => ({
    type: 'LOGOUT'
  });
  
  export const startLogout = () => {
    return () => {
      return  //make logout request 
    };
  };
  