import React from "react";

import "./ShowUserProfile.css";

const showUserProfile = (props) => {
  return (
    <div className="showUserProfile">
      <form>
        <h1>User Registration Form</h1>
        <p>Your name:</p>
        <span>{props.userProfile.name}</span>
        <p>Your age:</p>
        <span>{props.userProfile.age}</span>
        <p>Your email:</p>
        <span>{props.userProfile.email}</span>
        <p>Your phone number:</p>
        <span> {props.userProfile.phoneNumber}
        </span>
        <p>Your address:</p>
        <span>{props.userProfile.address}</span>
        <div>
          <p>Your gender:</p>
          <span>{props.userProfile.gender}</span>
        </div>
        <br />
        <button onClick={props.reset}>Back</button>
      </form>
    </div>
  );
};

export default showUserProfile;
