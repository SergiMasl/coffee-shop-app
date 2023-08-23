import React from "react";
import Header from "./Header";
import Catalog from "./body/Menu/Catalog";
import SeasonItems from "./body/SeasonItems/SeasonItems";
import "./styles/home.css";
import { Route, Routes } from "react-router-dom";
import CoffeeComponent from "./body/Menu/CoffeeComponent";
import FullMenu from "./body/Menu/FullMenu";
import TeaCompoment from "./body/Menu/TeaCompoment";
import Oleato from "./body/Menu/catalog/coffee/Oleato";
import HotCoffee from "./body/Menu/catalog/coffee/HotCoffee";
import ColdCoffees from "./body/Menu/catalog/coffee/ColdCoffees";
import NightroCoffees from "./body/Menu/catalog/coffee/NightroCoffees";
import HotTeas from "./body/Menu/catalog/tea/ChaiTeas";
import ColdTeas from "./body/Menu/catalog/tea/ColdTeas";
import ChaiTeas from "./body/Menu/catalog/tea/HotTeas";

const Home = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="" element={<SeasonItems />} />
        <Route path="/catalog" element={<Catalog />}>
          <Route path="/catalog/main" element={<FullMenu />} />
          <Route path="/catalog/tea" element={<TeaCompoment />} />
          <Route path="/catalog/coffee" element={<CoffeeComponent />} />
          <Route path="/catalog/Oleato" element={<Oleato />} />
          <Route path="/catalog/HotCoffee" element={<HotCoffee />} />
          <Route path="/catalog/ColdCoffees" element={<ColdCoffees />} />
          <Route path="/catalog/NightroCoffees" element={<NightroCoffees />} />
          <Route path="/catalog/HotTeas" element={<HotTeas />} />
          <Route path="/catalog/ColdTeas" element={<ColdTeas />} />
          <Route path="/catalog/ChaiTeas" element={<ChaiTeas />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Home;
