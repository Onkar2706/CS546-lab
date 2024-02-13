/* TODO: Import the functions from your three modules here and write two test cases for each function.. You should have a total of 18 test cases. 
do not forget that you need to create the package.json and add the start command to run app.js as the starting script*/
import { arrayPartition,arrayShift,matrixOne } from "./arrayUtils.js";
import {swapChars,longestCommonSubstring,palindromeOrIsogram}from "./stringUtils.js";
import { objectStats, nestedObjectsDiff,mergeAndSumValues } from "./objectUtils.js";

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


console.log(matrixOne([[2,2,2],[2,0,2],[2,2,2]])) //returns [[2,1,2],[1,1,1],[2,1,2]] 
console.log(matrixOne([[0,1,2,0],[3,5,4,2],[1,7,3,5]])) //returns [[1,1,1,1],[1,5,4,1],[1,7,3,1]] 
try {
    matrixOne([[0,1,2,0],[3,5,4]])
    
} catch (e) {
    console.log(e)
    
}
//matrixOne([[0,1,2,0],[3,5,4]])// throws error
//matrixOne([])// throws error
try {
    matrixOne([])// throws error
    
} catch (e) {
    console.log(e)
    
}




console.log(swapChars("Patrick", "Hill")); //Returns "Hillick Patr"
console.log(swapChars("hello", "world")); //Returns "worlo helld"
try {
    console.log(swapChars("Patrick", "")); //Throws error
    
} catch (e) {
    console.log(e)

    
}


try {
    swapChars(); // Throws Error
    
} catch (e) {
    console.log(e)

    
}

try {
    swapChars("John") // Throws error
    
} catch (e) {
    console.log(e)

    
}

try {
    swapChars ("h", "Hello") // Throws Error
    
} catch (e) {
    console.log(e)

    
}

try {
    swapChars ("h","e") // Throws Error
    
} catch (e) {
    console.log(e)

    
}




try {
   console.log( swapChars ("h","e")) // Throws Error
    
} catch (e) {
    console.log(e)
    
}

try {
    console.log(swapChars("undefined","undefined"))
    
} catch (e) {
    console.log(e)
    
}




// common substring 

const str1 = "abcdxyz"; 
const str2 = "xyzabcd"; 
console.log(longestCommonSubstring(str1, str2)); // Expected Result: "abcd"

 const str1_1 = "programming"; 
 const str2_1 = "programmer"; 
 console.log(longestCommonSubstring(str1_1, str2_1)); // Expected Result: "programm"

 const str1_2 = "abcdef"; 
 const str2_2 = "123456"; 
 console.log(longestCommonSubstring(str1_2, str2_2)); // Expected Result: "" // No common substring in this case

 const str1_3 = "abcdef"; 
 const str2_3 = "acdfgh"; 
 console.log(longestCommonSubstring(str1_3, str2_3)); // Expected Result: "cd"


 const checkStrings = (["Madam", "Lumberjack", "He did, eh?", "Background", "Taco cat? Taco cat.", "Invalid String"]); 
const results = palindromeOrIsogram(checkStrings); 
console.log(results);
//returns and then logs:
//{ "Madam": "Palindrome", "Lumberjack": "Isogram", "He did, eh?": "Palindrome", "Background": "Isogram", "Taco cat? Taco cat.": "Palindrome", "Invalid String": "Neither" }



 