/* Todo: Implment the functions below and then export them
      using the ES6 exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/

let arrayPartition = (arrayToPartition, partitionFunc) => {

  if (typeof(arrayToPartition)=="undefined" && !Array.isArray(arrayToPartition)) { throw "Array is of not proper type"
    
  }
  if (arrayToPartition.length<2) throw "Array do not have sufficient elements"
  if(typeof(partitionFunc)!== "function") throw "Enter a valid function"


  arraySubFirst=[]
  arraySubSecond=[]
  for (let index = 0; index < arrayToPartition.length; index++) {
    const element = array[index];
    if (partitionFunc(element)) {

      arraySubFirst.push(element)
      
    }
    else{
      arraySubSecond.push(element)
    }
    
  }
  //code goes here
};

let arrayShift = (arr, n) => {
  //code goes here
};

let matrixOne = (matrix) => {
  //code goes here
};
