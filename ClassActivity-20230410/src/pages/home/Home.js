import CarList from "../../components/carList/CarList";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Toolbar from "../../components/Toolbar/toolbar";
import "./Home.css";

function Home() {
  return (
    <>
      <br/><br/><br/>
      <Header />
      <CarList />
      <Toolbar />
      <Footer/>
    </>
  );
}

export default Home;