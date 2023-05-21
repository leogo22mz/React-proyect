import db from "../firebase";
import { ref, get, push } from "firebase/database";

const recipes = ref(db, "/recipes");

const getRecipes = () => {
  let values = get(recipes);
  return values;
};

const addRecipe = (key, title, img, difficulty, ingredients, steps) => {
  return push(recipes, {
    key: key,
    title: title,
    img: img,
    difficulty: difficulty,
    ingredients: ingredients,
    steps: steps,
  });
};

export default {
  getRecipes, addRecipe
};
