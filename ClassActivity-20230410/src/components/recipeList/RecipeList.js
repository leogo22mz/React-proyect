import { useState, useEffect } from "react";
import RecipeService from "../../services/recipes.service";
import "./RecipeList.css";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  const getRecipes = () => {
    const allRecipes = RecipeService.getRecipes();
    setRecipes(allRecipes);
  }

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
              <h1>{c.title}</h1>
              <p>{c.difficulty}</p>
              <div className="car-list-img">
                <img src={`/assets/img/${c.img}`} alt="car" />
              </div>
              <ul>
                {c.ingredients.map((ingredient) => (
                  <li>{ingredient}</li>
                ))}
              </ul>
            </div>
          );
        })
    );
  };
  
  

  const handleChange = (event) => {
    const searchValue = event.target.value;
    setQuery(searchValue);
  }

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <>
      <input type="search" onChange={handleChange} />
      <div className="main-container">
        <div className="car-list-container">
          {showRecipes()}
        </div>
        <div className="right-text">
        </div>
      </div>
    </>
  );
}

export default RecipeList;