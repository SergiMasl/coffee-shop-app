import React from "react";
import Header from "./Header";
import Catalog from "./body/Menu/Catalog";
import SeasonItems from "./body/SeasonItems/SeasonItems";
import "./styles/home.css";
import { Route, Routes } from "react-router-dom";
import CoffeeComponent from "./body/Menu/CoffeeComponent";
import FullMenu from "./body/Menu/FullMenu";
import TeaCompoment from "./body/Menu/TeaCompoment";

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
        </Route>
        <Route />
      </Routes>
    </div>
  );
};

export default Home;
