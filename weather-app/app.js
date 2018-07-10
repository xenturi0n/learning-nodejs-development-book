const yargs = require("yargs");
const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");

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

geocode.geocodeAddress(argv.address, (err, geocodedAdress) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(geocodedAdress.address);
    weather.getCurrentWeather(geocodedAdress, (err, weather) => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log(`${weather.main.temp} C°`);
      }
    });
  }
});
