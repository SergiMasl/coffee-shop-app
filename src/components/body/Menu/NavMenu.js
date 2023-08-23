import { Link } from "react-router-dom";

const NavMenu = () => {
  const navCoffeeList = [
    { Coffee: ["Oleato", "Hot Coffee", "Cold Coffees", "Nightro Coffees"] },
    { Tea: ["Hot Teas", "Cold Teas", "Chai Teas"] },
  ];

  return (
    <div className="nav_wrap">
      {navCoffeeList.map((item, index) => (
        <div className="nav_section" key={index}>
          {Object.keys(item).map((category, index) => (
            <div key={index}>
              <h3>{category}</h3>
              <div className="nav_section_list">
                {item[category].map((subCategory, subIndex) => (
                  <Link
                    to={`/catalog/${subCategory.split(" ").join("")}`}
                    className="nav_list_item"
                    key={subIndex}
                  >
                    {subCategory}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default NavMenu;
