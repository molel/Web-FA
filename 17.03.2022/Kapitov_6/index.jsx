class Me extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "30%",
          padding: "20px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "sans-serif",
          fontSize: "20px",
          borderRadius: "10px",
          backgroundColor: "#EEEDE7",
        }}
      >
        <p>Имя: {this.props.name}</p>
        <p>Возраст: {this.props.age}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Me name="Капитов Павел" age="19" />,
  document.getElementById("app")
);

class ClickButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { class: "off", label: "Нажми" };

    this.press = this.press.bind(this);
  }
  press() {
    let className = this.state.class === "off" ? "on" : "off";
    this.setState({ class: className, class: "on", label: "Нажато" });
  }
  render() {
    return (
      <button onClick={this.press} className={this.state.class}>
        {this.state.label}
      </button>
    );
  }
}

ReactDOM.render(<ClickButton />, document.getElementById("app1"));
