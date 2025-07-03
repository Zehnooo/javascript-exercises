const sumAll = function(a, b) {
let sum = 0;
const minValue = Math.min(a, b);
const maxValue = Math.max(a,b);
if (
    (minValue < 0 || maxValue < 0) ||
    ( !Number.isInteger(minValue) || !Number.isInteger(maxValue) ) ||
    (typeof a !== "number" || typeof b !== "number")
){
    return "ERROR";
}

for (let i = minValue; i >= minValue && i <= maxValue; i++){
    sum += i;
}
return sum;
};



// Do not edit below this line
module.exports = sumAll;
