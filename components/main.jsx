import React from "react";
import { IngredientsList } from "./IngredientsList";
import { Recipe } from "./Recipe";
import { getRecipeFromModel } from "../ai";

export function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipes, setRecipes] = React.useState([]); // all AI responses, oldest first
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const recipeSection = React.useRef(null)
React.useEffectEvent(()=>{
if(recipes!== "" && recipeSection.current!==null){
  recipeSection.current.scrollIntoView()
}
},)
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const newIngredient = new FormData(form).get("ingredient").trim();
    if (!newIngredient) return;
    setIngredients((existing) => [...existing, newIngredient]);
    form.reset();
  }

  async function handleGetRecipe() {
    setLoading(true);
    setError("");
    try {
      const result = await getRecipeFromModel(ingredients);
      setRecipes((prev) => [...prev, result]);
    } catch (err) {
      console.error(err);
      setError("Couldn't generate a recipe. Is Ollama running?");
    } finally {
      setLoading(false);
    }
  }

  function handleNewRecipe() {
    setIngredients([]);
    setError("");
  }

  const latestRecipe = recipes[recipes.length - 1];
  const previousRecipes = recipes.slice(0, -1);

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

      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          onGetRecipe={handleGetRecipe}
        />
      )}

      {recipes.length > 0 && (
        <button onClick={handleNewRecipe} disabled={loading}>
          Add new ingredients
        </button>
      )}

      {loading && <p>Cooking up a recipe...</p>}
      {error && <p>{error}</p>}

      {latestRecipe && (
        <section>
          <h2>Latest recipe</h2>
          <Recipe recipe={latestRecipe} />
        </section>
      )}

      {previousRecipes.length > 0 && (
        <section>
          <h2>Previous recipes</h2>
          {[...previousRecipes].reverse().map((recipe, index) => (
            <Recipe key={previousRecipes.length - index} recipe={recipe} />
          ))}
        </section>
      )}
    </main>
  );
}