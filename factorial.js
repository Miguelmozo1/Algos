function factorial(num) {
    var result = 1;
    for(var i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
var factorial = factorial(5);
console.log(factorial);