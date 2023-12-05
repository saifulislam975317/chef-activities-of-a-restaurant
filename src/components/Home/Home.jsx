import About from "../About/About";
import Banner from "../Banner/Banner";
import Events from "../Events/Events";
import Services from "../Services/Services";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Events></Events>
      <Footer></Footer>
    </div>
  );
};

export default Home;
