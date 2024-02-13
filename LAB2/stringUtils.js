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
  if (str1 === "undefined" || str2 === "undefined") throw "we need input"
  if(typeof(str1) !== "string" || typeof(str2) !== "string") throw "we only accept string"
  if(str1.length<5 || str2.length<5) throw "enter a string with atleast 5 char"
  if(str1.trim().length === 0 || str2.trim().length === 0) throw "you cant enter just string "

  let max =0
  let min =0
  for (let i = 0; i<str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      let commonstring=0
       


      
        
        while (str1[i + commonstring]===str2[j+commonstring] && (i+commonstring)< str1.length && (j+commonstring)<str2.length) {
          commonstring++; 
          
          

        }
        if (commonstring > max) {
        max = commonstring;
        min = i; 
           
        }
        
      
        
      
      
      
    }
    
    
  }

  
  
  //console.log(str1.substring(min,max))
  return str1.substring(min,max);
};

export let palindromeOrIsogram = (arrStrings) => {

  const output ={}
  for (let index = 0; index < arrStrings.length; index++) {
    const element = arrStrings[index];
    const palindromeR = palindrome(element)
    const isogramR = isogram(element)


    if(palindromeR && isogramR){
      output[element] ="Both"
    }
    else if (palindromeR) {
      output[element]="Palindrome"
      
    }
    else if (isogramR) {
      output[element]="Isogram"
      
    }
    else{
      output[element]="Neither"
    }

    
  }
  //code goes here
  



  return output

};
function palindrome(str){
  const PString = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return PString === PString.split('').reverse().join('')
}

function isogram(str){
  const IString = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const Iset = new Set(IString); //found on stackoverflow
  return Iset.size === IString.length;
}
