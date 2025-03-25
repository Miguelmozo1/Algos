function findLargestNumber(list){
    var largest = list[0];
    for(var i = 0; i < list.length; i++){
        if(list[i] > largest){
            largest = list[i];
        }
    }
    return largest;
}
console.log(findLargestNumber([33,14,-4,43,-67,12, 35]));