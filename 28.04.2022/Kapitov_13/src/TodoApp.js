import React from "react";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "", selectedType: typesData[0].value };
    this.handleChange = this.handleChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="todoAppContainer">
        <TodoList
          items={this.state.items}
          selectedType={this.props.selectedType}
        />
        <form onSubmit={this.handleSubmit} className="formContainer">
          <label htmlFor="new-todo">Добавьте дело</label>
          <input
            className="formTextInput"
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
            autoFocus
          />
          <div className="typesContainer">
            {typesData.map((item) => (
              <label key={item.key}>
                <input
                  type="radio"
                  checked={this.state.selectedType === item.value}
                  name="type"
                  value={item.value}
                  onChange={this.handleTypeChange}
                />
                {item.value}
              </label>
            ))}
          </div>
          <button className="submitButton">Добавить</button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleTypeChange(e) {
    this.setState({ selectedType: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      type: this.state.selectedType,
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div className="todoListContainer">
        {this.props.items
          .filter(
            (item) =>
              this.props.selectedType === item.type ||
              this.props.selectedType === "Все"
          )
          .map((item) => (
            <div className="todoListItemContainer" key={item.id}>
              {item.text}
            </div>
          ))}
      </div>
    );
  }
}

const typesData = [
  { key: 0, value: "Личное" },
  { key: 1, value: "Работа" },
  { key: 2, value: "Учеба" },
  { key: 3, value: "Отдых" },
];

export default TodoApp;
