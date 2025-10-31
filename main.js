
//1


const masivi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 2;

while ( i < masivi.length) {
  console.log(masivi[i]);
  i +=3;
}


//2
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//3 
const names = ['John', 'Bob', 'Nick', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob'];
const result = [];

for (let i = 0; i < names.length; i++) {
  if (names[i] !== 'Bob') {
    result.push(names[i]);
  }
}

console.log(result);

//4

// ?????????????????


//5

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}


fizzBuzz();


//6

function factorialCalculator(number) {
  let result = 1;

  for (let i = 1; i <= number; i++) {
    result *= i;
  }
console.log(result);
}

factorialCalculator(18);


//7

//??????????


//8
function blankStringChecker(testString) {
  if (testString.trim() === "") {
    return "This string is blank";
  } else {
    return "This string is not blank";
  }
}

console.log(blankStringChecker(""));         
console.log(blankStringChecker("   "));       
console.log(blankStringChecker("hello"));     


//9
function stringToArray(testString) {
  return testString.replace(/[.,!?]/g,"")
  .split(" ")
  .filter(word => word !== "");
}



//10 ??????????

//11 ??????????

//12

const calculator = {
  num1: 15,
  num2: 10,

  add: function() {
    return this.num1 + this.num2;
  },

  subtract: function() {
    return this.num1 - this.num2;
  },

  multiply: function() {
    return this.num1 * this.num2;
  },

  divide: function() {
    return this.num1 / this.num2;
  }
};


console.log("Addition:", calculator.add());       
console.log("Subtraction:", calculator.subtract()); 
console.log("Multiplication:", calculator.multiply()); 
console.log("Division:", calculator.divide());    

