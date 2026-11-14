import React from "react";
export function Main() {
  const [ingredients,setIngredient] = React.useState([])
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
     if (!newIngredient.trim()) return;
   setIngredient((prev=>[...prev,newIngredient]))
    event.currentTarget.reset();
  }
    const ingredientListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  return (
    <main>
      <form className="ingridients-form" onSubmit={handleSubmit}>
        <input
          aria-label="Add Ingredient"
          type="text"
          placeholder="e.g. Chicken"
          name="ingredient"                 
        ></input>
        <button type="submit"> + Add Ingredient</button>
      </form>

      <ul>{ingredientListItems}</ul>
    </main>
  );
}

