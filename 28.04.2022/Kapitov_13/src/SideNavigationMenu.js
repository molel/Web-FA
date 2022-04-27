import "./styles.css";
import React, { Component } from "react";
import {
  AiOutlineCheckSquare,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineCoffee,
  AiOutlineDesktop,
} from "react-icons/ai";

export class SideNavigationMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedTypeKey: 0 };
  }

  render() {
    return (
      <div className="sideNavigationMenuContainer">
        Вкладки
        {typesData.map((item) => (
          <div
            className={
              this.state.selectedTypeKey === item.key
                ? "sideNavigationMenuSelectedItemContainer"
                : "sideNavigationMenuItemContainer"
            }
            key={item.key}
            onClick={() => {
              this.setState({ selectedTypeKey: item.key });
              this.props.callbackFromParent(item.value);
            }}
          >
            {<item.icon />} {item.value}
          </div>
        ))}
      </div>
    );
  }
}

const typesData = [
  { key: 0, value: "Все", icon: AiOutlineCheckSquare },
  { key: 1, value: "Личное", icon: AiOutlineUser },
  { key: 2, value: "Работа", icon: AiOutlineDesktop },
  { key: 3, value: "Учеба", icon: AiOutlineBook },
  { key: 4, value: "Отдых", icon: AiOutlineCoffee },
];

export default SideNavigationMenu;
