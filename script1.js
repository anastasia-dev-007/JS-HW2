// Se dă un array cu numere. Scrie un algoritm care va elimina duplicatele din acest array.

// const numbers = new Set();


// numbers.add(15);
// numbers.add(20);
// numbers.add(15);
// numbers.add(20);
// numbers.add(15);
// numbers.add(20);

// console.log(numbers);


// After feedback:

const numbers = [12, 2, 2, 122, 12, 2, 3, 4, 3, 4, 4, 5, 6, 6];//defined a const "numbers" and attributed to it an array

//create a function which removes dublicates
// filter method returns a new array containing only the elements for which the callback function returned true.
// callback function - indexOf method is used to find the first occurrence (index) of the current item in the "numbers". If the index of the current item is equal to the current index, it means that the current occurrence is the first occurrence of that element in the array, so it is retained.
//If the condition numbers.indexOf(item) === index is true, it means the current element is the first occurrence of that element in the array, and it should be retained in the filtered array.
// If the condition numbers.indexOf(item) === index is false, it means the current element is a duplicate, and it should be excluded from the filtered array.
function removeDuplicates(numbers) {
    return numbers.filter((item,index) => numbers.indexOf(item) === index);
}

//function which will contain only unique numbers after duplicates will be removed by "removeDuplicates":
const uniqueNumbers = removeDuplicates(numbers);

//display the result:
console.log(removeDuplicates(uniqueNumbers));



//OR

function removeDuplicates2(numbers) {
    return [...new Set(numbers)];
}
//Set is  a data structure in JavaScript that stores unique values. Using the spread syntax [...new Set(arr)], the unique elements are extracted from the Set and converted back into an array.

//display the result:
console.log(removeDuplicates2());