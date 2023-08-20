import React, { useState } from "react";
import jsonData from "../../../../jsons/seasonCoffee.json";
import ItemInFocus from "./ItemInFocus";
import Item from "./Item";
import dd from "../../../../components/styles/img/seasonal-drinks/pumpkin-spice-latte.png";

function shiftArrayElementsRight(arr) {
  if (arr.length <= 1) {
    return arr; // No need to shift if there are 0 or 1 elements
  }

  const lastElement = arr.pop(); // Remove the last element
  arr.unshift(lastElement); // Add the last element to the beginning
  console.log(arr);
  return [...arr]; // Return a new array to ensure immutability
}

const Carousel = () => {
  const [arrItems, setNewArr] = useState(jsonData);

  const handleRightButtonClick = () => {
    const transitionArr = shiftArrayElementsRight([...arrItems]); // Create a copy of the array
    setNewArr(transitionArr);
  };

  return (
    <div className="carusel_wrapper">
      {arrItems.slice(0, 4).map((item, index) => {
        const btms = (
          <>
            <button className="scarusel_item_btm_left"> Left </button>
            <button
              className="scarusel_item_btm_right"
              onClick={handleRightButtonClick}
            >
              Righ
            </button>
          </>
        );

        return (
          <div
            className={index !== 2 ? "carusel_item" : "carusel_item active"}
            key={item.title}
          >
            {index === 2 ? (
              <ItemInFocus
                btms={btms}
                sugar={item.sugar}
                title={item.title}
                calories={item.calories}
                transfat={item.transfat}
                milk={item.recepy.milk}
                flavors={item.recepy.flavors}
                icevshot={item.recepy.icevshot}
                sauce={item.recepy.sauce}
                topings={item.recepy.topings}
              />
            ) : (
              <Item
                img={item.img}
                sugar={item.sugar}
                title={item.title}
                calories={item.calories}
                transfat={item.transfat}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
