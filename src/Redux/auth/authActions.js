import { auth, firestore, serverTimeStamp } from "../../Firebase/Firebase";
import { REMOVE_USER, SET_USER } from "./authConstants";
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
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  };

export var signup =
  ({ name, email, password, profilePic }) =>
  async () => {
    try {
      // create user on firebase auth section
      var {
        user: { uid },
      } = await auth.createUserWithEmailAndPassword(email, password);
      console.log(uid);
      var userInfo = {
        name,
        email,
        profilePic,
        createdAt: serverTimeStamp(),
      };
      //set user data to firestore
      await firestore.collection("users").doc(uid).set(userInfo);
    } catch (error) {
      return alert(error.message);
    }
  };

export var signOut = () => async () => {
  try {
    // signout user from firebase auth
    await auth.signOut();
  } catch (error) {
    return alert(error.message);
  }
};
export var firebaseAuthListener = () => async (dispatch) => {
  try {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        var { uid } = user;
        var query = await firestore.collection("users").doc(uid).get();
        var { name, description, email, profilePic } = query.data();
        var userDataForState = {
          uid,
          name,
          description,
          userEmail: email,
          profilePic,
        };
        dispatch(setUser(userDataForState));
      } else {
        dispatch(removeUser());
      }
    });
  } catch (error) {
    console.log(error);
  }
};
