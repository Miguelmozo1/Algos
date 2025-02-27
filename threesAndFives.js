function ThreesFives() {
    var sum = 0;
    for(var i = 100; i <=4000000; i++) {
        if(i %3 == 0 || i %5 == 0) {
            sum += i;
        }
    }
    return sum;
}
var threesFives = ThreesFives();
console.log(ThreesFives());



function BetterThreesFives(start,end) {
    var betterSum = 0;
    for(var i = start; i <= end; i++) {
        if(i %3 == 0 || i %5 == 0) {
            betterSum += i;
        }
    }
    return betterSum;
}
var sumBetter = BetterThreesFives(10,4000000);
console.log(sumBetter);