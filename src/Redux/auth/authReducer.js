import { SET_USER } from "./authConstants";

var initialState = null;
const authReducer = (state = initialState, action) => {
  var { type, payload } = action;
  switch (type) {
    case SET_USER:
      return payload.user;

    default:
      return state;
  }
};

export default authReducer;
