const convertToCelsius = function(tempFar) {
  return celsius = parseFloat(((tempFar - 32) / (9/5)).toFixed(1));
};

const convertToFahrenheit = function(tempCel) {
return fahrenheit = parseFloat(((tempCel * (9/5)) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
