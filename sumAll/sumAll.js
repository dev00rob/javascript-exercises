const sumAll = function(a,b) {
    if (typeof a !== "number" || a < 0  ||
        typeof b !== "number" || b < 0    ){
        return "ERROR";
    }

    let bigger =  a > b ? a : b;
    let smaller = a < b ? a : b;
    let sum = 0;

    for (let i = smaller; i <= bigger; i++){
        sum += i;
    }

    return sum;
}

module.exports = sumAll
