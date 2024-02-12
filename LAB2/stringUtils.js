/* Todo: Implment the functions below and then export them
      using the ES6 exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/

export let swapChars = (string1, string2) => {


  //code goes here
  if (string1 === "undefined" || string2 === "undefined") throw "we need input"
  if(typeof(string1) !== "string" || typeof(string2) !== "string") throw "we only accept string"
  if (string1.length<4 || string2.length<4) throw "please enter 4 char in both string"

    
  

  let updatedString1 = string2.slice(0,4)+ string1.slice(4)
  let updatedString2 = string1.slice(0,4)+ string2.slice(4)
  return updatedString1 + " " + updatedString2
};

export let longestCommonSubstring = (str1, str2) => {
  //code goes here

  let max =0
  let min =0
  for (let i = 0; str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      
      
    }
    
    
  }
};

export let palindromeOrIsogram = (arrStrings) => {
  //code goes here
};
