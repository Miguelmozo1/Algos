// filters list of strings to find friends only. Friends being those with string length of 4(or letters)

function friend(friends){
    new_list = []
    for(let i = 0; i <= friends.length-1; i++){
        if(friends[i].length == 4) {
            new_list.push(friends[i])
        }
    }
    return new_list
}

solution(["Jimm", "Cari", "Jason", "aret"])





function solution(list){
    return list.filter(n => n.length == 4)
}