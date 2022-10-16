console.log("connected to hello world")

// in line comment
/**  multi line comment
// const maxOfThree = (num1, num2, num3) => {
//     const array = [num1, num2, num3]
//     array.sort((a,b)=>{
//       return b - a
//     })
//     return array[0]
//   }

//   console.log(maxOfThree(12,20,9))
//   const sumArray = array =>{
//     let sum = 0;
//     for (let i = 0; i < array.length; i++){
//       sum += array[i];
//     }
//     return sum
//   }
//   console.log(sumArray([2,4,5]))

/*
    To open console in chrome press Ctrl + Shift + J (Cmd + Option + J on Mac)
*/

/* 
    Data Types: undefined. null, boolean, string, symbol, number, and object
    undefined - is something that hasn't defined.
    null - nothing set this to be something and thing is nothing
    boolean - true or false
    symbols is an immutable primitive value that is unique
    object can store a lot of different key value pairs
    const is a variable should never change
*/

/* Storing Values with Assignment Operator */
/* end all lines in JS with a semicolon*/

// let a;
// let b = 2;
// console.log(a);
// a = 7;

// b = a;
// console.log(a);

/* Initializing Variables w/Assignment Operator */
//  let a = 5;
//  let b = 10 ;
//  let c = "I am a string";

//  a = a + 1;
//  b = b + 5;
//  c = c + " String! "
//  console.log (a);
//  console.log (b);
//  console.log (c);
 
// Declarations
//  let studlyCapVar;
//  let properCamelCase;
//  let titleCaseOver;
// Assignment
//  studlyCapVar = 10;
//  properCamelCase = "A String";
//  titleCaseOver = 9000;

//  console.log(studlyCapVar,properCamelCase, titleCaseOver)

 //sum
// let sum = 10 + 10;
// console.log(sum)

//add
// let difference = 45 - 30;
// console.log(difference)

//multi
// let product = 8 * 10;
// console.log(product);

//dividing

// let quotient = 66 / 3;
// console.log(quotient);

//increment number
// let myIncr  = 87;

//only change code below this line
// myIncr =  400;
// myIncr++
// console.log(myIncr);

//let ourDecimal = 5.7;

//only change code below
//let myDecimal = 0.009;

// let product = 2.0 * 2.5;
// console.log(product)

// let quotient = 4.4 / 4.0;
// console.log(quotient)

// let remainder;
// remainder = 11 % 3;
// console.log(remainder)



//There are two ways to create an array...
//let nums = new Array(2, 4, 18);
// using Array Literal syntax (recommended best practice)
// let nums = [2, 4, 18];
// console.log(nums)

//Accessing Elements in an Array

/*We access elements in an array using square bracket notation, passing in the "index" (position) of the element you want to access:*/
 let movies = ['Caddyshack', 'Interstellar', 'Scarface'];
 let firstMovie = movies[0];  // 'Caddyshack'

// console.log(firstMovie)
/*
Since when is 0the first item in anything? Since computer science came along!
Internally, programs prefer to think in terms of "offsets" in memory. Thus, we access the first item using an offset of zero - arrays are "zero-based" in JS.
*/

/*
    We can add elements to the end of an array using the push method:
    Note that more than one element can be added at a time.
*/

// movies.push('Trading Places', 'Antitrust');
// console.log(movies)
//We can also add to the front of an array with unshift:
//movies.unshift('Star Wars');
//console.log(movies)
/* Removing Elements from an Array */
//let movie = movies.pop();
//We can also remove from the front of an array with shift:
// movies = movies.shift();
// console.log(movies)


//Compound Assignment w/ augmented addition
// let a = 3;
// let b = 17;
// let c = 12;
//only modify code below

//a = a + 12;
//a += 12
//b = 9 + b; // b += 9
//c = c + 7; // c += 7
//console.log(a)

//Compound Assignment w/ augmented addition
//a = a - 6; // a-= 6
//b = b - 15; // b-= 15;
//c = c - 1; // c -= 1


//Remembering unshift& shift
//push& pop are easy to remember, but unshift& shift are not so clear
//The "longer" named methods do the same thing (add to an array)
//unshift -> [...] <- push
//The "shorter" named ones remove
//shift <- [...] -> pop/
/*
Add/Remove Elements to/from Anywhere in the Array
The Array.prototype.splice method is capable of adding and/or removing any number of elements to/from an array with a single line of code!
splice has a syntax of: array.splice(start, deleteCount, newItem1, newItem2...)
Examples of adding/removing elements with splice:
*/

// movie => [ 'Caddyshack', 'Interstellar', 'Scarface', 'Trading Places' ]
//let removedMovies = movies.splice(3, 1, 'Spaceballs', 'Alien');
//console.log(movies)
// movies => [ 'Spaceballs', 'Alien' ]
// removedMovies = movies.splice(1, 0, 'The Sting');
// removedMovies => []
// movies => [ 'Spaceballs', 'The Sting', 'Alien' ]
// console.log(movies)
// movies.forEach(function(movie) {
// 	console.log(movie);
// });
//You can also access the index of each iteration:
// movies.forEach(function(movie, idx) {
// 	console.log(idx + ') ' + movie);
// });

/*
Note that it's a good practice to name the parameter that accepts each element as the singular of the array, or simply the first letter of the array variable (movie or m for the example above)
*/

//ES2015 provides the for...ofloop for iterating over the elements of arrays and other iterables such as strings:
// for(let movie of movies) {
// 	if (movie === 'The Last Airbender') break;
// 	console.log(movie);
// }


//The slice method always returns a new array and does not mutate (change) the source array
//movies => [ 'Spaceballs', 'The Sting', 'Alien' ]
//console.log(movies)
//let lastTwoMovies = movies.slice(1, 3); // ['The Sting, 'Alien']
// console.log(lastTwoMovies)

//Copy All of an Array

// movies => [ 'Spaceballs', 'The Sting', 'Alien' ]
// let moviesCopy = [...movies];
// console.log(moviesCopy)

/*
    Day-1
    1. Create a function
    2. Call the function
*/
// Create 
// function fun() {
//     console.log('this is a function');
// }

// call
//fun();

/*
    Let's create a function that tale in a name and says hello followed by your name

    For ex:
    Name: 'Phong'
    Return: "hello Phong"
*/


function greeting(yourName) {
    let result = 'Hello' + ' ' + yourName; // String concatenation
    console.log(result);
}

let sumName = prompt('What is your name?');

greeting(sumName);

// How do arguments work in functions?
// How do we add 2 numbers together in a function?

function sumNumbers(num1, num2){
    let result = num1 + num2;
    console.log(result);
}
sumNumbers(10, 10);