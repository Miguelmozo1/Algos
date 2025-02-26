function sigma(num) {                   // summation formula
    var sum = 0;
    for(var i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
var countTo = sigma(10);
console.log(countTo);