const allCategoriesRef = document.querySelectorAll(`.item`);
console.log(`Number of categories ${allCategoriesRef.length}`);

for (let category of allCategoriesRef) {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.childElementCount}`);
}