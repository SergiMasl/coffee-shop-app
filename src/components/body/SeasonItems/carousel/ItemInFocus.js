import React from "react";
import logo from "../../../styles/img/seasonal-drinks/pumpkin-spice-latte.png";

const ItemInFocus = ({
  btms,
  sugar,
  title,
  calories,
  transfat,
  milk,
  flavors,
  icevshot,
  sauce,
  topings,
}) => {
  return (
    <div>
      <div>
        <div className="carusel_item_wrapper_img_conteiner">
          <img className="carusel_item_wrapper_img" src={logo} />
          {btms}
        </div>
        <div className="carusel_item_wrap_title">
          <h2 className="carusel_item_title_active">{title}</h2>
        </div>
        <div className="carusel_item_wrapper">
          <div className="carusel_item_conteiner">
            <p className="carusel_item_text_active">Calories</p>
            <p className="carusel_item_text_active">{calories}g</p>
          </div>
          <div className="carusel_item_conteiner">
            <p className="carusel_item_text_active">Total sugar</p>
            <p className="carusel_item_text_active">{sugar}g</p>
          </div>
          <div className="carusel_item_conteiner">
            <p className="carusel_item_text_active">Transfat</p>
            <p className="carusel_item_text_active">{transfat}g</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemInFocus;
