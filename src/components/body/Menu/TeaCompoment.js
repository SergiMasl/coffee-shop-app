import Logo from "../../styles/img/tea/tea.jpeg";

const TeaCompoment = () => {
  const teaList = [
    { img: "", title: "Hot Teas", id: "hotteas" },
    { img: "", title: "Cold Teas", id: "coldteas" },
    { img: "", title: "Chai Teas", id: "chaiteas" },
  ];

  return (
    <div className="menu_section">
      <h2>Tea</h2>
      <div className="menu_section_wrap">
        {teaList.map((item) => (
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

export default TeaCompoment;
