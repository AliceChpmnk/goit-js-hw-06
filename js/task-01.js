"use strict";
const listOfCategories = document.getElementById("categories");
const allCategories = listOfCategories.children;
console.log(`Number of categories: ${allCategories.length}`);

for (const category of allCategories) {
    console.log(`Category: ${category.firstElementChild.innerText}\nElements: ${category.lastElementChild.children.length}`);
}