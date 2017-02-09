export default class Calculator {

    add(...numbers) {
        return numbers.reduce((a, b) => {
            return a + b;
        }, 0);
    }

    introspect() {
        return arguments;
    }

}

const calc = new Calculator();

console.log(calc.add(1, 3, 6));

// const greet = (...greetings) => {
//     return greetings;
//     // greetings will be an array of params
// };
//
// const output = greet('Hello', 'What up', 'Top of the morning');
//
// console.log(output);

