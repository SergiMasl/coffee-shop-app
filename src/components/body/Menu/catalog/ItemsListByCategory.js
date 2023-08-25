import { Link } from "react-router-dom";
import itemsList from "../../../../jsons/menuItemsByCategory.json";

const ItemsListByCategory = () => {
  const currentUrl = window.location.href.toString();
  const urlParts = currentUrl.split("/");
  const categoryName = urlParts[urlParts.length - 1];
  console.log(categoryName);
  return (
    <div className="nav_menu">
      <div className="">
        {Object.keys(itemsList[categoryName]).map((item, index) => (
          <div key={item}>
            <h1>{item}</h1>
            {itemsList[categoryName][item].map((i, index) => (
              <Link key={i.title} to={`/catalog/products/${i.id}`}>
                <p>{i.title}</p>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsListByCategory;
