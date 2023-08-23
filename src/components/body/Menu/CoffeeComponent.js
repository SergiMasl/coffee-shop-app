import Logo from "../../styles/img/coffee/coffee.jpeg";
import { Link } from "react-router-dom";

const CoffeeComponent = () => {
  const coffeeList = [
    { img: "", title: "Oleato", id: "oleato" },
    { img: "", title: "Hot Coffees", id: "catalog/hotcoffees" },
    { img: "", title: "Cold Coffees", id: "catalog/coldcoffees" },
    { img: "", title: "Nightro Coffees", id: "catalog/nightrocoffees" },
  ];

  return (
    <div className="menu_section">
      <h2>Coffee</h2>
      <div className="menu_section_wrap">
        {coffeeList.map((item) => (
          <Link
            to={`/${item.id}`}
            className="menu_section_img_wrapper"
            key={item.id}
          >
            <img className="menu_section_img" src={Logo} />
            <p className="menu_section_text">{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CoffeeComponent;
