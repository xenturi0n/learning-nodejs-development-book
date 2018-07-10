var getMessage = status => {
  switch (status) {
    case "ZERO_RESULTS":
      // indicates that the geocode was successful but returned no results. This may occur if the geocoder was passed a non-existent address.
      return "geocode was successful but returned no results. This may occur if the geocoder was passed a non-existent address.";
      break;

    case "OVER_DAILY_LIMIT":
      // indicates any of the following:
      // - The API key is missing or invalid.
      // - Billing has not been enabled on your account.
      // - A self-imposed usage cap has been exceeded.
      // - The provided method of payment is no longer valid (for example, a credit card has expired).
      return "some wrong with your api key";
      break;

    case "OVER_QUERY_LIMIT":
      // indicates that you are over your quota.
      return "you are over your requests quota.";
      break;

    case "REQUEST_DENIED":
      // indicates that your request was denied.
      return "your request was denied";
      break;

    case "INVALID_REQUEST":
      // generally indicates that the query (address, components or latlng) is missing.
      return "something go wrong with your query (address, components or latlng) is missing";
      break;

    case "UNKNOWN_ERROR":
      // indicates that the request could not be processed due to a server error. The request may succeed if you try again.
      return "request could not be processed due to a server error. The request may succeed if you try again.";
      break;

    default:
      return;
      break;
  }
};

module.exports = {
  getMessage
};
