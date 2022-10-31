const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector(`#ingredients`);
  
  const addMarkUp = ingredients.map(ingredient => {
  const addItemRef = document.createElement(`li`);
  addItemRef.textContent = ingredient;
  addItemRef.classList.add(`item`);
  return addItemRef;
})
ingredientsListRef.append(...addMarkUp);
console.log(ingredientsListRef);
