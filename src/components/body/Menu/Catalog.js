import NavMenu from "./NavMenu";
import CoffeeComponent from "./CoffeeComponent";
import FullMenu from "./FullMenu";
import TeaCompoment from "./TeaCompoment";
import HotCoffee from "./catalog/coffee/HotCoffee";
import Oleato from "./catalog/coffee/Oleato";
import ColdCoffees from "./catalog/coffee/ColdCoffees";
import NightroCoffees from "./catalog/coffee/NightroCoffees";
import ChaiTeas from "./catalog/tea/ChaiTeas";
import ColdTeas from "./catalog/tea/ColdTeas";
import HotTeas from "./catalog/tea/HotTeas";
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
          <Route path="/Oleato" element={<Oleato />} />
          <Route path="HotCoffee" element={<HotCoffee />} />
          <Route path="ColdCoffees" element={<ColdCoffees />} />
          <Route path="NightroCoffees" element={<NightroCoffees />} />
          <Route path="HotTeas" element={<HotTeas />} />
          <Route path="ColdTeas" element={<ColdTeas />} />
          <Route path="ChaiTeas" element={<ChaiTeas />} />
        </Routes>
      </div>
    </div>
  );
};

export default Catalog;
