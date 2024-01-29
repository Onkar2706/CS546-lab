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
  // Implement question 2 here
  return; //return result
};

export const questionThree = (str) => {
  // Implement question 3 here
  return; //return result
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
