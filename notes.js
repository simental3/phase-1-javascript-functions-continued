// Defining a Function Using Function Declaration Example:
console.log(saturdayFun());
function saturdayFun (activity="roller-skate") {        // The ( ="default") uses a default ${}
    return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun());
// Hoisting is possible in this example because of the FUNCTION keyword


// Example of How to Access an Anonymous Function:
const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}
/* vvv Points us to the stored block of work (our function that logs our message) that hasn't
been invoked yet vvv */
console.log(mondayWork);
console.log(mondayWork());      // Invokes our function
// Hoisting NOT possible in this example because of the CONST keyword (same with LET & VAR)

// Additional Lesson Example:
// const fn = function () {
//   console.log("Yet more razzling");
// };
// fn;
// fn();


/* IIFE: Immediately-Invoked Function Expression
(Another way to invoke an anonymous function):  */
let wrapAdjective = function (surround = "*") {
    return function (description = "super") {
        return `You are ${surround}${description}${surround}!`;
    }
};
console.log(wrapAdjective("%")("a dedicated programmer")); // You are %a dedicated programmer%!


const encouragingPromptFunction = wrapAdjective("!!!") 
console.log(encouragingPromptFunction()); // You are !!!super!!!!

// Additional Lesson Example:
// (function (baseNumber) {
//     return baseNumber + 3;
//   })(2); //=> ???

// Additional Lesson Example:
// function outer(greeting, msg = "It's a fine day to learn") {
//     const innerFunction = function (name, lang = "Python") {
//         return `${greeting}, ${name}! ${msg} ${lang}`;
//     };
//     return innerFunction;
// }

// console.log(outer("Hello")("student", "JavaScript"));
//=> "Hello, student! It's a fine day to learn JavaScript"

// Additional Lesson Example:
// function demoChain(name) {
//     const part1 = "hi";
//     return function () {
//       const part2 = "there";
//       return function () {
//         console.log(`${part1.toUpperCase()} ${part2} ${name}`);
//       };
//     };
//   }
  
//   demoChain("Dr. Stephen Strange")()(); //=> HI there Dr. Stephen Strange

// Additional Lesson Example:
// function outer(greeting, msg = "It's a fine day to learn") {
//     const innerFunction = function (name, lang = "Python") {
//         return `${greeting}, ${name}! ${msg} ${lang}`;
//     };
//     return innerFunction;
// }