import {
    ADD_USER_START,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
    DELETE_USER_START,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    UPDATE_USER_START,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    SIGNUP1,
    SIGNUP2,
    SUBMIT_VALUES,
    SUBMIT_TEXT,
    SUBMIT_PROJECTS,
    UPDATE_PROJECTS0,
    UPDATE_PROJECTS1,
    UPDATE_PROJECTS2
    } from '../actions/index';
    
    const initialState = {
      error: '',
      fetchingData: false,
      loggingIn: false,
      updatingUser: false,
      addingUser: false,
      newUserFirstName:'',
      newUserLastName:'',
      newUserEmail:'',
      newUserPassword:'',
      currentUser: {},
    };
    
    const reducer = (state = initialState, action) => {
      switch (action.type) {
        case LOGIN_START:
            return {
              ...state,
              error: '',
              loggingIn: true
            };
        case LOGIN_SUCCESS:
            return {
              ...state,
              loggingIn: false,
              error: ''
            };
        case LOGIN_FAILURE:
            return {
              ...state,
              loggingIn: false,
              error: action.payload
            };
        case FETCH_DATA_START:
            return {
              ...state,
              error: '',
              fetchingData: true
            };
        case FETCH_DATA_SUCCESS:
            return {
              ...state,
              fetchingData: false,
              currentUser: action.payload
            };
        case FETCH_DATA_FAILURE:
            return {
              ...state,
              fetchingData: false,
              error: action.payload
            };
        case ADD_USER_START:
            return {
              ...state,
              addingUser: true,
            };
        case ADD_USER_SUCCESS:
            return {
              ...state,
              addingUser: false,
            };
        case ADD_USER_FAILURE:
            return {
              ...state,
              addingUser: false,
              error: action.payload
            };
        case UPDATE_USER_START:
            return {
              ...state,
              updatingUser: true,
            };
        case UPDATE_USER_SUCCESS:
            return {
              ...state,
              updatingUser: false,
              currentUser: action.payload,
            };
        case UPDATE_USER_FAILURE:
            return {
              ...state,
              updatingUser: false,
              error: action.payload[0],
              currentUser: action.payload[1]
            };
        case SIGNUP1:
            return {
              ...state, 
              newUserFirstName: action.payload[0],
              newUserLastName: action.payload[1],
            }
        case SIGNUP2:
            return {
              ...state, 
              newUserEmail: action.payload[0],
              newUserPassword: action.payload[1],
            }
        case SUBMIT_VALUES:
          return {
              ...state, 
              currentUser: {
                ...state.currentUser,
                personalvalues: [{...state.currentUser.personalvalues[0],personalvalue: action.payload[0] },{...state.currentUser.personalvalues[1],personalvalue: action.payload[1] },{...state.currentUser.personalvalues[2],personalvalue: action.payload[2] },{...state.currentUser.personalvalues[3],personalvalue: 'Unrelated to Core Values' }]
              }
          }
        case SUBMIT_TEXT:
          return {
              ...state, 
              currentUser: {
                ...state.currentUser,
                personalvalues: [{...state.currentUser.personalvalues[0],description: action.payload[0] },{...state.currentUser.personalvalues[1],description: action.payload[1] },{...state.currentUser.personalvalues[2],description: action.payload[2] },{...state.currentUser.personalvalues[3]}]
              }
          }
        case SUBMIT_PROJECTS:
          return {
              ...state, 
              currentUser: {
                ...state.currentUser,
                personalvalues: [{...state.currentUser.personalvalues[0]},{...state.currentUser.personalvalues[1]},{...state.currentUser.personalvalues[2]},{...state.currentUser.personalvalues[3], projects: action.payload}]
              }
          }
          case UPDATE_PROJECTS0:
          return {
              ...state, 
              currentUser: {
                ...state.currentUser,
                personalvalues: [{...state.currentUser.personalvalues[0],projects:[...state.currentUser.personalvalues[0].projects].concat(action.payload)},{...state.currentUser.personalvalues[1]},{...state.currentUser.personalvalues[2]},{...state.currentUser.personalvalues[3]}]
              }
          }
          case UPDATE_PROJECTS1:
          return {
              ...state, 
              currentUser: {
                ...state.currentUser,
                personalvalues: [{...state.currentUser.personalvalues[0]},{...state.currentUser.personalvalues[1],projects:[...state.currentUser.personalvalues[1].projects].concat(action.payload)},{...state.currentUser.personalvalues[2]},{...state.currentUser.personalvalues[3]}]
              }
          }
          case UPDATE_PROJECTS2:
          return {
              ...state, 
              currentUser: {
                ...state.currentUser,
                personalvalues: [{...state.currentUser.personalvalues[0]},{...state.currentUser.personalvalues[1]},{...state.currentUser.personalvalues[2],projects:[...state.currentUser.personalvalues[2].projects].concat(action.payload)},{...state.currentUser.personalvalues[3]}]
              }
          }
        default:
            return state;
      }
    };
    
    export default reducer;