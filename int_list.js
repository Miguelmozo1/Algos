function filter_list(l) {
    return l.filter((i) => Number.isInteger(i));
}

x = filter_list([1,2,'aasf','1','123',123])
console.log(x)