var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a !== "number" || typeof b !== "number") {
        reject("Se debe proporcionar un numero valido.");
      } else {
        resolve(a + b);
      }
    }, 3000);
  });
};

asyncAdd(5, 7)
  .then(result => {
    console.log("Result: ", result);
    return asyncAdd(result, "33");
  })
  .then(result => {
    console.log("Result 2: ", result);
  })
  .catch(err => {
    console.log(err);
  });
