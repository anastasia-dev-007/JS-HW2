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
    {
        name: "dress",
        category: "womenClothes",
        price: 300,
        originCountry: {
            name: "Italy",
            code: "IT"
        },
        //add more properties if necessary
    },

    {
        name: "coat",
        category: "womenClothes",
        price: 800,
        originCountry: {
            name: "France",
            code: "FR"
        },
        //add more properties if necessary
    },

    {
        name: "jeans",
        category: "menClothes",
        price: 700,
        originCountry: {
            name: "Italy",
            code: "IT"
        },
        //add more properties if necessary
    },

    {
        name: "jacket",
        category: "menClothes",
        price: 500,
        originCountry: {
            name: "Italy",
            code: "IT"
        },
        //add more properties if necessary
    },

    {
        name: "romper",
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



//'learned how to use literals and backticks to display the list of products'
//The ${ } syntax is called a template literal or template string in JavaScript. It is a feature that allows you to embed expressions (variables, calculations, etc.) into a string in a more concise and readable way. When you enclose a value or an expression inside ${ } within backticks (``), it becomes a placeholder inside the string, and the expression inside the curly braces is evaluated and inserted into the string at that position. This process is known as string interpolation.
// clothesWarehouse.forEach(item => { ... }): This line is iterating over each element in the clothesWarehouse array using the forEach method. For each item in the array, the provided function (an arrow function in this case) will be executed.

// item: Inside the arrow function, the parameter item represents the current element being processed in the array during each iteration. It's a reference to each object in the clothesWarehouse array.

const listProducts = (clothesWarehouse) => {
    console.log("List of products stored in the warehouse: ")
    console.log("The warehouse of clothes stores " + clothesWarehouse.length + " items.");
    clothesWarehouse.forEach((item) => {
        console.log(`Product Name: ${item.name}`);
        console.log(`Product Category: ${item.category}`);
        console.log(`Product Name: ${item.name}`);
        console.log(`Product Price: ${item.price}`);
        console.log(`Product Name: ${item.name}`);
        console.log(`Product Origin Country: ${item.originCountry.name} (${item.originCountry.code})`);
        console.log(`----------------------`); //separator for better readability
    });
}

// listProducts(clothesWarehouse);





//Scenario 2 - Posibilitatea de a suplini stocul produselor.
// console.log("Arrived product for storage in the warehouse: ")

const addProduct = () => {
    clothesWarehouse.push({
        name: "shorts",
        category: "babyClothes",
        price: 50,
        originCountry: {
            name: "Romania",
            code: "RO"
        }
    });

    clothesWarehouse.forEach(item => {
        console.log(`Product Name: ${item.name}`);
    });
}

// addProduct();





//Scenario 3 - Posibilitatea de a lua produse din depozit.

const getProductByName = (product) => {
    /*
    1.cautam primul produs dupa nume
    2. stergem acest produs din lista
    3. returnam acest produs*/

    const productIndex = clothesWarehouse.findIndex(item => item.name === product);

    if (productIndex !== -1) {
        const selectedProduct = clothesWarehouse.splice(productIndex, 1)[0];
        return selectedProduct;
    } else {
        return "Product not found."
    }
}

// const orderedProduct = getProductByName("coat");
// console.log(orderedProduct);





//Scenario 4 - De grupat produsele după categorie.
const groupByCategory = (category) => {

    clothesWarehouse
        .filter((item) => item.category === category)
        .forEach((item) => console.log(item.name));
};

// groupByCategory("womenClothes");





//Scenario 6 - De grupat produsele după țara de origine.

const getByOriginCountry = (originCountry) => {

    clothesWarehouse
        .filter((item) => item.originCountry.name === originCountry)
        .forEach((item) => console.log(item.name));
}

// getByOriginCountry("France");



//Scenario 7 - Să se găsească produsul cel mai scump.
//the spread operator is used to convert the array of prices into separate arguments, allowing the Math.max() function to find the maximum value among those prices. 

const findMostExpensiveProduct = () => {
    /*
    1. parcurgen fiecare produs si gasim produsul cel mai scump
    */
    const sortedProducts = clothesWarehouse.sort((a, b) => b.price - a.price);
    return sortedProducts[0];
}

// console.log(findMostExpensiveProduct());


//Scenario 8 - Să se găsească produsul cel mai ieftin.
// console.log("Cheapest product is: ");
// const cheapestProduct = clothesWarehouse.find((item) => item.

const findCheapestProduct = () => {
    const sortedProducts = clothesWarehouse.sort((a, b) => a.price - b.price);
    return sortedProducts[0];
}

// console.log(findCheapestProduct());


//Scenario 9 - Să se găsească produsele cu prețul între 600 și 1000.

const identifyIntervalProducts = (minPrice, maxPrice) => {
    return clothesWarehouse.filter((item) => item.price >= minPrice && item.price <= maxPrice);
};

// const intervalProducts = identifyIntervalProducts(600, 800);
// console.log(intervalProducts);




// Posibilitatea de a returna produsele la depozit.

/*
1. cautam indexul itemului
2. il reducem din lista prin splice
3. il adaugam inapoi */



const returnProduct = (product) => {

    const removeProduct = (product) => {
        const productIndex = clothesWarehouse.findIndex((item) => item.name === product);
        if (productIndex !== -1) {
            return clothesWarehouse.splice(productIndex, 1);
        } else {
            return "Product not found.";
        }
    }

    const getBackRemovedProduct = removeProduct(product);
    return getBackRemovedProduct;
}

// console.log(returnProduct("jacket"));





