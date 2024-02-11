/* TODO: Import the functions from your three modules here and write two test cases for each function.. You should have a total of 18 test cases. 
do not forget that you need to create the package.json and add the start command to run app.js as the starting script*/
import { arrayPartition,arrayShift,matrixOne } from "./arrayUtils.js";
const arrayToPartition1 = [1, 2, 3, 4, 5]; 
const partitionFunc1 = (num) => num % 2 === 0; 
const partitionedArrays1 = arrayPartition(arrayToPartition1, partitionFunc1); // Expected Result: [[2, 4], [1, 3, 5]]
console.log(partitionedArrays1)

const arrayToPartition2 = [10, 15, 20, 25, 30]; 
const partitionFunc2 = (num) => num > 18; 
const partitionedArrays2 = arrayPartition(arrayToPartition2, partitionFunc2); // Expected Result: [[20, 25, 30], [10, 15]]
console.log(partitionedArrays2)

const arrayToPartition3 = ["apple", "banana", "cherry", "date"]; 
const partitionFunc3 = (fruit) => fruit.length >= 6; 
const partitionedArrays3 = arrayPartition(arrayToPartition3, partitionFunc3); // Expected Result: [['banana', 'cherry'], ['apple', 'date']]
console.log(partitionedArrays3)

const arrayToPartition4 = [0, -5, 10, -3, 7]; 
const partitionFunc4 = (num) => num >= 0; 
const partitionedArrays4 = arrayPartition(arrayToPartition4, partitionFunc4); // Expected Result: [[0, 10, 7], [-5, -3]]
console.log(partitionedArrays4)

//ArrayShift


console.log(arrayShift([3,4,5,6,7], 3) )  // returns [5,6,7,3,4]
console.log(arrayShift(["Hello",true, 5,"Patrick","Goodbye"], 4))   // returns [true, 5, "Patrick", "Goodbye", "Hello"]
console.log(arrayShift([1,2,3,4], -2))   // returns [3,4,1,2]
console.log(arrayShift([7,8,9,10], 0)) // returns [7,8,9,10]
try {
    console.log(arrayShift([7,11,15], 3.5)) // throws error
    
} catch (e) {
    console.log(e)
    
}