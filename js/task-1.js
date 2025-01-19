const ulCategories = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${ulCategories.length}`);


for (const ulCategory of ulCategories) {
    const CategoryTitle = ulCategory.querySelector('h2').textContent;
    const countElements = ulCategory.querySelectorAll('li').length;
    
    console.log(`Category:${CategoryTitle}`);
    console.log(`Elements:${countElements}`)
}