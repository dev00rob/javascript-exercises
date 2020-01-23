const repeatString = function(str,repeats) {
    if (repeats < 0){ return "ERROR"; }

    let result = "";
    while (repeats--){ result += str; }

    return result;
}

module.exports = repeatString
