import React from "react";
import { IngredientsList } from "./IngredientsList";
import { Recipe } from "./Recipe";
import { getRecipeFromModel } from "../ai";


export function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [recipes, setRecipes] = React.useState([]); 

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    if (!newIngredient.trim()) return;
    setIngredients((existing) => [...existing, newIngredient]);
    event.currentTarget.reset();
  }

  async function handleGetRecipe() {
    setLoading(true);
    setError("");
    try {
      const result = await getRecipeFromModel(ingredients);
      setRecipe(result);
      setRecipes((prev) => [...prev, result]); 
    } catch (err) {
      console.error(err);
      setError("Couldn't generate a recipe. Is Ollama running?");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <form className="ingredients-form" onSubmit={handleSubmit}>
        <input
          aria-label="Add Ingredient"
          type="text"
          placeholder="e.g. Chicken"
          name="ingredient"
        />
        <button type="submit">Add Ingredient</button>
      </form>

      {ingredients.length > 0 && !recipe && (
        <IngredientsList
          ingredients={ingredients}
          onGetRecipe={handleGetRecipe}
        />
      )}

      {loading && <p>Cooking up a recipe...</p>}
      {error && <p>{error}</p>}
      {recipe && <Recipe recipe={recipe} />}
    </main>
  );
}