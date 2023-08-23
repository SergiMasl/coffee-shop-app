import React from "react";
import logo from "../../../styles/img/seasonal-drinks/pumpkin-spice-latte.png";

const Item = ({ item }) => {
  return (
    <div>
      <div className="carusel_item_wrapper_img_conteiner">
        <img className="carusel_item_wrapper_img" src={logo} />
      </div>
      <div className="carusel_item_wrap_title">
        <h2 className="carusel_item_title">{item.title}</h2>
      </div>
      <div className="carusel_item_wrapper">
        <div className="carusel_item_conteiner">
          <p className="carusel_item_text">Calories</p>
          <p className="carusel_item_text">{item.calories}g</p>
        </div>
        <div className="carusel_item_conteiner">
          <p className="carusel_item_text">Total sugar</p>
          <p className="carusel_item_text">{item.sugar}g</p>
        </div>
        <div className="carusel_item_conteiner">
          <p className="carusel_item_text">Transfat</p>
          <p className="carusel_item_text">{item.transfat}g</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
