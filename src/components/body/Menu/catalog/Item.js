import { useParams } from "react-router-dom";
import getItemData from "../../../getItemData";
import "../../../styles/catalog/item.css";

const Item = () => {
  const sizeOptions = [
    { img: "#", title: "Short", oz: "8" },
    { img: "#", title: "Tall", oz: "12" },
    { img: "#", title: "Grande", oz: "16" },
    { img: "#", title: "Ventu", oz: "20" },
  ];

  const { id } = useParams();

  const currentItem = getItemData(id);
  console.log(currentItem.title);
  return (
    <div className="">
      <div className="item_header_bar">
        <div className="item_header_bar_img_wrap">
          <img src="" className="item_header_bar_img" alt="logo"></img>
        </div>
        <div className="item_header_bar_title_wrap">
          <h2 className="item_header_bar_title">{currentItem.title}</h2>
          <p className="item_header_bar_calory">
            {currentItem.calorie} calories
            <span>
              *Information is based on standard recipes and does not reflect
              customizations
            </span>
          </p>
        </div>
      </div>

      <div className="item_info_wrap">
        <div className="size_opt">
          <div className="size_opt_title">
            <p>Size options</p>
          </div>
          <div className="ize_opt_choose_cont">
            {sizeOptions.map((item) => (
              <div>
                <div>
                  <img src={item.img}></img>
                </div>
                <p>{item.title}</p>
                <p>{item.oz} fl oz</p>
              </div>
            ))}
          </div>
        </div>

        <div className="item_incude ">
          <div div className="size_opt_title item_incude_item">
            <p>What's included</p>
          </div>
          {currentItem.milk === "None" ? null : (
            <div className="item_include_wrap">
              <p className="item_include_wrap_title">Milk</p>
              <p className="item_include_wrap_info">{currentItem.milk}</p>
            </div>
          )}
          {currentItem.hot === "None" ? null : (
            <div className="item_include_wrap">
              <p className="item_include_wrap_title">Milk</p>
              <p className="item_include_wrap_info">{currentItem.hot}</p>
            </div>
          )}
          {currentItem.syrups === "None" ? null : (
            <div className="item_include_wrap">
              <p className="item_include_wrap_title">Syrups</p>
              <p className="item_include_wrap_info">{currentItem.syrups}</p>
            </div>
          )}
          {currentItem.foam === "None" ? null : (
            <div className="item_include_wrap">
              <p className="item_include_wrap_title">Foam</p>
              <p className="item_include_wrap_info">{currentItem.foam}</p>
            </div>
          )}
          {currentItem.ess_shot === "None" ? null : (
            <div className="item_include_wrap">
              <p className="item_include_wrap_title">Espresso shots</p>
              <p className="item_include_wrap_info">{currentItem.ess_shot}</p>
            </div>
          )}
          {currentItem.ice === "None" ? null : (
            <div className="item_include_wrap">
              <p className="item_include_wrap_title">Add-ins</p>
              <p className="item_include_wrap_info">{currentItem.ice}</p>
            </div>
          )}
          {currentItem.bean_opt === "None" ? null : (
            <div className="item_include_wrap">
              <p className="item_include_wrap_title">Beans Opt-ns</p>
              <p className="item_include_wrap_info">{currentItem.bean_opt}</p>
            </div>
          )}
          {currentItem.nightro === "None" ? null : (
            <div className="item_include_wrap">
              <p className="item_include_wrap_title">Nightro</p>
              <p className="item_include_wrap_info">{currentItem.nightro}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
