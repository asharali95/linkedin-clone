import { auth, firestore } from "../../Firebase/Firebase";
import { REMOVE_USER, SET_USER } from "./authConstants";
import history from "../../history/history";
export var setUser = (user) => async (dispatch) => {
  try {
    dispatch({
      type: SET_USER,
      payload: {
        user,
      },
    });
  } catch (error) {}
};
export var removeUser = () => ({
  type: REMOVE_USER,
});

export var signIn =
  ({ email, password }) =>
  async () => {
    try {
      // console.log(cred)
      await auth.signInWithEmailAndPassword(email, password);
      //navigate to home page
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

export var signOut = () => async () => {
  try {
    // signout user from firebase auth
    await auth.signOut();
  } catch (error) {
    console.log(error);
  }
};
export var firebaseAuthListener = () => async (dispatch) => {
  try {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        var { uid } = user;
        var query = await firestore.collection("users").doc(uid).get();
        var { fullName, email } = query.data();
        var userDataForState = {
          fullName,
          userEmail: email,
          uid,
        };
        dispatch(setUser(userDataForState));
      } else {
        dispatch(removeUser());      }
    });
  } catch (error) {
    console.log(error);
  }
};
