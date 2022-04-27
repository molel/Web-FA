class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div style={rootDivStyle}>
        <h3 style={headingStyle}>Список дел</h3>
        <div style={innerDivStyle}>
          <form onSubmit={this.handleSubmit} style={leftHalfStyle}>
            <label htmlFor="new-todo">Что нужно сделать?</label>
            <br />
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button style={{ margin: "10px" }}>
              Добавить #{this.state.items.length + 1}
            </button>
          </form>
          <TodoList items={this.state.items} />
        </div>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
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
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

const rootDivStyle = {
  width: "50%",
  padding: "20px",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "sans-serif",
  fontSize: "20px",
  borderRadius: "10px",
  backgroundColor: "#EEEDE7",
};

const headingStyle = {
  fontSize: "40px",
};

const innerDivStyle = {
  width: "80%",
  padding: "20px",
  margin: "auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#EEEDE7",
};

const leftHalfStyle = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "flex-start",
  alignItems: "center",
  alignContent: "center",
};
ReactDOM.render(<TodoApp />, document.getElementById("app"));
