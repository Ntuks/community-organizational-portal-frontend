import {loginRequest,getOrganisation} from '../helpers/requests'


export const login = (loginObj) => ({
    type: 'LOGIN',
    ...loginObj
  });
  
  export const startLogin = ({email,password}) => {
      //make login request and send object to action.{userid,role,userid,token}
      
    return (dispatch, getState)=>{
        return loginRequest(email,password).then((loginState)=>{
            
            return getOrganisation(loginState.organization).then((orgData)=>{

                loginState = {
                    ...loginState,
                    orgData
                } 
                dispatch(login(loginState)) ;
                localStorage.setItem('user', JSON.stringify(loginState))
                return loginState
            }).finally((loginState2)=>{
                return loginState2
            })

        })
    }
      
  };
  
  export const logout = () => ({
    type: 'LOGOUT'
  });
  
  export const startLogout = () => {
    return (dispatch) => {
        localStorage.removeItem('user')
        return dispatch(logout())  //make logout request 
    };
  };
  