//Day 2 Task 3
//write a function to add any number of integers (both ES5 and ES6)

//es5 function
function addInteger(){
    sum = 0;
    for(var i = 0; i < arguments.length; i++){
        if(typeof(arguments[i]) === "number"){
            sum += arguments[i];
        }
    }
    return sum;
}

let inputCheck = addInteger(10,20,30);
console.log(inputCheck);

//es6 function
function addIntegers(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
  }

let inputCheck2 = addIntegers(5,21,36,55);
console.log(inputCheck2);