// function count(string) {
//     word = string.split("")
//     c = {}
//     if (string.length < 1){
//         return c
//     }
//     for(let i = 0; i < word.length; i++){
//         if(word[i] == Object.keys(c).filter((key)=>key.includes(word[i]))){
//             c[word[i]] += 1
//         }
//         else{
//             c[word[i]] = 1
//         }
//     }
//     return c
// }

//  best practice
function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
        count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
    }

x = count('ABCA')
console.log(x)