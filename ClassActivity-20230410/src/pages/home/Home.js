import RecipeList from "../../components/recipeList/RecipeList";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Toolbar from "../../components/Toolbar/toolbar";
import "./Home.css";

function Home() {
  return (
    <>
      <br/><br/><br/><br/><br/><br/>
      <Header />
      <RecipeList />
      <Toolbar />
      <Footer/>
    </>
  );
}

export default Home;