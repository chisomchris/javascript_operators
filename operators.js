let num1 = 10, num2 = 5;

console.log('num1: ', num1)
console.log('num2: ', num2)

// addition
console.log('num1 + num2: ', num1 + num2)

// subtraction
console.log( 'num1 - num2: ', num1 - num2)

// multiplication
console.log( 'num1 * num2: ', num1 * num2)

// division
console.log( 'num1 / num2: ', num1 / num2)

// modulo
console.log( 'num1 % num2 (modulo): ', num1 % num2)

// exponentation
console.log( 'num1 ** num2 (exponentation): ', num1 ** num2)

// Increment
console.log( 'num1: ', num1)

    // pre-increment
    console.log( 'num1: ', ++num1)

    // post-increment
    console.log( 'num1: ', num1++)

console.log( 'num1: ', num1)

// Decrement
console.log( 'num2: ',num2)

    // pre-decrement
    console.log( 'num2: ', --num2)

    // post-decrement
    console.log( 'num2: ', num2--)

console.log( 'num2: ',num2)

// get first user input
let input1 = parseFloat(prompt('please enter first number'))

while(Number.isNaN(input1)){
    input1 = parseFloat(prompt('please enter first number'))
}

// get second user input
let input2 = parseFloat(prompt('please enter second number'))

while(Number.isNaN(input2)){
    input2 = parseFloat(prompt('please enter first number'))
}

console.log(input1, input2)

// arithmetic operations on user inputs

// addition
console.log('addition: ', input1 + input2)

// subtraction
console.log( 'subtraction: ', input1 - input2)

// multiplication
console.log( 'multiplication: ', input1 * input2)

// division
console.log( 'division: ', input1 / input2)

// modulo
console.log( 'modulo: ', input1 % input2)

// exponentation
console.log( 'exponentation: ', input1 ** input2)