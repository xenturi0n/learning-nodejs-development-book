const request = require("request");

var getCurrentWeather = (location, callback) => {
  var lat = location.latitude;
  var long = location.longitude;
  var appid = process.env["OPEN_WEATHER_MAP_API_KEY"];
  var units = "metric";

  var url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${units}&lang=es&APPID=${appid}`;

  request({ url, json: true }, (error, response, body) => {
    if (error) {
      callback("No fue posible conectarse con la API de OpenWeatherMap.");
    } else {
      callback(null, body);
    }
  });
};

module.exports = {
  getCurrentWeather
};
