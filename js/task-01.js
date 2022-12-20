"use strict";
const listOfCategories = document.getElementById("categories");
const allCategories = [...listOfCategories.children];
console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach(el => {
    console.log(`Category: ${el.firstElementChild.innerText}\nElements: ${el.lastElementChild.children.length}`);
})