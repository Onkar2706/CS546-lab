/* Todo: Implment the functions below and then export them
      using the ES6 exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/

export let arrayPartition = (arrayToPartition, partitionFunc) => {

  if (typeof(arrayToPartition)=="undefined" || !Array.isArray(arrayToPartition)) throw "Array is of not proper type"
    
  
  if (arrayToPartition.length<2) throw "Array do not have sufficient elements"
  if(typeof(partitionFunc)!== "function") throw "Enter a valid function"


  const arraySubFirst=[]
  const arraySubSecond=[]
  for (let index = 0; index < arrayToPartition.length; index++) {
    const element = arrayToPartition[index];
    if (partitionFunc(element)) {

      arraySubFirst.push(element)
      
      
    }
    else{
      arraySubSecond.push(element)
    }

    // return[arraySubFirst,arraySubSecond]
    
  }
  return[arraySubFirst,arraySubSecond]
  //code goes here
};

export let arrayShift = (arr, n) => {
  //code goes here
};

export let matrixOne = (matrix) => {
  //code goes here
};
