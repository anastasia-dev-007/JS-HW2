// De creat un program care simulează activitatea unui depozit. Produsele pot avea următoarele proprietăți(și multe altele după preferință):
// name: string,
// category: string,
// price: number,
// originCountry: { name: string, code: string },
// etc….

// Scenariu:
// Exista o listă de produse. - an array with more objects
// Posibilitatea de a suplini stocul produselor.
// Posibilitatea de a lua produse din depozit.
// De grupat produsele după categorie.
// ?????Posibilitatea de a returna produsele la depozit.
// De grupat produsele după țara de origine.
// Să se găsească produsul cel mai scump.
// Să se găsească produsul cel mai ieftin.
// Să se găsească produsele cu prețul între 600 și 1000.
// etc….


const clothesWarehouse = [
    {name: "dress",
    category: "womenClothes",
price: 300,
originCountry: {
    name: "Italy",
    code: "IT"
},
//add more properties if necessary
},

{name: "coat",
    category: "womenClothes",
price: 800,
originCountry: {
    name: "France",
    code: "FR"
},
//add more properties if necessary
},

{name: "jeans",
    category: "menClothes",
price: 300,
originCountry: {
    name: "Italy",
    code: "IT"
},
//add more properties if necessary
},

{name: "jaket",
    category: "menClothes",
price: 500,
originCountry: {
    name: "Italy",
    code: "IT"
},
//add more properties if necessary
},

{name: "romper",
    category: "babyClothes",
price: 100,
originCountry: {
    name: "France",
    code: "FR"
},
//add more properties if necessary
},
//ass more clothes if necessary
];


//Scenario 1 - // Exista o listă de produse. - an array with more objects
/*
console.log("List of products stored in the warehouse: ")
console.log("The warehouse of clothes stores " + clothesWarehouse.length + " items.");

//'learned how to use literals and backticks to display the list of products'
//The ${ } syntax is called a template literal or template string in JavaScript. It is a feature that allows you to embed expressions (variables, calculations, etc.) into a string in a more concise and readable way. When you enclose a value or an expression inside ${ } within backticks (``), it becomes a placeholder inside the string, and the expression inside the curly braces is evaluated and inserted into the string at that position. This process is known as string interpolation.
// clothesWarehouse.forEach(item => { ... }): This line is iterating over each element in the clothesWarehouse array using the forEach method. For each item in the array, the provided function (an arrow function in this case) will be executed.

// item: Inside the arrow function, the parameter item represents the current element being processed in the array during each iteration. It's a reference to each object in the clothesWarehouse array.
clothesWarehouse.forEach(item => {
    console.log(`Product Name: ${item.name}`);
    console.log(`Product Category: ${item.category}`);
    console.log(`Product Name: ${item.name}`);
    console.log(`Product Price: ${item.price}`);
    console.log(`Product Name: ${item.name}`);
    console.log(`Product Origin Country: ${item.originCountry.name} (${item.originCountry.code})`);
    console.log(`----------------------`); //separator for better readability
});

*/


//Scenario 2 - Posibilitatea de a suplini stocul produselor.
// console.log("Arrived product for storage in the warehouse: ")
/*clothesWarehouse.push({
    name: "shorts",
    category: "babyClothes",
price: 50,
originCountry: {
    name: "Romania",
    code: "RO"
}});

clothesWarehouse.forEach(item => {
    console.log(`Product Name: ${item.name}`);
});


//Scenario 3 - Posibilitatea de a lua produse din depozit.
console.log("Removed last product arrived at the warehouse: ")
/*clothesWarehouse.pop();

clothesWarehouse.forEach(item => {
console.log(`Name: ${item.name}`);
});*/



//Scenario 4 - De grupat produsele după categorie.
/*console.log("Clothes for Women:");
clothesWarehouse
.filter((item) => item.category === "womenClothes")
.forEach((item) => console.log(item.name));

console.log("Clothes for Men:");
clothesWarehouse
.filter((item) => item.category === "menClothes")
.forEach((item) => console.log(item.name));

console.log("Clothes for Babies:");
clothesWarehouse
.filter((item) => item.category === "babyClothes")
.forEach((item) => console.log(item.name));*/


//Scenario 6 - De grupat produsele după țara de origine.
/*
console.log("Clothes made in Italy: ")
clothesWarehouse
.filter((item) => item.originCountry.name === "Italy")
.forEach((item) => console.log(item.name));

console.log("Clothes made in France: ")
clothesWarehouse
.filter((item) => item.originCountry.name === "France")
.forEach((item) => console.log(item.name));
*/

//Scenario 7 - Să se găsească produsul cel mai scump.
//the spread operator is used to convert the array of prices into separate arguments, allowing the Math.max() function to find the maximum value among those prices. 
// console.log("Most expensive product is: ");
// const mostExpensiveProduct = clothesWarehouse.find((item) => item.price === Math.max(...clothesWarehouse.map((item) => item.price)));
// console.log(mostExpensiveProduct);

//Scenario 8 - Să se găsească produsul cel mai ieftin.
// console.log("Cheapest product is: ");
// const cheapestProduct = clothesWarehouse.find((item) => item.price === Math.min(...clothesWarehouse.map((item) => item.price)));
// console.log(cheapestProduct);

//Scenario 9 - Să se găsească produsele cu prețul între 600 și 1000.
// console.log("Product with price between 600 and 1000: ");
// const filteredProducts = clothesWarehouse.filter((item) => (item.price >= 600 && item.price <= 1000));
// console.log(filteredProducts);


// Sceanrio 6 - Posibilitatea de a returna produsele la depozit.
//I will make an analogy of trash bin from the computer, where you can delete items and then to restore them back.

//select item to be removed from the warehouse
let targetRemoveItem = "coat";
// targetRemoveItem = define here the product to be removed

//define the position of the item to be restored
const removeIndex = clothesWarehouse.findIndex((item) => item.name === targetRemoveItem);

//use the abive position in splice function to remove specific product
const removedProduct = clothesWarehouse.splice(removeIndex, 1);


const bin = [];//create a bin, which will include removed products from the warehouse
bin.push(removedProduct);//add removed products to bin
console.log("Content of bin:");
console.log(bin);

let targetRestoreItem ="coat";//define product which you want to restore
// targetRestoreItem = define here the product to be restored
const restoreIndex = bin.findIndex((item) => item.name === targetRestoreItem);//find index of the product to be restored

const restoredProduct = bin.splice(restoreIndex, 1);//remove product from bin


//create a list of restored products
const restoredList = [];
restoredList.push(restoredProduct[0]);
console.log("List of restored items:");
console.log(restoredList);

//returned restored products to the clothesWarehouse
const warehouseRestored = [...clothesWarehouse, ...restoredList];
console.log(warehouseRestored);