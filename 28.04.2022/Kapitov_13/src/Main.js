import "./styles.css";
import React, { Component } from "react";
import SideNavigationMenu from "./SideNavigationMenu";
import TodoApp from "./TodoApp";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedType: "Все" };
  }

  callBack = (selectedType) => {
    this.setState({ selectedType: selectedType });
    console.log("In main: " + this.state.type);
    console.log("In main state: " + JSON.stringify(this.state));
  };

  render() {
    return (
      <div className="mainContainer">
        <SideNavigationMenu callbackFromParent={this.callBack} />
        <TodoApp selectedType={this.state.selectedType} />
      </div>
    );
  }
}

export default Main;
