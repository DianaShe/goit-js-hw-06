const categoriesNames= document.querySelectorAll(".item");
const categoryTitles = document.querySelectorAll(".item h2");

console.log(`Number of categories: ${categoriesNames.length}`);

categoryTitles.forEach(title => {
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${title.nextElementSibling.children.length}`);
})

