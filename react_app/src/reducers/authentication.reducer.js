import { userConstants } from '../actions/constants';

let jwt = localStorage.getItem('token');
const initialState = (jwt)? { loggedIn: true } : { loggedIn: false, };

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggedIn: true,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loggedIn: false,
      };
    case userConstants.LOGOUT:
      return {
        loggedIn: false,
      };
    default:
      return state
  }
}