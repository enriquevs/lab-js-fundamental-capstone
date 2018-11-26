# LAB - JS Fundamentals Capstone

## The Assignment

The purpose of this lab is to test your knowledge for complicated problems of iteration and programmatic problem solving. You will need to apply what you have learned up to this point and you will need to be resourceful solving the problems.

### Learning Objective

After completing that you have a solid understanding of the basics and a good foundation for future learning.

### Setup
```sh
# (1) Go to your  muktek/labs directory and create the `lab--js-fundamentals-capstone` folder for this assignment
cd ~/muktek/labs
mkdir lab--js-fundamentals-capstone
cd lab--js-fundamentals-capstone


# (2) Download the assignment-files with curl from the assignment repo and unzip
curl https://raw.githubusercontent.com/muktek/lab--js-fundamentals-capstone/master/assignment-files.zip > assignment-files.zip

unzip assignment-files.zip
```

### Instructions

The goal of these exercises is to write the logic in the function to solve the problem.   The statements/declarations in the `console.assert(...)` describe the expected output from the function *when provided with a given input* and should evaluate to true if you have written the function correctly.

Here is how you will answer each exercise:

(1) Read the problem

(2) Look at the expected output
- you instructors have written these `console.assert()` statements to ensure that you have written the exercise function correctly

(3) Write the function and the logic

```js
// ++ (1) The problem :

/**
 * makeArrayFromCharacters()
 *
 * Write a function called `makeArrayFromCharacters` that takes
 *  a string and creates an array of characters for each element.
 *
 * You must use a for-loop to solve this problem.
 **/


// ++ (3a) Write the function...
function makeArrayFromCharacters(someString){
  // ++  (3b)   Example solution
  var charactersArray = []
  for(var i = 0; i < someString.length; i++){
    charactersArray.push(someString[0])
  }

  return charactersArray

}


// --------------- Don't Touch ------------------

// ++ (2a) Check the expected behavior
let output1 = makeArrayFromCharacters('hello')
console.assert( output1[0] === 'h' )
console.assert( output1[1] === 'e' )
console.assert( output1[2] === 'l' )
console.assert( output1[3] === 'l' )
console.assert( output1[4] === 'o' )
// => in other words, output1 should be ['h','e','l','l','o']

// ++ (2b)
let output2 = makeArrayFromCharacters('sunshine')
console.assert( output2[0] === 's' )
console.assert( output2[1] === 'u' )
console.assert( output2[2] === 'n' )
console.assert( output2[3] === 's' )
console.assert( output2[4] === 'h' )
console.assert( output2[5] === 'i' )
console.assert( output2[6] === 'n' )
console.assert( output2[7] === 'e' )
// => in other words, output2 should be ['s','u','n','s','h','i','n','e']

// ++ (2c)
let output3 = makeArrayFromCharacters('burrito')
console.assert( output2[0] === 'b' )
console.assert( output2[1] === 'u' )
console.assert( output2[2] === 'r' )
console.assert( output2[5] === 't' )
// => in other words, output3 should be ['b','u','r','r','i','t','o']

```
