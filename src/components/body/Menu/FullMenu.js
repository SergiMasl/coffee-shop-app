import TeaCompoment from "./TeaCompoment";
import CoffeeComponent from "./CoffeeComponent";

const FullMenu = () => {
  return (
    <div className="">
      <h2>Menu</h2>
      <CoffeeComponent />
      <TeaCompoment />
    </div>
  );
};

export default FullMenu;
