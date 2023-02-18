const convertToCelsius = function(input) {
  let result = ((input - 32)*(5/9)).toFixed(1);
  return parseFloat(result);
  
};

const convertToFahrenheit = function(input) {
  let result = ((input * (9/5)) + 32).toFixed(1);
  return parseFloat(result);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
