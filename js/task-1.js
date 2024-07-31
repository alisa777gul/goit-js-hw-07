'use strict!'
const categories = document.querySelectorAll(".item");
const categoriesNumber = document.querySelectorAll(".item").length;
console.log("Number of categories: ", categoriesNumber);


categories.forEach(category => {
    const title = category.querySelector("h2").textContent;
    const itemsNumber = category.querySelectorAll("li").length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemsNumber}`);
});