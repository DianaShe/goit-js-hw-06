const categoriesNames= document.querySelectorAll(".item");
const categoryTitles = document.querySelectorAll(".item h2");
const categoryElements = document.querySelectorAll(".item ul");

console.log(`Number of categories: ${categoriesNames.length}`);
console.log(`Category: ${categoryTitles[0].textContent}`);
console.log(`Elements: ${categoryElements[0].children.length}`);
console.log(`Category: ${categoryTitles[1].textContent}`);
console.log(`Elements: ${categoryElements[1].children.length}`);
console.log(`Category: ${categoryTitles[2].textContent}`);
console.log(`Elements: ${categoryElements[2].children.length}`);