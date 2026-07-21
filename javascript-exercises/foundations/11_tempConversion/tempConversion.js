const convertToCelsius = function(farenheit) {
  const cel =  (farenheit - 32) * (5 / 9);
  return Number(cel.toFixed(1));
};

const convertToFahrenheit = function(celcius) {
  const far = (celcius * (9 / 5)) + 32;
  return Number(far.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};