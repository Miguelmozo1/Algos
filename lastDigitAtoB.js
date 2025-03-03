function lastDigitAtoB(a, b) {          // returns the last digit of any a^b
    var result = a ** b;
    var lastDig = result % 10
    return lastDig;
}

var digit = lastDigitAtoB(12,5)
console.log(digit);