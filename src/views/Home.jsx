import Navbarapp from "../components/Navbarapp";
import HeaderApp from "../components/HeaderApp";
import Products from "../components/Products";

const Home = () => {

  return (
    <>
      <Navbarapp />
      <HeaderApp />
  
      <div className="d-flex  flex-wrap justify-content-center ">
        <Products />
      </div>
    </>
  );
};

export default Home;
