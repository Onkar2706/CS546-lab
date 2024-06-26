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

const strings1 = ["level", "Racecar", "Palindrome", "Isogram"]; 
const results1 = palindromeOrIsogram(strings1); 
console.log(results1);
//returns and then outputs:
//{ "level": "Palindrome", "Racecar": "Palindrome", "Palindrome": "Isogram", "Isogram": "Isogram" }

const strings2 = ["hello", "world", "Java", "Python"]; const 
results2 = palindromeOrIsogram(strings2); 
console.log(results2);
//returns and then outputs
//{ "hello": "Neither", "world": "Isogram", "Java": "Neither", "Python": "Isogram" }

const strings3 = ["abba", "abcd", "Is it OK?", "No lemon, no melon", "a"]; 
const results3 = palindromeOrIsogram(strings3); 
console.log(results3);
//returns and then outputs
//{ "abba": "Palindrome", "abcd": "Isogram", "Is it OK?": "Neither", "No lemon, no melon": "Palindrome", "a": "Both" }
//returns and then logs:
//{ "Madam": "Palindrome", "Lumberjack": "Isogram", "He did, eh?": "Palindrome", "Background": "Isogram", "Taco cat? Taco cat.": "Palindrome", "Invalid String": "Neither" }



const arrayOfObjects1 = [ { a: 12, b: 8, c: 15, d: 12, e: 10, f: 15 }, { x: 5, y: 10, z: 15 }, { p: -2, q: 0, r: 5, s: 3.5 }, ]; 
const statsResult1 = objectStats(arrayOfObjects1); 
console.log(statsResult1)
// Expected Result:{ mean: 8.346, median: 10, mode: 15, range: 17, minimum: -2, maximum: 15, count: 13, sum: 108.5 }
const arrayOfObjects2 = [ { p: 10, q: 15, r: 20 }, { x: -5, y: 8, z: 10 }, { a: 5, b: 5, c: 5 }, ]; 
const statsResult2 = objectStats(arrayOfObjects2); 
console.log(statsResult2)
// Expected Result:{ mean: 8.111, median: 8, mode: 5, range: 25, minimum: -5, maximum: 20, count: 9, sum: 73 }
const arrayOfObjects3 = [ { alpha: 3.5, beta: 7.2, gamma: 4.8 }, { x: 0, y: 0, z: 0 }, { p: -2, q: -8, r: -5 }, ]; 
const statsResult3 = objectStats(arrayOfObjects3); 
console.log(statsResult3)
// Expected Result: { mean: 0.056, median: 0, mode: 0, range: 15.2, minimum: -8, maximum: 7.2, count: 9, sum: 0.5 }



const obj1 = { key1: "value1", key2: { nestedKey: "nestedValue", arrayKey: [1, 2, 3], }, }; 
const obj2 = { key1: "value1", key2: { nestedKey: "differentValue", arrayKey: [1, 2, 4], }, key3: "newKey", }; 
const differences = nestedObjectsDiff(obj1, obj2);
console.log(differences)


const obj1_1 = { a: 1, b: { c: 2, d: [3, 4] }, e: "hello" }; 
const obj2_1 = { a: 1, b: { c: 2, d: [3, 5] }, f: "world" }; 
const differences1 = nestedObjectsDiff(obj1_1, obj2_1); // Expected Result: { b: { d: [3, 5] }, e: undefined, f: "world" }
console.log(differences1)

const obj3 = { x: { y: { z: 1 } } }; 
const obj4 = { x: { y: { z: 1 } } }; 
const differences2 = nestedObjectsDiff(obj3, obj4); // Expected Result: {} // Both objects are identical, so no differences are found.
console.log(differences2)



const object1 = { a: 3, b: 7, c: "5" };
const object2 = { b: 2, c: "8", d: "4" };
const object3 = { a: 5, c: 3, e: 6 };
const resultMergedAndSummed = mergeAndSumValues(object1, object2, object3);
console.log(resultMergedAndSummed);
// Expected Result: { a: 8, b: 9, c: 16, d: 4, e: 6 }



// import { arrayPartition, arrayShift, matrixOne } from "./arrayUtils.js";
// import {swapChars,longestCommonSubstring, palindromeOrIsogram} from "./stringUtils.js";
// import { objectStats, mergeAndSumValues, nestedObjectsDiff } from "./objectUtils.js";
try {
   const myarr = [13, 29, 2, 55, 6];
   const partitionFunc = (num) => num > 15;
   arrayPartition(myarr, partitionFunc);
   console.log("arrayPartition passed successfully");
}
catch (e) {
   console.log("arrayPartition failed test case.");
}
try {
   const myarr = ["    apple    ", "banana", "cherry", "date"];
   const partitionFunc = 6;
   arrayPartition(myarr, partitionFunc);
   console.log("arrayPartition did not error");
}
catch (e) {
   console.log("arrayPartition failed successfully");
}
////////////////////////////////////////////////////
try {
   arrayShift([3, 4, 5, 6, 7], 3);
   console.log("arrayShift passed successfully");
}
catch (e) {
   console.log("arrayShift failed test case");
}
try {
   arrayShift(["Hello", true, 5, "Patrick", "Goodbye"])
   console.log("arrayShift did not error");
}
catch (e) {
   console.log("arrayShift failed successfully");
}
/////////////////////////////////////////////////////////////
try {
   matrixOne([[2, 2, 2], [2, 0, 2], [2, 2, 2]]);
   console.log("matrixOne passed successfully");
}
catch (e) {
   console.log("matrixOne failed test case");
}
try {
   matrixOne([[1, 2, 0], [3, 5, 4], [1, 8, 0, 5]]);
   console.log("matrixOne did not error");
}
catch (e) {
   console.log("matrixOne failed successfully");
}
///////////////////////////////////////////////////////////////
try{
   swapChars("Patrick", "Hill");
   console.log("swapChars passed successfully");
}
catch(e){
   console.log("swapChars failed test case");
}
try{    
   swapChars("hello", "bro");
   console.log("matrixOne did not error");
}  
catch(e){
   console.log("swapChars failed successfully");
}
/////////////////////////////////////////////////////////////
try{
   const str1 = "abcdefgxyz";
   const str2 = "cdefg";
   const commonSubstring = longestCommonSubstring(str1, str2);
   console.log("longestCommonSubstring passed successfully");
}
catch(e){
   console.log("longestCommonSubstring failed test case");
}
try{
   const str1 = "programming";
   const str2 = 7743;
   const commonSubstring = longestCommonSubstring(str1, str2);
   console.log("longestCommonSubstring did not error");
}
catch(e){
   console.log("longestCommonSubstring failed successfully");
}
///////////////////////////////////////////////////////////////
try{
   const checkStrings = ["Madam", "Lumberjack", "He did, eh?", "Background", "Taco cat? Taco cat.", "Invalid String"];
   const results = palindromeOrIsogram(checkStrings);
   console.log("palindromeOrIsogram passed successfully");
}
catch(e){
   console.log("palindromeOrIsogram failed test case");
}
try{
   const strings1 = ["level", 8821, "Palindrome", "Isogram"];
   const results1 = palindromeOrIsogram(strings1);
   console.log("palindromeOrIsogram did not error");
}
catch(e){
   console.log("palindromeOrIsogram failed successfully");
}
/////////////////////////////////////////////////////////////////////
try{
   const myarr = [ { p: 10, q: 15, r: 20 }, { x: -5, y: 8, z: 10 }, { a: 5, b: 5, c: 5 }, ];
   objectStats(myarr);
   console.log("objectStats passed successfully");
}
catch(e){
   console.log("objectStats failed test case");
}
try{
   const myarr = [ { alpha: 3.5, beta: 7.2, gamma: 4.8 }, { x: "hello", y: 0, z: 0 }, { p: -2, q: -8, r: -5 }, ];
   console.log(objectStats(myarr));
   
   console.log("objectStats did not error");
}
catch(e){
   console.log("objectStats failed successfully");
}
////////////////////////////////////////////////////////////////////
try{
   const obj1 = { key1: "value1", key2: { nestedKey: "nestedValue", arrayKey: [1, 2, 3], }, };
   const obj2 = { key1: "value1", key2: { nestedKey: "differentValue", arrayKey: [1, 2, 4], }, key3: "newKey", };
   const differences = nestedObjectsDiff(obj1, obj2);
   console.log(differences);
   // Example Output:   { key2: { nestedKey: "differentValue", arrayKey: [1, 2, 4], }, key3: "newKey" }
}
catch(e){
   console.log(e);
}
try{
   const obj1 = { a: 1, b: { c: 2, d: [3, 4] }, e: "hello" };
const obj2 = { a: 1, b: { c: 2, d: [3, 5] }, f: "world" };
const differences1 = nestedObjectsDiff(obj1, obj2); // Expected Result: { b: { d: [3, 5] }, e: undefined, f: "world" }
console.log(differences1);
}
catch(e){
   console.log(e);
}
try{
   const obj3 = { x: { y: { z: 1 } } };
const obj4 = { x: { y: { z: 1 } } };
const differences2 = nestedObjectsDiff(obj3, obj4); // Expected Result: {} // Both objects are identical, so no differences are found.
console.log(differences2);
}
catch(e){
   console.log(e);
}
//////////////////////////////////////////////////////////////////////
try{
   const object1 = { a: 3, b: 7, c: "5" };
   const object2 = { b: 2, c: "8", d: "4" };
   const object3 = { a: 5, c: 3, e: 6 };
   mergeAndSumValues(object1, object2, object3);
   console.log("mergeAndSumValues passed successfully");
}
catch(e){
   console.log("mergeAndSumValues failed test case");
}
try{
   const obj1 = { a: 1, b: 2, c: 3 };
   const obj2 = { b: 3, c: "Hello", d: 5 };
   const obj3 = { a: 2, c: 1, e: "World" };
   mergeAndSumValues(obj1, obj2, obj3); // Expected Result: { a: 3, b: 5, c: 8, d: 5, e: 6 }
   console.log("mergeAndSumValues did not error");
}
catch(e){
   console.log("mergeAndSumValues failed successfully");
}
 