import React from "react";
import Filters from "./Filters";
import Items from "./Items";
import "./Shop.css";

function Shop() {
  const [filters, setFilters] = React.useState({
    selectedCountry: "Любая",
    selectedSizes: [],
    minPrice: 0,
    maxPrice: Infinity,
  });

  return (
    <div className="shopContainer">
      <Filters setFilters={setFilters} />
      <Items filters={filters} />
    </div>
  );
}

export default Shop;
