class ClickButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { class: "off", label: "Нажми" };

    this.onClick = this.onClick.bind(this);

    console.log("constructor");
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
  }

  componentWillMount() {
    alert("componentWillMount");
  }

  onClick() {
    alert("onClick");
  }

  render() {
    return (
      <div
        style={{
          width: "30%",
          margin: "3%",
          minHeight: "200px",
          background: "#EEEEEE",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <button
          style={{ background: "#5AF", borderRadius: "10px" }}
          onClick={this.onClick}
        >
          {this.state.label}
        </button>
      </div>
    );
  }
}

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div
        style={{
          width: "30%",
          margin: "3%",
          minHeight: "200px",
          background: "#EEEEEE",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

const propsValues = {
  title: "Список группы",
  items: [
    "Студент 1",
    "Студент 2",
    "Студент 3",
    "Студент 4",
    "Студент 5",
    "Студент 6",
  ],
};

class Item extends React.Component {
  render() {
    return <li>{this.props.name}</li>;
  }
}

class SearchPlugin extends React.Component {
  constructor(props) {
    super(props);
    this.onTextChanged = this.onTextChanged.bind(this);
  }

  onTextChanged(e) {
    var text = e.target.value.trim(); // удаляем пробелы
    this.props.filter(text); // передаем введенный текст в родительский компонент
  }

  render() {
    return <input placeholder="Поиск" onChange={this.onTextChanged} />;
  }
}

class ItemsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: this.props.data.items };

    this.filterList = this.filterList.bind(this);
  }

  filterList(text) {
    var filteredList = this.props.data.items.filter(function (item) {
      return item.toLowerCase().search(text.toLowerCase()) !== -1;
    });
    this.setState({ items: filteredList });
  }

  render() {
    return (
      <div
        style={{
          width: "30%",
          margin: "3%",
          minHeight: "200px",
          background: "#EEEEEE",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <h2>{this.props.data.title}</h2>
        <SearchPlugin filter={this.filterList} />
        <ul>
          {this.state.items.map(function (item) {
            return <Item key={item} name={item} />;
          })}
        </ul>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          minHeight: "200px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          fontFamily: "Sans-serif",
        }}
      >
        <ClickButton />
        <Timer />
        <ItemsList data={propsValues} />
      </div>
    );
  }
}

const AppStyle = {};

ReactDOM.render(<App />, document.getElementById("root"));
