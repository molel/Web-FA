import React from "react";
import "./styles.css";
import App1 from "./App1";
import App2 from "./App2";

export default function App() {
  const [app, setApp] = React.useState(App1);

  return (
    <div className="App">
      <div className="header">
        <div className="headerLabelContainer">Информационный портал Omen</div>
        <div className="headerButtonContainer">
          <div
            className="headerButton"
            onClick={() => {
              setApp(App1);
            }}
          >
            Музыка
          </div>
          <div
            className="headerButton"
            onClick={() => {
              setApp(App2);
            }}
          >
            Кухня
          </div>
        </div>
      </div>
      <div className="appContainer">{app}</div>
    </div>
  );
}
