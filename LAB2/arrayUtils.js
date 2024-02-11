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

  if (typeof(arr)=="undefined" || !Array.isArray(arr)) throw "Array is of not proper type"
  if(!Array.isArray(arr)) throw "Not an array"
  if (arr.length<2) throw "Array do not have sufficient elements"
  if (typeof(n)=="undefined" || typeof(n) !=="number") throw "Array is of not proper type"
  if(!Number.isInteger(n)) throw "should be positive negative or zero number"

  //code goes here
  if (n===0) {
    return arr
    
  }

  let range = arr.length
  let shift =n%range

  let ResultArray = []
  let i=0
  if (shift>0) {
    while (i<range) {
      ResultArray[(i+shift)%arr.length]=arr[i]
      i++
      
    }
    
  }
  else{
    while(i<arr.length){
      ResultArray[(i + range + shift)%arr.length] = arr[i]
      i++;
    }
  }
  return ResultArray

};

export let matrixOne = (matrix) => {
  //code goes here

  let colSize=matrix[0].length

  for (let rowSize  = 0; rowSize < matrix.length ; i++) {
    if (matrix[rowSize].length !==colSize) throw "Matrix row and column are not equal"

    for (let index = 0; index < matrix[rowSize].length; index++) {
      if (typeof(matrix[rowSize][index]) !== 'number') {
        throw "please enter a number in all matrices"
        
      }
      
    }
      
  }

  let Row = new Set();
  let Col = new Set()

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0;  j < matrix[i].length; j++) {
      if (matrix[i][j]===0) {
        Row.add(i)
        Col.add(j)
        
      }
      
    }
    
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0;  j < matrix[i].length; j++) {
      if (Row.has(i)||Col.has(j)) {
        
        matrix[i][j]==1
      }
    }
  }


};
