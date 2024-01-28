export const questionOne = (index) => {
  // Implement question 1 here
  if (index==0)
    return 0;
  if (index==1)
    return 1;
  
 return questionOne(index-1)+ questionOne(index-2); //return result
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
