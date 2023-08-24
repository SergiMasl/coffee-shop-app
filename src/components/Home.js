import React from "react";
import Header from "./Header";
import Catalog from "./body/Menu/Catalog";
import SeasonItems from "./body/SeasonItems/SeasonItems";
import "./styles/home.css";
import { Route, Routes } from "react-router-dom";
import CoffeeComponent from "./body/Menu/CoffeeComponent";
import FullMenu from "./body/Menu/FullMenu";
import TeaCompoment from "./body/Menu/TeaCompoment";
import ItemsListByCategory from "./body/Menu/catalog/ItemsListByCategory";
import Item from "./body/Menu/catalog/Item";

const Home = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<SeasonItems />} />
        <Route path="/catalog" element={<Catalog />}>
          <Route path="/catalog/main" element={<FullMenu />} />
          <Route path="/catalog/tea" element={<TeaCompoment />} />
          <Route path="/catalog/coffee" element={<CoffeeComponent />} />
          <Route path="/catalog/Oleato" element={<ItemsListByCategory />} />
          <Route path="/catalog/HotCoffee" element={<ItemsListByCategory />} />
          <Route
            path="/catalog/ColdCoffees"
            element={<ItemsListByCategory />}
          />
          <Route
            path="/catalog/NightroCoffees"
            element={<ItemsListByCategory />}
          />
          <Route path="/catalog/HotTeas" element={<ItemsListByCategory />} />
          <Route path="/catalog/ColdTeas" element={<ItemsListByCategory />} />
          <Route path="/catalog/ChaiTeas" element={<ItemsListByCategory />} />
          <Route path="/catalog/item" element={<Item />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Home;
