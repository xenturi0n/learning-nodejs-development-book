const yargs = require("yargs");
const geocode = require("./geocode/geocodePromises");
const weather = require("./weather/weatherPromises");

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Addres to fetch weather for",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

var address = argv.address;

geocode
  .geocodeAddress(address)
  .then(geocodedAddress => {
    return weather.getCurrentWeather(geocodedAddress);
  })
  .then(currentWeather => {
    console.log(currentWeather.address);
    console.log(`Temp: ${currentWeather.currTemp} C°`);
  })
  .catch(err => {
    console.log(err);
  });
