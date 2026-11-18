import React from "react";
export function Main() {
  const [ingredients,setIngredient] = React.useState([])

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
     if (!newIngredient.trim()) return;
   setIngredient((existingIngredients=>[...existingIngredients,newIngredient]))
    event.currentTarget.reset();
  }
  
    const ingredientListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <main>
      <form className="ingredients-form" onSubmit={handleSubmit}>
        <input
          aria-label="Add Ingredient"
          type="text"
          placeholder="e.g. Chicken"  
          name="ingredient"                 
        ></input>
        <button type="submit">  Add Ingredient</button>
      </form>
      {ingredients.length > 0 && <section>
        <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">{ingredientListItems}</ul>
          <div className="get-recipe-container">
            <div>
            <h3> Ready for a recipe?</h3>
            <p>Generate a receipe from your list of ingredients.</p>
          </div>
           <button>Get a recipe</button>
          </div>
      </section>}
    </main>
  );
}

