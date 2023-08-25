import itemList from "../jsons/itemsList.json";

const getItemData = (id) => {
  // const id = "latte";
  const currentItem = itemList[id];
  console.log(id);
  return currentItem;
};

export default getItemData;
