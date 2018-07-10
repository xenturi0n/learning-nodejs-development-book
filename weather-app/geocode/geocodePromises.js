const request = require("request");

var geocodeAddress = encodedAddress => {
  var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${
    process.env["GOOGLE_API_KEY"]
  }`;

  return new Promise((resolve, reject) => {
    request({ url, json: true }, (error, response, body) => {
      if (error) {
        reject("Unable to connect to Google servers.");
      } else {
        switch (body.status) {
          case "OK":
            // indicates that no errors occurred; the address was successfully parsed and at least one geocode was returned.
            resolve({
              address: body.results[0].formatted_address,
              latitude: body.results[0].geometry.location.lat,
              longitude: body.results[0].geometry.location.lng
            });
            break;

          case "ZERO_RESULTS":
            // indicates that the geocode was successful but returned no results. This may occur if the geocoder was passed a non-existent address.
            reject(
              "geocode was successful but returned no results. This may occur if the geocoder was passed a non-existent address."
            );
            break;

          case "OVER_DAILY_LIMIT":
            // indicates any of the following:
            // - The API key is missing or invalid.
            // - Billing has not been enabled on your account.
            // - A self-imposed usage cap has been exceeded.
            // - The provided method of payment is no longer valid (for example, a credit card has expired).
            reject("some wrong with your api key");
            break;

          case "OVER_QUERY_LIMIT":
            // indicates that you are over your quota.
            reject("you are over your requests quota.");
            break;

          case "REQUEST_DENIED":
            // indicates that your request was denied.
            reject("your request was denied");
            break;

          case "INVALID_REQUEST":
            // generally indicates that the query (address, components or latlng) is missing.
            reject(
              "something go wrong with your query (address, components or latlng) is missing"
            );
            break;

          case "UNKNOWN_ERROR":
            // indicates that the request could not be processed due to a server error. The request may succeed if you try again.
            reject(
              "request could not be processed due to a server error. The request may succeed if you try again."
            );
            break;

          default:
            break;
        }
      }
    });
  });
};

module.exports = {
  geocodeAddress
};
