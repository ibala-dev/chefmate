import React from "react";
import { IngredientsList } from "./IngredientsList";
import { Recipe } from "./Recipe";

export function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipeShown, setRecipeShown] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    if (!newIngredient.trim()) return;
    setIngredients((existing) => [...existing, newIngredient]);
    event.currentTarget.reset();
  }

  function handleGetRecipe() {
    setRecipeShown(true);
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

      {ingredients.length > 0 && !recipeShown && (
        <IngredientsList
          ingredients={ingredients}
          onGetRecipe={handleGetRecipe}
        />
      )}

      {recipeShown && <Recipe />}
    </main>
  );
}