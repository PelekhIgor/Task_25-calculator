const calculator = require('./calculator')  // подход к управлению зависимостю между файлами називают CommonJS

console.log(calculator.add(10,2))
console.log(calculator.div(10,2))
console.log(calculator.min(10,2))
console.log(calculator.mul(10,2))