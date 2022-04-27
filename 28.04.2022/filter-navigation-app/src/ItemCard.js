import "./Items.css";

function ItemCard({ name, country, size, price }) {
  return (
    <div className="itemCard">
      <img
        className="itemCardImage"
        src={require("./shirtIcon.png")}
        alt="altText"
      />
      <div className="itemCardHeader">{name}</div>
      <div className="itemCardText">Страна: {country}</div>
      <div className="itemCardText">Размер: {size}</div>
      <div className="itemCardText">Цена: {price}&#8381;</div>
    </div>
  );
}

export default ItemCard;
