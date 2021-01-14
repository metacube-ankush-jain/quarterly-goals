import React, { Component } from "react";
import "./App2.css";
import UserProfile from "./UserProfile/UserProfile";
import ShowUserProfile from "./ShowUserProfile/ShowUserProfile";

class App2 extends Component {

  state = {
    userProfile: {
      name:'',
      age: '',
      email: '',
      phoneNumber: '',
      address:'',
      gender: '',
      isFormSubmitted: false
    },
    
  };

  inputChangedHandler = ( event) => {
    const userProfile = {
      ...this.state.userProfile
    };
    userProfile[event.target.id] = event.target.value;
    this.setState( {userProfile: userProfile} );
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    const userProfile = {
      ...this.state.userProfile
    };
    userProfile['isFormSubmitted'] = true;
    this.setState( {userProfile: userProfile} );
  }

  onResetHandler= () => {
    this.setState({userProfile: {
      name:'',
      age: '',
      email: '',
      phoneNumber: '',
      address:'',
      gender: '',
      isFormSubmitted: false
    }});
  }

  render() {
    return (
      <div>
        { !this.state.userProfile.isFormSubmitted ?
        <UserProfile reset={() => this.onResetHandler()} submit={(event) => this.onSubmitHandler(event)} changed={(event) => this.inputChangedHandler(event)} userProfile={this.state.userProfile}/>
        : <div><ShowUserProfile  userProfile={this.state.userProfile} reset={() => this.onResetHandler()}  /></div>
    }

      </div>
    );
  }
}

export default App2;
