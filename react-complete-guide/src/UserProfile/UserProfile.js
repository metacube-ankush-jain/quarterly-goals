import React from "react";

import "./UserProfile.css";

const userProfile = (props) => {
  return (
    <div className="userProfile">
      <form>
        <h1>User Registration Form</h1>
        <p>Please Enter your name:</p>
        <input
          id="name"
          onChange={props.changed}
          type="text"
          value={props.userProfile.name}
        />
        <p>Please Enter your age:</p>
        <input
          id="age"
          onChange={props.changed}
          type="text"
          value={props.userProfile.age}
        />
        <p>Please Enter your email:</p>
        <input
          onChange={props.changed}
          type="text"
          id="email"
          value={props.userProfile.email}
        />
        <p>Please Enter your phone number:</p>
        <input
          onChange={props.changed}
          id="phoneNumber"
          type="text"
          value={props.userProfile.phoneNumber}
        />
        <p>Please Enter your address:</p>
        <textarea
          id="address"
          onChange={props.changed}
          value={props.userProfile.address}
        ></textarea>
        <div>
          <p>Please select your gender:</p>
          <input
            type="radio"
            value="Male"
            id="gender"
            name="gender"
            onChange={props.changed}
          />
          Male
          <input
            type="radio"
            value="Female"
            id="gender"
            name="gender"
            onChange={props.changed}
          />
          Female
        </div>
        <br />
        <button onClick={props.submit}>Submit</button>
        <button onClick={props.reset}>Reset</button>
      </form>
    </div>
  );
};

export default userProfile;
