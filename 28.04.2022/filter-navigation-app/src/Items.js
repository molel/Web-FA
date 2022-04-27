import ItemCard from "./ItemCard";
import "./Items.css";

function Items({ filters }) {
  return (
    <div className="itemsContainer">
      {itemsData
        .filter(
          (item) =>
            (filters.selectedCountry === item.country ||
              filters.selectedCountry === "Любая") &&
            (filters.selectedSizes.includes(item.size) ||
              filters.selectedSizes.length === 0) &&
            filters.minPrice <= item.price &&
            item.price <= filters.maxPrice
        )
        .map((item) => (
          <ItemCard
            key={item.key}
            name={item.name}
            country={item.country}
            size={item.size}
            price={item.price}
          />
        ))}
    </div>
  );
}

const itemsData = [
  { key: 0, name: "Рубашка #1", country: "Россия", size: "M", price: 1500 },
  { key: 1, name: "Рубашка #2", country: "США", size: "X", price: 2000 },
  { key: 2, name: "Рубашка #3", country: "США", size: "M", price: 1000 },
  { key: 3, name: "Рубашка #4", country: "Китай", size: "X", price: 2500 },
  { key: 4, name: "Рубашка #5", country: "Тайланд", size: "S", price: 1500 },
  { key: 5, name: "Рубашка #6", country: "Китай", size: "M", price: 1000 },
  { key: 6, name: "Рубашка #7", country: "США", size: "X", price: 2000 },
  { key: 7, name: "Рубашка #8", country: "Россия", size: "M", price: 2000 },
  { key: 8, name: "Рубашка #9", country: "США", size: "XS", price: 1000 },
  { key: 9, name: "Рубашка #10", country: "Тайланд", size: "M", price: 2400 },
  { key: 10, name: "Рубашка #11", country: "Китай", size: "M", price: 1800 },
  { key: 11, name: "Рубашка #12", country: "Китай", size: "X", price: 1200 },
  { key: 12, name: "Рубашка #13", country: "Тайланд", size: "XS", price: 2400 },
  { key: 13, name: "Рубашка #14", country: "Китай", size: "X", price: 2000 },
  { key: 14, name: "Рубашка #15", country: "США", size: "S", price: 1000 },
  { key: 15, name: "Рубашка #16", country: "Тайланд", size: "S", price: 1300 },
  { key: 16, name: "Рубашка #17", country: "Россия", size: "X", price: 2200 },
  { key: 17, name: "Рубашка #18", country: "Китай", size: "XS", price: 2200 },
  { key: 18, name: "Рубашка #19", country: "Тайланд", size: "M", price: 2800 },
  { key: 19, name: "Рубашка #20", country: "Тайланд", size: "M", price: 1000 },
];

export default Items;
