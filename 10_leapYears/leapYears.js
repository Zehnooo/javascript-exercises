const leapYears = function(year) {

let checkFour = year % 4 === 0;


if (checkFour){
    
    let checkCentury = year % 100 === 0;
    
    if (checkCentury){
    let checkFourCenturies = year % 400 === 0;
    return checkFourCenturies ? true : false;
        } return true;

    } return false;
    
}

// Divisible by 4 = leap year
// Divisible by 100 = not leap year unless also divisible by 400

// Do not edit below this line
module.exports = leapYears;
