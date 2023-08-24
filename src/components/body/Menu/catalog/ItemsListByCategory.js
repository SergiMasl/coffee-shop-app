import { Link } from "react-router-dom";
import oleatoList from "../../../../jsons/menuItemsByCategory.json";

const ItemsListByCategory = () => {
  const currentUrl = window.location.href.toString();
  const urlParts = currentUrl.split("/");
  const categoryName = urlParts[urlParts.length - 1];

  return (
    <div className="nav_menu">
      <div className="">
        {oleatoList.map((item, index) => (
          <div className="" key={index}>
            {Object.keys(item).map((category, catIndex) => (
              <div key={catIndex}>
                {console.log(item)}
                {category === categoryName ? (
                  <div>
                    <h3>{item.category}</h3>
                    <div className="nav_section_list">
                      {item[category].map((subCategory, subIndex) => (
                        <Link
                          to="/catalog/item"
                          className="nav_list_item"
                          key={subIndex}
                        >
                          <p>{subCategory.title}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsListByCategory;
