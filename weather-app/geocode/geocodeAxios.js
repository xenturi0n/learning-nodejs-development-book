const request = require("request");
var axios = require("axios");
var googleStatus = require("./googleStatus");

var geocodeAddress = encodedAddress => {
  var url = `https://maps.googleapis.com/maps/api/geocode/json`;

  return axios
    .get(url, {
      params: { address: encodedAddress, key: process.env["GOOGLE_API_KEY"] }
    })
    .then(response => {
      return new Promise((resolve, reject) => {
        if (response.data.status !== "OK") {
          //   console.log(googleStatus.getMessage(response.data.status));
          reject({
            errNo: 1,
            message: googleStatus.getMessage(response.data.status)
          });
        } else {
          var data = {
            address: response.data.results[0].formatted_address,
            latitude: response.data.results[0].geometry.location.lat,
            longitude: response.data.results[0].geometry.location.lng
          };
          resolve(data);
        }
      });
    })
    .catch(err => {
      if (err.errNo === 1) {
        console.log(err.message);
      } else {
        console.log("Unable to connect with google geocode api server.");
      }
    });
};

geocodeAddress("------")
  .then(response => {
    if (response) {
      console.log(response);
    }
  })
  .catch(err => {
    console.log(err);
  });

module.exports = {
  geocodeAddress
};
