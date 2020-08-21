/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
const votingAge = 19;
if (votingAge > 18) {
  console.log(true, "Voting age");
}
//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let myVariable = true;
const newVariable = false;
if (newVariable === false) {
  myVariable = newVariable;
  console.log(myVariable, "Should be false");
}

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let convertString = Number("1999");
console.log(convertString, "convert string to Integer");

//Task d: Write a function to multiply a*b

function multiply(a, b) {
  return a * b;
}

let result = multiply(2, 3);
console.log(result, "Mult");

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

function dogYears(age) {
  return age * 7;
}

let result2 = dogYears(10);
console.log(result2, "Dog years");

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

function dogFeeder(weight, age) {
  if (age > 1) {
    if (weight <= 5) {
      return weight * 0.05;
    } else if (weight >= 6 && weight <= 10) {
      return weight * 0.04;
    } else if (weight >= 11 && weight <= 15) {
      return weight * 0.03;
    } else if (weight > 15) {
      return weight * 0.02;
    }
  } else if (age <= 0.25) {
    return weight * 0.1;
  } else if (age <= 0.6666) {
    return weight * 0.05;
  } else if (age >= 1) {
    return weight * 0.04;
  } else {
    console.log("Something is wrong");
  }
}

let result3 = dogFeeder(15, 1);
console.log(result3, "Dog feeder");

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// const rock = 1;
// const paper = 2;
// const scissors = 3;

// const game = (playerChoice) => {
//   let compChoice = Math.floor(Math.random() * 3) + 1;

//   if (playerChoice === compChoice) {
//     console.log("You and Computer chose the same: \nIts a tie");
//   } else if (playerChoice === 1 && compChoice === 2) {
//     console.log("You chose ROCK, and Computer chose PAPER:\n Computer Wins");
//   } else if (playerChoice === 1 && compChoice === 3) {
//     console.log("You chose ROCK, and Computer chose SCISSORS:\n You Win");
//   } else if (playerChoice === 2 && compChoice === 1) {
//     console.log("You chose PAPER, and Computer chose ROCK:\n You Win");
//   } else if (playerChoice === 2 && compChoice === 3) {
//     console.log(
//       "You chose PAPER, and Computer chose SCISSORS:\n Computer Wins"
//     );
//   } else if (playerChoice === 3 && compChoice === 1) {
//     console.log("You chose SCISSORS, and Computer chose ROCK:\n Computer Wins");
//   } else if (playerChoice === 3 && compChoice === 2) {
//     console.log("You chose SCISSORS, and Computer chose PAPER:\n You Win");
//   }
// };

// game(rock);

// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
const mile = 0.62137;
const kmToMiles = (km) => {
  console.log(km * mile, "Convert Km to miles");
};

kmToMiles(2);
//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
const cent = 30.48;
const feetToCent = (feet) => {
  console.log(feet * cent, "Convert Feet to Centimeters");
};

feetToCent(2);
/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall,
// (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annoyingSong(number) {
  for (let i = number; i > 0; i--) {
    console.log(
      `${i} bottles of soda on the wall, ${i} bottles of soda, take one down, pass it around ${
        i - 1
      } bottles of soda on the wall. `
    );
  }
}

annoyingSong(5);
/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F
function grade(num) {
  if (num >= 90 && num <= 100) {
    return "A";
  } else if (num >= 80 && num <= 89) {
    return "B";
  } else if (num >= 70 && num <= 79) {
    return "C";
  } else if (num >= 60 && num <= 69) {
    return "D";
  } else {
    return "F";
  }
}
let gradeResult = grade(99);
console.log(gradeResult, "Grade");
/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method
function countVowels(str) {
  let newStr = str.toLowerCase().split("");
  let vowelCount = 0;
  for (let i = 0; i < str.length; i++)
    if (
      newStr[i].includes("a") ||
      newStr[i].includes("e") ||
      newStr[i].includes("i") ||
      newStr[i].includes("o") ||
      newStr[i].includes("u")
    ) {
      vowelCount = vowelCount + 1;
    }
  return vowelCount;
}

let resultVowel = countVowels("AeIoU");
console.log(resultVowel, "Result Vowel");
/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
const rock = 1;
const paper = 2;
const scissors = 3;

const gameRPS = () => {
  let playerChoice = prompt(
    "PLease choose 1 for rock, 2 for paper or 3 for scissors"
  );
  let player = parseInt(playerChoice);
  console.log(player, "Players choice");

  let compChoice = Math.floor(Math.random() * 3) + 1;
  console.log(compChoice, "Computers choice");

  if (player === compChoice) {
    console.log("You and Computer chose the same: \nIts a tie");
  } else if (player === 1 && compChoice === 2) {
    console.log("You chose ROCK, and Computer chose PAPER:\n Computer Wins");
  } else if (player === 1 && compChoice === 3) {
    console.log("You chose ROCK, and Computer chose SCISSORS:\n You Win");
  } else if (player === 2 && compChoice === 1) {
    console.log("You chose PAPER, and Computer chose ROCK:\n You Win");
  } else if (player === 2 && compChoice === 3) {
    console.log(
      "You chose PAPER, and Computer chose SCISSORS:\n Computer Wins"
    );
  } else if (player === 3 && compChoice === 1) {
    console.log("You chose SCISSORS, and Computer chose ROCK:\n Computer Wins");
  } else if (player === 3 && compChoice === 2) {
    console.log("You chose SCISSORS, and Computer chose PAPER:\n You Win");
  } else {
    console.log("something went wrong");
  }
};
gameRPS();
