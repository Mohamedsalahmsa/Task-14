// Array Method

/* 
1. map( )
This method creates a new array with the results of calling a provided function on every element in this array.
// Example
let arr = [1, 2, 3 , 4, 5, 6]
let mapp = arr.map(element => element + 30);
console.log(mapp); // [31, 32, 33, 34, 35, 36];

2.  filter( )
This method creates a new array with only elements that passes the condition inside the provided function.
//Example
let arr = [1, 2. 3, 4, 5, 6]
let filterr = arr.filter(element => element === 2 || element === 4);
console.log(filterr); // [2, 4]

3. forEach( )
This method helps to loop over array by executing a provided callback function for each element in an array.
// Example
const arr = [1, 2, 3,4,5];
arr.forEach(element => {
console.log(element)
})

4. Length: the length property return the (size) of an array

5. join() Method also join all array elements in string and add any thing betweent array element

6. toString() Converts an array to string of array value

7. pop() method remove the last elements from an array

8. push() method adds a new elements to an array at the end

9. shift() method removes the first array elements and all other elements to lower 

10 unshift() method adds  a new elements to an array ond older elements

11. delete() not use this method - return undefined

12. concat() method create a new array by merging existing array

13. splice() 

The splice() method can be used to add new items to an array:
-- Using splice() to Remove Elements
With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

Example:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
--------------------------------------------------------------


14. slice()  
--------------

The slice() method slices out a piece of an array into a new array.

This example slices out a part of an array starting from array element 1 ("Orange"):

Example
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);

Note
The slice() method creates a new array.

The slice() method does not remove any elements from the source array.

This example slices out a part of an array starting from array element 3 ("Apple"):

Example
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3);


*/

