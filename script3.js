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
// Posibilitatea de a returna produsele la depozit.
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
    name: "Turkey",
    code: "TR"
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
    name: "China",
    code: "CH"
},
//add more properties if necessary
},
//ass more clothes if necessary
];


//Scenario 1 - // Exista o listă de produse. - an array with more objects
/*
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