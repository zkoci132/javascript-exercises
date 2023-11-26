const convertToCelsius = function(x) {
  let number = (x-32) * (5/9)
  return Math.round(number * 10) / 10
};

const convertToFahrenheit = function(x) {
  let number = (x*(9/5)) + 32
  return Math.round(number * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
