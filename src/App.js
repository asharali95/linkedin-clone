import "./App.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import { firebaseAuthListener } from "./Redux/auth/authActions";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Authentication from "./Pages/Authentication/Authentication";

function App({ firebaseAuthListener, auth }) {
  useEffect(() => {
    firebaseAuthListener();
  }, [firebaseAuthListener]);
  return (
    <div className="app">
      <Switch>
        <Route path="/" component={auth ? Home : Authentication} exact />
      </Switch>
    </div>
  );
}

var mapState = (state) => ({
  auth: state.auth,
});

var actions = {
  firebaseAuthListener,
};

export default connect(mapState, actions)(App);
