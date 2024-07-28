// var uniqueInOrder = function(iterable) {
//     const n = [];
//     for(let i = 0; i < iterable.length; i++) {
//         if(iterable[i] != iterable[i-1]) {
//             n.push(iterable[i])
//         }
//     }
//     return n
// }



    // more concise manner
// think of spread operator as a for loop as well?
var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

x = uniqueInOrder([1,2,2,3,3])
console.log(x)