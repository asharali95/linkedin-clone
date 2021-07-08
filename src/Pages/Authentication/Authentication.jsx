import React, { useState } from "react";
import { connect } from "react-redux";
import { signIn, signup } from "../../Redux/auth/authActions";
import "./Authentication.css";

const Authentication = ({ signIn, signup }) => {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [name, setName] = useState("");
  var [profilePic, setProfilePic] = useState("");

  const handleSignSubmit = (e) => {
    e.preventDefault();
    var cred = {
      name,
      email,
      password,
      profilePic,
    };
    signIn(cred);
  };
  const register = (e) => {
    e.preventDefault();
    if (!name) {
      return alert("Please Enter a full name");
    }
    var cred = {
      name,
      email,
      password,
      profilePic,
    };
    signup(cred);
  };
  return (
    <div className="login">
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
        alt=""
      />

      <form onSubmit={handleSignSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full name"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          type="text"
          placeholder="Profile pic URL(optional)"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Sign in</button>
      </form>

      <p>
        Not a member?{" "}
        <span onClick={(e) => register(e)} className="login_register">
          Register now
        </span>
      </p>
    </div>
  );
};

var actions = {
  signIn,
  signup,
};
export default connect(null, actions)(Authentication);
