// const validator = (str1, str2) => {
//     len_str2 = str2.length
//     len_str1 = str1.length
//     delta = len_str1 - len_str2
//     j = 0
//     for(let i = delta; i <= len_str1; i++) {
//         if(str1[i] != str2[j]) {
//             return console.log('false')
//         }
//         if(str1[i] == str2[j]) {
//             j++
//         }
//     }
//     return console.log("true")
// }

// validator("samurai", "ra")




// function solution(str, ending){
//     len_ending = ending.length
//     len_str = str.length
//     delta = len_str - len_ending
//     j = 0
//     for(let i = delta; i <= len_str; i++) {
//         if(str[i] != ending[j]) {
//             return false
//         }
//         if(str[i] == ending[j]){
//             j++
//         }
//     }
//     return true
// }



    // best practice
function solution(str, ending){
    return console.log(str.endsWith(ending))
}

solution('hello', 'low')