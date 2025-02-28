function rolls() {
    var dice1 = Math.ceil(Math.random()*6);
    var dice2 = Math.ceil(Math.random()*6);
    while(dice1 != dice2) {
        var dieRolls = [];
        dieRolls.push(dice1);
    }
    return dieRolls;
}

console.log(rolls());