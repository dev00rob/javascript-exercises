const leapYears = function(input) {
    return (input % 400 === 0 || 
            input %   4 === 0 &&
            input % 100 !== 0   );

}

module.exports = leapYears
