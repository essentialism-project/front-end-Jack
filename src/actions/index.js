///////ALL AXIOS.POSTS FOLLOW THE FORMAT .put(`/users/${user.id}`, {json of what I want to change} )
////// FOR EXAMPLE: .put(`/users/${user.id}`, {username: jack, email: asdf@jack.com} )
/////.put(`/users/${user.id}`, {personalvalues: [...state.personalvalues] } )

import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (username,password) => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post('/oauth/token', `grant_type=password&username=${username}&password=${password}`, {headers: {

      // btoa is converting our client id/client secret into base64
      Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
      'Content-Type': 'application/x-www-form-urlencoded'

    }} )
    .then(res => {
      localStorage.setItem('token', res.data.access_token);
      dispatch({ type: LOGIN_SUCCESS });
      return true;
    })
    .catch(err => {
        console.log(err.response);
        dispatch({ type: LOGIN_FAILURE, payload: err.response});
    })
};

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axiosWithAuth()
    .get('/users/getcurrentuser')
    .then(res => {
      
      console.log(res.data)
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('hello', localStorage.getItem('token'))
      console.log(err.response);
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
    });
};

export const ADD_USER_START = 'ADD_USER_START';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';

export const addUser = (firstName,lastName,email,password) => dispatch => {
  dispatch({ type: ADD_USER_START });
  axios
  .post('https://essentialism-project.herokuapp.com/createnewuser', {
    "username": `${email}`,  
    "password": `${password}`,
    "userRoles": [
      {
        "role": {
          "roleid": 2,
          "name": "user"
        }
      }
    ]
    
    // "firstName": `${username}`,  
    // "lastName": `${username}`,
    // "email": `${username}`,  
    // "password": `${username}`,
  })
    .then(res => {
      localStorage.setItem('token', res.data.access_token);
      console.log('reponse', res)
      dispatch({ type: ADD_USER_SUCCESS, payload: res.data });
      return true;
    })
    .catch(err => {
      console.log('catch')
      console.log(err.response);
      dispatch({ type: ADD_USER_FAILURE, payload: err.response });
    });

    
};

export const UPDATE_USER_START = 'UPDATE_USER_START';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

export const updateUser = (user,jso) => dispatch => {
  dispatch({ type: UPDATE_USER_START });
  console.log('UPDATING THIS USER:' , user)
  axiosWithAuth()
  .put(`/users/user/${user.userid}`, jso )
    .then(res => {
      console.log(res.data)
      dispatch({ type: UPDATE_USER_SUCCESS, payload: user });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: UPDATE_USER_FAILURE, payload: [err.response,user] });
    });
};

export const DELETE_USER_START = 'DELETE_USER_START';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';

export const deleteUser = (id) => dispatch => {
  dispatch({ type: DELETE_USER_START });
  console.log('DELETING USER')
  axiosWithAuth()
  .delete(`/users/user/${id}`)
    .then(res => {
      console.log(res.data)
      dispatch({ type: DELETE_USER_SUCCESS,});
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: DELETE_USER_FAILURE, payload: [err.response] });
    });
};

export const SIGNUP1 = `SIGNUP1`;

export const signup1 = creds => dispatch => {
  dispatch({ type: SIGNUP1, payload: creds})
}

export const SIGNUP2 = `SIGNUP2`;

export const signup2 = creds2 => dispatch => {
  dispatch({ type: SIGNUP2, payload: creds2})
}

export const SUBMIT_VALUES = `SUBMIT_VALUES`;

export const submitValues = values => dispatch => {
  console.log('payload: ',values)
  dispatch({ type: SUBMIT_VALUES, payload: values})
}

export const SUBMIT_TEXT = `SUBMIT_TEXT`;

export const submitText = textBits => dispatch => {
  console.log('payload: ', textBits)
  dispatch({ type: SUBMIT_TEXT, payload: textBits})
}

export const SUBMIT_PROJECTS = `SUBMIT_PROJECTS`;

export const submitProjects = projects => dispatch => {
  console.log('payload: ', projects)
  dispatch({ type: SUBMIT_PROJECTS, payload: projects})
}

export const UPDATE_PROJECTS0 = `UPDATE_PROJECTS0`;

export const updateProjects0 = (projects) => dispatch => {
  console.log('payload: ', projects)
  dispatch({ type: UPDATE_PROJECTS0, payload: projects})
}

export const UPDATE_PROJECTS1 = `UPDATE_PROJECTS1`;

export const updateProjects1 = (projects) => dispatch => {
  console.log('payload: ', projects)
  dispatch({ type: UPDATE_PROJECTS1, payload: projects})
}

export const UPDATE_PROJECTS2 = `UPDATE_PROJECTS2`;

export const updateProjects2 = (projects) => dispatch => {
  console.log('payload: ', projects)
  dispatch({ type: UPDATE_PROJECTS2, payload: projects})
}