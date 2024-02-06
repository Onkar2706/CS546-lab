import * as lab1 from './lab1.mjs';
//QuestionOne
console.log(lab1.questionOne(0))
console.log(lab1.questionOne(7.5))
console.log(lab1.questionOne(-1))
console.log(lab1.questionOne(5))
console.log(lab1.questionOne(7))
console.log(lab1.questionOne(23)) 
console.log(lab1.questionOne(105))
console.log(lab1.questionOne(10))
console.log(lab1.questionOne(2.5))

//QuestionTwo
console.log(lab1.questionTwo([5,3,10]))
console.log(lab1.questionTwo([]));
console.log(lab1.questionTwo([-1,-5,-10]))
console.log(lab1.questionTwo([4.5,8.7]))
//console.log(lab1.questionTwo)

//Question3
console.log(lab1.questionThree("The quick brown fox jumps over the lazy dog.")); 
// returns and then outputs: {consonants: 24, vowels: 11, numbers: 0, spaces: 8, punctuation: 1, specialCharacters: 0}

console.log(lab1.questionThree("How now brown cow!!!"));
// returns and then outputs: {consonants: 10, vowels: 4, numbers: 0, spaces: 3, punctuation: 3, specialCharacters: 0}


console.log(lab1.questionThree("One day, the kids from the neighborhood carried my mother's groceries all the way home. You know why? It was out of respect."));
// returns and then outputs: {consonants: 61, vowels: 36, numbers: 0, spaces: 22, punctuation: 5, specialCharacters: 0}


console.log(lab1.questionThree("CS 546 is going to be fun & I'm looking forward to working with you all this semester!!" )); 
// returns and then outputs: {consonants: 40, vowels: 23, numbers: 3, spaces: 17, punctuation: 3, specialCharacters: 1}

console.log(lab1.questionThree("")); 
// returns and then outputs: {consonants: 0, vowels: 0, numbers:0, spaces: 0, punctuation: 0, specialCharacters: 0}
console.log(lab1.questionFour([]));
//returns and then outputs: []

console.log(lab1.questionFour([1, 1, 1, 1, 1, 1]));
//returns and then outputs: [1]
console.log(lab1.questionFour([1, '1', 1, '1', 2]));
// returns and then outputs: [1, '1', 2]
console.log(lab1.questionFour([3, 'a', 'b', 3, '1']));
// returns and then outputs: [3, 'a', 'b', '1']
console.log(lab1.questionFour([]));
//returns and then outputs: []



//TODO: Write and call each function in lab1.js 5 times each, passing in different input
