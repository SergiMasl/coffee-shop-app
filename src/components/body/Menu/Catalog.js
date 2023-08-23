import NavMenu from "./NavMenu";
import CoffeeComponent from "./CoffeeComponent";
import FullMenu from "./FullMenu";
import TeaCompoment from "./TeaCompoment";
import HotCoffee from "./catalog/coffee/HotCoffee";
import Oleato from "./catalog/coffee/Oleato";
import { Route, Routes, Link } from "react-router-dom";
import "../../styles/catalog/catalog.css";

const Catalog = ({ setcurrentWindowsIndex, currentWindowsIndex }) => {
  return (
    <div className="catalog_conteiner">
      <NavMenu />

      <div className="menu_wrapper">
        <Routes>
          <Route path="/main" element={<FullMenu />} />
          <Route path="/tea" element={<TeaCompoment />} />
          <Route path="/coffee" element={<CoffeeComponent />} />
        </Routes>
      </div>
    </div>
  );
};

export default Catalog;
