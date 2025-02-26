// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We define the variable name as equal to the string 'Dane'
// We enter a conditional where if the variable name is equal to Mary then we would console log 'Hi, Mary!'
// If variable is anything other than Mary, then we would console log 'How do you do?'
//'Dane' does not equal 'Mary' so we console log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//We are creating a variable named secret that is undefined and a variable named code that is equal to number 123.
//We then enter a conditional that checks if the code is 123. If the code is 123 then secret gets the strng 'super' and code's number value is doubled.
//If the value of code is greater than 250, then the variable secret is set to the string 'duper'
//We then console log the variable secret which is either string 'super' or 'duper'. Code is defined as number 123 so we console log 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//First we are defining the variables isStudent with a boolean value of true, age as number 34, and zip as number 55407.
//next we enter a conditional that is checking more than 1 condition at a time. If the variable isStudent is true AND the number zip is greater than 80000 then we would console log 'You're a student on the West Coast!'
//If both of those arent satisfied then we are checking if isStudent is false OR the variable age number is less than 30. If either one of those is satisfied then we console log 'What are your hobbies?'
//if niether of those conditions were met then we check if isStudent is true then we console log 'Welcome to Prime!'
// If NONE of those conditions are met, then we are left with all other inputs giving us console log 'How about the weather?' (program enters generic conversation mode)
//because our zip is not greater than 80000, our age is not less than 30, and isStudent is set as true, we console log 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/* FIX - colorOne and colorTwo are swapped, should be:
// let colorOne = 'blue';
// let colorTwo = 'red';

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

/* FIX - missing colorTwo set to 'purple'
// Should be:
//if (mix === true) {
  colorOne = 'purple';
  colorTwo = 'purple';
}

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'


//FIX - time is set to a constant, should be a variable.
// Should be:
//let time = 4;


/*
let temp = 40;
const time = 4;

//FIX - currently an OR function, should be AND.
//Should be:
// if (temp > 39 && time >= 4) {
  console.log('throw away the food!');

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

//FIX - minAge is a constant, not a variable.
// Should be:
// let minAge = 21;

/*
let age = 21;
const minAge = 21;

// FIX - currently the reverse of what is described is writen even though the outcome will technically be the same.
// Should be:
// if(age >= minAge) {
  console.log('enter');
} else {
  console.log('no entry');
}

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
