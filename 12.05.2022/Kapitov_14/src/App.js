import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false, wasLoggedIn: false, login: "" };
  }
  render() {
    let message = this.state.isLoggedIn ? "You logged in" : "You logged out";
    return (
      <div className="appContaner">
        <div className="contentContainer">
          <div className="messageContainer">
            {this.state.wasLoggedIn && message}&nbsp;
          </div>
          {!this.state.isLoggedIn && (
            <div className="loginContainer">
              Login
              <input
                className="loginInput"
                type="text"
                name="login"
                onChange={(item) => this.setState({ login: item.target.value })}
              />
            </div>
          )}
          {this.state.isLoggedIn && (
            <div className="loginContainer">
              Hello, {this.state.login || <div>&nbsp;noname</div>}!
            </div>
          )}
          <div
            className="buttonContainer"
            onClick={() =>
              this.setState({
                isLoggedIn: !this.state.isLoggedIn,
                wasLoggedIn: true,
                login: this.state.isLoggedIn ? "" : this.state.login,
              })
            }
          >
            {this.state.isLoggedIn ? (
              <div className="buttonTextContainer">Log out</div>
            ) : (
              <div className="buttonTextContainer">Log in</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
