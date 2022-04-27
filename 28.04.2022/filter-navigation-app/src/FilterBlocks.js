import "./filterBlocks.css";
import CheckBoxFilterLine from "./FilterLines";

export function CheckBoxFilterBlock(props) {
  return (
    <div className="filterBlockContainer">
      {props.name}
      <div className="filterLinesContainer">
        {props.data.map((item) => (
          <CheckBoxFilterLine
            key={item.key}
            text={item.text}
            onChange={props.onChange}
          />
        ))}
      </div>
    </div>
  );
}

export function SelectFilterBlock(props) {
  return (
    <div className="filterBlockContainer">
      {props.name}
      <div className="filterLinesContainer">
        <select
          name={props.name}
          onChange={props.onChange}
          style={{ width: "100%" }}
        >
          {props.data.map((item) => (
            <option key={item.text}>{item.text}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export function RangeFilterBlock(props) {
  return (
    <div className="filterBlockContainer">
      {props.name}
      <div className="filterLinesContainer">
        От:
        <input
          className="inputNumber"
          type="number"
          min="0"
          id="minPrice"
          placeholder="Минимальная цена"
          onChange={props.onChange}
        />
        До:
        <input
          className="inputNumber"
          type="number"
          id="maxPrice"
          placeholder="Максимальная цена"
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}
