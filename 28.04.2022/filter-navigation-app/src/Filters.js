import React from "react";
import {
  CheckBoxFilterBlock,
  RangeFilterBlock,
  SelectFilterBlock,
} from "./FilterBlocks";
import "./Filters.css";

function Filters({ setFilters }) {
  const [sizes, setSizes] = React.useState([]);
  const onSizeChange = ({ target: { checked, id } }) => {
    setSizes(checked ? [...sizes, id] : sizes.filter((item) => item !== id));
  };

  const [country, setCountry] = React.useState(countriesFilterData[0].text);
  const onCountryChange = ({ target: { value } }) => {
    setCountry(value);
  };

  const [minPrice, setMinPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(Infinity);

  const onPriceChange = ({ target: { id, value } }) => {
    id === "minPrice"
      ? setMinPrice(value)
      : setMaxPrice(value === "" ? Infinity : value);
  };

  const applyFilters = () => {
    setFilters({
      selectedCountry: country,
      selectedSizes: sizes,
      minPrice: minPrice,
      maxPrice: maxPrice,
    });
  };

  return (
    <div className="filtersContainer">
      <div className="filtersContainerLabelContainer">Фильтры</div>
      <CheckBoxFilterBlock
        name="Размеры"
        data={sizesFilterData}
        onChange={onSizeChange}
      />
      <SelectFilterBlock
        name="Страна производителя"
        data={countriesFilterData}
        onChange={onCountryChange}
      />
      <RangeFilterBlock name="Цена" onChange={onPriceChange} />
      <button type="button" className="filtesrButton" onClick={applyFilters}>
        Применить
      </button>
    </div>
  );
}

const sizesFilterData = [
  { key: 0, text: "S" },
  { key: 1, text: "M" },
  { key: 2, text: "X" },
  { key: 3, text: "XS" },
];

const countriesFilterData = [
  { key: 0, text: "Любая" },
  { key: 1, text: "Россия" },
  { key: 2, text: "США" },
  { key: 3, text: "Китай" },
  { key: 4, text: "Тайланд" },
];

export default Filters;
