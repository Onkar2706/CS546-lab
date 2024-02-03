export const questionOne = (index) => {
  // Implement question 1 here
  if (index==0)
    return 0;
  if (index==1)
    return 1;
  let i = 2
  let num1 = 0
        let num2 = 1
        let num3  
  while(i<=index){
        num3 = num1+num2 
        num1= num2 
        num2 = num3 
        i+=1
    }
    return num3 
  };

export const questionTwo = (arr) => {
  if(!arr){
    return {}
  }
  if(arr===0){
    return{}
  }
  const result = {}
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    result[element]=Prime(element)
    
  }
  return result

};

export const Prime =(element)=>{
  let i ;
  if(element<0){
    return false
  }
  if(element%1 != 0){
    return false
  }
  if(element===0){
    return true
  }
  if(element === 1 ){
    return false
  }
  else{
    for (i=2;i<element;i++){
      if (element%i == 0){
        return false
        
      }
    }
  }

  return true

  
}



export const questionThree = (str) => {
  // Implement question 3 here
   const Str = str.toLowerCase()
   const result ={consonants:0,vowels:0,numbers:0,spaces:0,punctuations:0,specialcharacters:0}
   var specialcharacters = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
   var punctuations = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
   
   
   let countV= 0
   let countC=0
   let countN=0
   let countS=0
   let countP=0
   let countSC=0
   if (Str == "") {
    return result
    
   }
   for (let index = 0; index < Str.length; index++) {
    const element = Str[index];
    
    if (element == 'a' || element == "e" || element == "i" || element == "o" || element == "u") {
      countV++
      
    } 
    if("bcdfghjklmnpqrstvwxyz".includes(element)){
      countC++
    }
    
    
    if (parseInt(element)) {
      countN++
      
    }
    if(element.match(' ')){
      countS++

    }
    if(element.match(specialcharacters)){
      countSC++
    }
    if(element.match(punctuations)){
      countP++

    }
    
    
   }
   result.consonants=countC
   result.vowels=countV
   result.numbers=countN
   result.spaces=countS
   result.punctuations=countP
   result.specialcharacters=countSC



  

  
  


  return result; //return result
};

export const questionFour = (arr) => {
  // Implement question 4 here
  return; //return result
};

//DO NOT FORGET TO UPDATE THE INFORMATION BELOW OR IT WILL BE -2 POINTS PER FIELD THAT IS MISSING.
export const studentInfo = {
  firstName: 'ONKAR',
  lastName: 'MAHAMUNI',
  studentId: '20022743'
};
