import NavMenu from "./NavMenu";
import CoffeeComponent from "./CoffeeComponent";
import FullMenu from "./FullMenu";
import TeaCompoment from "./TeaCompoment";
import Item from "./catalog/Item";
import ItemsListByCategory from "./catalog/ItemsListByCategory";
import { Route, Routes, Link } from "react-router-dom";
import "../../styles/catalog/catalog.css";

const Catalog = () => {
  return (
    <div className="catalog_conteiner">
      <NavMenu />

      <div className="menu_wrapper">
        <Routes>
          <Route path="/main" element={<FullMenu />} />
          <Route path="/tea" element={<TeaCompoment />} />
          <Route path="/coffee" element={<CoffeeComponent />} />
          <Route path="/Oleato" element={<ItemsListByCategory />} />
          <Route path="HotCoffee" element={<ItemsListByCategory />} />
          <Route path="ColdCoffees" element={<ItemsListByCategory />} />
          <Route path="NightroCoffees" element={<ItemsListByCategory />} />
          <Route path="HotTeas" element={<ItemsListByCategory />} />
          <Route path="ColdTeas" element={<ItemsListByCategory />} />
          <Route path="ChaiTeas" element={<ItemsListByCategory />} />
          <Route path="item" element={<Item />} />
        </Routes>
      </div>
    </div>
  );
};

export default Catalog;
