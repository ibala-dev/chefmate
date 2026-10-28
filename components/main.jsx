export function Main() {
  const ingredients = ["chicken", "Tamoto", "Fenugreek"];
  const ingredientListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngrediet = formData.get("ingredient");
    ingredients.push(newIngrediet);
    console.log(ingredients);
  }
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
