import React, { Component } from "react";
import "./TodoApp.css";

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      inputValue: "",
    };
  }

  render() {
    return (
      <div className="todoAppContainer">
        <div className="todoAppItemContainer">
          <div className="todoAppAdderLabel">Add todo</div>
          <div className="todoAppInputContainer">
            <input
              className="todoAppInput"
              placeholder="Add new todo list item"
              value={this.state.inputValue}
              onChange={({ target: value }) => {
                this.setState({ inputValue: value.value });
              }}
              onKeyDown={({ key }) => {
                if (key === "Enter")
                  this.setState({
                    data: [
                      ...this.state.data,
                      { key: Date.now(), value: this.state.inputValue },
                    ],
                    inputValue: "",
                  });
              }}
            />
            <button
              className="todoAppInputButton"
              onClick={() => {
                this.setState({
                  data: [
                    ...this.state.data,
                    { key: Date.now(), value: this.state.inputValue },
                  ],
                  inputValue: "",
                });
              }}
            >
              Add
            </button>
          </div>
        </div>
        <TodoList data={this.state.data} />
      </div>
    );
  }
}

class TodoList extends Component {
  render() {
    return (
      <div className="todoAppItemContainer">
        {this.props.data.map((item) => (
          <div key={item.key}>{item.value}</div>
        ))}
      </div>
    );
  }
}
