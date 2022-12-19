"use strict";
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemsList = document.getElementById('ingredients');

const ingredientsItems = ingredients.map(ingredient => {
  const ingredientItemEl = document.createElement('li');
  ingredientItemEl.innerHTML = ingredient;
  ingredientItemEl.classList.add('item');

  return ingredientItemEl;
})

itemsList.append(...ingredientsItems);