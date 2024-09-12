function generateCoinChange(cents) {
    var quartCount = 0;
    var dimeCount = 0;
    var nickelCount = 0;
    var pennyCount = 0;
    var penniesLeft = cents;
    while (penniesLeft >= 25){
        penniesLeft -= 25;
        quartCount++
    }
    while (penniesLeft >= 10){
        penniesLeft -= 10;
        dimeCount++;
    }
    while (penniesLeft >= 5){
        penniesLeft -= 5;
        nickelCount++;
    }
    while (penniesLeft >= 1){
        penniesLeft -= 1;
        pennyCount++;
    }
    return ["Quarters: " +quartCount, "Dimes: " +dimeCount, "Nickels: " +nickelCount, "Pennies: " +pennyCount];
}
var sort = generateCoinChange(191);
console.log(sort);