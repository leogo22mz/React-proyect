import "./RecipeList.css";
import { useState, useEffect } from "react";
import RecipeService from "../../services/recipes.service";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [showDescription, setShowDescription] = useState({});

  const getRecipes = () => {
    RecipeService.getRecipes()
      .then((items) => {
        let allRecipes = [];
        items.forEach((item) => {
          const key = item.key;
          const data = item.val();
          allRecipes.push({
            id: key, // Utilizamos el campo "key" como identificador único
            title: data.title,
            img: data.img,
            difficulty: data.difficulty,
            ingredients: data.ingredients,
            steps: data.steps,
          });
        });
        setRecipes(allRecipes);
      })
      .catch((err) => {
        console.error(err);
      });
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
            <div className="car-list-item" key={c.id}>
              <br/><br/>
              <h1>{c.title}</h1>
              <p>Difficulty: {c.difficulty}</p>
              <div className="car-list-img">
                <img src={`/assets/img/${c.img}`} alt="car" />
              </div>
              <div className="car-list-description" style={{ display: showDescription[c.id] ? "block" : "none" }}>
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
                onClick={() =>
                  setShowDescription((prevState) => ({
                    ...prevState,
                    [c.id]: !prevState[c.id],
                  }))
                }
              >
                {showDescription[c.id] ? "Read Less" : "Read More"}
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
      <input type="search" onChange={handleChange} />
      <div className="main-container">
        <div className="car-list-container">{showRecipes()}</div>
        <div className="right-text"></div>
      </div>
    </>
  );
}

export default RecipeList;
