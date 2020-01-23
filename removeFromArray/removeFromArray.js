const removeFromArray = function() {
    let inputArr = arguments[0];

    for (let i = 1; i < arguments.length; i++){
        for (let j = 0; j < inputArr.length; j++){
            if (inputArr[j] === arguments[i]){
                inputArr.splice(j,1);
            }
        }
    }

    return inputArr;
}

module.exports = removeFromArray
