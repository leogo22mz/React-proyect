import { useState, useEffect } from "react";
import RecipeService from "../../services/recipes.service";
import "./RecipeList.css";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [showDescription, setShowDescription] = useState(false); // nuevo estado

  const getRecipes = () => {
    const allRecipes = RecipeService.getRecipes();
    setRecipes(allRecipes);
  };

  const showRecipes = () => {
    return (
      recipes
        .filter(
          (c) =>
            c.title.toLowerCase().includes(query.toLowerCase()) ||
            c.difficulty.toString().toLowerCase().includes(query.toLowerCase()) ||
            c.recipe.toLowerCase().includes(query.toLowerCase())
        )
        .map((c) => {
          return (
            <div className="car-list-item">
              <br/><br/>
              <h1>{c.title}</h1>
              <p>{c.difficulty}</p>
              <div className="car-list-img">
                <img src={`/assets/img/${c.img}`} alt="car" />
              </div>
              <div
                className="car-list-description"
                style={{ display: showDescription ? "block" : "none" }}
              >
                <br />
                <h3>INGREDIENTS:</h3>
                <ul>
                  {c.ingredients &&
                    c.ingredients.map((ingredient) => {
                      return <li key={ingredient}>{ingredient}</li>;
                    })}
                </ul>
                <br />
                <h3>STEPS:</h3>
                {Array.isArray(c.steps) ? (
                  <ol>
                    {c.steps.map((step) => {
                      return <li key={step}>{step}</li>;
                    })}
                  </ol>
                ) : (
                  <p>No steps found.</p>
                )}
              </div>
              <br />
              <button
                className="read-more-btn"
                onClick={() => setShowDescription(!showDescription)}
              >
                {showDescription ? "Read Less" : "Read More"} 
              </button>
            </div>
          );
        })
    );
  };

  const handleChange = (event) => {
    const searchValue = event.target.value;
    setQuery(searchValue);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <>
      {/* ACTUALIZAR PARA EL SEARCH */}
      {/* <input type="search" onChange={handleChange} /> */}
      <div className="main-container">
        <div className="car-list-container">{showRecipes()}</div>
        <div className="right-text"></div>
      </div>
    </>
  );
}

export default RecipeList;
