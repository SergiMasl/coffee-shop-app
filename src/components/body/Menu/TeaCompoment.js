import Logo from "../../styles/img/tea/tea.jpeg";
import { Link } from "react-router-dom";

const TeaCompoment = () => {
  const teaList = [
    { img: "", title: "Hot Teas", id: "catalog/hotteas" },
    { img: "", title: "Cold Teas", id: "catalog/coldteas" },
    { img: "", title: "Chai Teas", id: "catalog/chaiteas" },
  ];

  return (
    <div className="menu_section">
      <h2>Tea</h2>
      <div className="menu_section_wrap">
        {teaList.map((item) => (
          <Link className="menu_section_img_wrapper" key={item.id}>
            <img className="menu_section_img" src={Logo} />
            <p className="menu_section_text">{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TeaCompoment;
