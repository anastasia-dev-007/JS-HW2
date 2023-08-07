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

const listProducts = (products) => {
    console.log("List of products stored in the warehouse: ")
    console.log("The warehouse of clothes stores " + products.length + " items.");
    console.table(products);
    }


//Scenario 2 - Posibilitatea de a suplini stocul produselor.
// console.log("Arrived product for storage in the warehouse: ")

const addProduct = (product) => {
    clothesWarehouse.push(product);
    };



//Scenario 3 - Posibilitatea de a lua produse din depozit.

const getProductByName = (productName) => {
    /*
    1.cautam primul produs dupa nume
    2. stergem acest produs din lista
    3. returnam acest produs*/

    let productByName;
    const productIndex = clothesWarehouse.findIndex(item => item.name === productName);

    if (productIndex !== -1) {
        productByName = clothesWarehouse.splice(productIndex, 1) [0];
    }

    return productByName;
}



//Scenario 4 - De grupat produsele după categorie.
const groupByCategory = (category) => {

    return clothesWarehouse.filter((item) => item.category === category);
};




//Scenario 6 - De grupat produsele după țara de origine.

const getByOriginCountry = (originCountry) => {

    return clothesWarehouse.filter((item) => item.originCountry.name === originCountry);
}


//Scenario 7 - Să se găsească produsul cel mai scump.
//the spread operator is used to convert the array of prices into separate arguments, allowing the Math.max() function to find the maximum value among those prices. 

const findMostExpensiveProduct = (products) => {
    /*
    1. parcurgen fiecare produs si gasim produsul cel mai scump
    */


    // const sortedProducts = clothesWarehouse.sort((a, b) => b.price - a.price);
    // return sortedProducts[0];

//OR

let mostExpensiveProduct = products[0];

products.forEach(product => {
    if (product.price > mostExpensiveProduct.price) {
        mostExpensiveProduct = product;
    }
});
return mostExpensiveProduct;
}

//Scenario 8 - Să se găsească produsul cel mai ieftin.
// console.log("Cheapest product is: ");

const findCheapestProduct = (products) => {
let cheapestProduct = products[0];

products.forEach(product => {
    if(product.price < cheapestProduct.price) {
        cheapestProduct = product;
    }
});
return cheapestProduct;


    // or
    // const sortedProducts = clothesWarehouse.sort((a, b) => a.price - b.price);
    // return sortedProducts[0];
}



//Scenario 9 - Să se găsească produsele cu prețul între 600 și 1000.

const identifyIntervalProducts = (products, minPrice, maxPrice) => {
    return products.filter((item) => item.price >= minPrice && item.price <= maxPrice);
};


// Posibilitatea de a returna produsele la depozit.

/*
1. cautam indexul itemului
2. il reducem din lista prin splice
3. il adaugam inapoi */

const returnProduct = (product) => {

    // const removeProduct = (product) => {
    //     const productIndex = clothesWarehouse.findIndex((item) => item.name === product);
    //     if (productIndex !== -1) {
    //         return clothesWarehouse.splice(productIndex, 1);
    //     } else {
    //         return "Product not found.";
    //     }
    // }

    // const getBackRemovedProduct = removeProduct(product);
    // return getBackRemovedProduct;

    clothesWarehouse.push(product);
}

// console.log(returnProduct("jacket"));





// Results of functions: 

listProducts(clothesWarehouse);

addProduct(
    {
        name: "shorts",
        category: "babyClothes",
        price: 50,
        originCountry: {
            name: "Romania",
            code: "RO"
        }
    }
);

listProducts(clothesWarehouse);



const nastiaDress = getProductByName("dress");
console.log(nastiaDress);

listProducts(clothesWarehouse);


listProducts(groupByCategory("womenClothes"));
listProducts(groupByCategory("menClothes"));
listProducts(groupByCategory("babyClothes"));


listProducts(getByOriginCountry("France"));


console.log(findMostExpensiveProduct(clothesWarehouse));
console.log(findCheapestProduct(clothesWarehouse));


listProducts(identifyIntervalProducts(clothesWarehouse, 500, 600));




