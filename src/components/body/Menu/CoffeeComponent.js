import Logo from "../../styles/img/coffee/coffee.jpeg";

const CoffeeComponent = () => {
  const coffeeList = [
    { img: "", title: "Oleato", id: "oleato" },
    { img: "", title: "Hot Coffees", id: "hotcoffees" },
    { img: "", title: "Cold Coffees", id: "coldcoffees" },
    { img: "", title: "Nightro Coffees", id: "nightrocoffees" },
  ];

  return (
    <div className="menu_section">
      <h2>Coffee</h2>
      <div className="menu_section_wrap">
        {coffeeList.map((item) => (
          <div>
            <div className="menu_section_img_wrapper">
              <img className="menu_section_img" src={Logo} />
              <p lassName="menu_section_text">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeComponent;
