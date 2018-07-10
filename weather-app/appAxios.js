const yargs = require("yargs");
const axios = require("axios");
const googleStatus = require("./geocode/googleStatus");

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
// ENCODED:     'https://maps.googleapis.com/maps/api/geocode/json?address=55070%252C%2520mex&key=AIzaSyCE-qfK4UbPChres2S39_ETAsaX27ilYYs'
// NO-ENCODED:  'https://maps.googleapis.com/maps/api/geocode/json?address=55070,+mex&key=AIzaSyCE-qfK4UbPChres2S39_ETAsaX27ilYYs'
var address = argv.address;
var urlGoogle = `https://maps.googleapis.com/maps/api/geocode/json`;
var urlOpenWeather = "http://api.openweathermap.org/data/2.5/weather";

axios
  .get(urlGoogle, {
    params: {
      address: address,
      key: process.env["GOOGLE_API_KEY"]
    }
  })
  .then(response => {
    if (response.data.status !== "OK") {
      throw new Error(googleStatus.getMessage(response.data.status));
    } else {
      var data = {
        address: response.data.results[0].formatted_address,
        latitude: response.data.results[0].geometry.location.lat,
        longitude: response.data.results[0].geometry.location.lng
      };
      return new Promise((resolve, reject) => {
        resolve(data);
      });
    }
  })
  .then(response => {
    return axios
      .get(urlOpenWeather, {
        params: {
          lat: response.latitude,
          lon: response.longitude,
          units: "metric",
          lang: "es",
          APPID: process.env["OPEN_WEATHER_MAP_API_KEY"]
        }
      })
      .then(data => {
        return new Promise((resolve, reject) => {
          data.data.formatted_address = response.address;
          resolve(data);
        });
      });
  })
  .then(response => {
    console.log(response.data.formatted_address);
    console.log(`Current Temp: ${response.data.main.temp} C°`);
  })
  .catch(e => {
    if (e.code === "ENOTFOUND") {
      console.error(`Error when connecting to ${e.host} servers.`);
    } else {
      console.log(e.message);
    }
  });
