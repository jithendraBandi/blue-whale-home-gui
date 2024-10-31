import ItemCard from "./ItemCard/ItemCard";
import Logo from "../images/logo.png";
import productsList from "../utils/ProductsList";
import "./components.css";

const BlueWhaleHome = () => {
  return (
    <>
      <div className="header">
        <div className="flex-row">
          <img className="logo-image" src={Logo} alt="logo" />
          <h3 className="blue-color">Blue Whale Aqua Solutions</h3>
        </div>
      </div>
      <div className="flex-row-wrap">
        {productsList?.map(item => (
          <ItemCard key={item?.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default BlueWhaleHome;
