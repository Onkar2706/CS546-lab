/* Todo: Implment the functions below and then export them
      using the ES6 exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/

export let objectStats = (arrObjects) => {


  if(!Array.isArray(arrObjects)) throw "Enter a Array"
  for (let index = 0; index < arrObjects.length; index++) {
    const element = arrObjects[index];
    if(typeof element !== "object" || Array.isArray(element)  || element === null || Object.keys(element).length === 0) throw "Please enter something into array element"


    for (let index = 0; index < element.length; index++) {
      const e = element[index];
      if (typeof e !== "number" || isNaN(e)) throw "Please enter number is object"
      
    }
    
  }

  //Code goes here

  let sum =0
  let count =0 
  let max =-Infinity
  let min =Infinity
  let numbers =[]
  for (let index = 0; index < arrObjects.length; index++) {
    const element = arrObjects[index];

    for (const i in element) {
      const val = element[i];
      

       if (typeof val === "number") {

        sum = sum + val
        count++

       if (val<min) {
         min = val
        
       }

       if (val>max) {
        max=val
        
       }

       numbers.push(val)
        
       }


    }
    
  }

  //if (count===0) throw "no number found"

  let mean = sum/count
  numbers.sort((a,b)=> a - b) /// found on stackoverflow

  const mid = Math.floor(numbers.length/2)

  let median = numbers.length%2 !== 0 ? numbers[mid] : (numbers[mid-1]+numbers[mid])/2  /// found on stackoverflow

  let mode = 0
  let z =0
  const counts ={}
  for (let j = 0; j < numbers.length; j++) {
    counts[numbers[j]]= (counts[numbers[j]]|| 0)+1

    if (counts[numbers[j]]>z) {
      mode =numbers[j]
      z=counts[numbers[j]]
      
    }
    
  }
  let range = max-min 


  sum = Math.round(sum *1000)/1000;
  mean=Math.round(mean*1000)/1000;
  median=Math.round(median*1000)/1000;
  mode = Math.round(mode*1000)/1000;
  range=Math.round(range*1000)/1000;
  min=Math.round(min*1000)/1000;
  max=Math.round(max*1000)/1000;


  return{
    mean:mean,
    median:median,
    mode:mode,
    range:range,
    minimum:min,
    maximum:max,
    count:count,
    sum:sum

  }
    
  
};

export let nestedObjectsDiff = (obj1, obj2) => {
  const diff = {};
  
  
  for (const key in obj1) {
    const element = obj1[key];
    if (typeof element === 'object' && typeof obj2[key] === 'object') {
      const nestedDiff = nestedObjectsDiff(element, obj2[key]);
      if (Object.keys(nestedDiff).length > 0) {
        diff[key] = nestedDiff;
      }
    } else if (!Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!arrayCheck(obj1[key], obj2[key])) {
        diff[key] = obj2[key];
      }
    } else if (obj1[key] !== obj2[key]) {
      diff[key] = obj2[key];
    }
  }

  
  for (const key in obj2) {
    if (typeof obj1[key] === 'undefined') {
      diff[key] = obj2[key];
    }
  }

  return diff;
};

function arrayCheck(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}






export let mergeAndSumValues = (...args) => {
  //this function takes in a variable number of objects that's what the ...args signifies
};
