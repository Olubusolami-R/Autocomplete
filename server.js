// Building a mock server

const endpoints = {
    "/": {
      "get": () => "hello world"
    },
    "/autocomplete": {
        "get": getAutocompleteHandler
    }
  }
  
  // API library
  
  function getFunction(url, data, callback) {
    const domain = url.substring(0, url.indexOf("/"));
    const endpoint = url.substring(url.indexOf("/"), url.length);
  
    callback(endpoints[endpoint]["get"](data));
  }

  function getAutocompleteHandler(data) {
    const results = [];
    for (let i = 0; i < 10; i++) {
      results.push("asdf");
    }
    return results
  }
  
  const api = {
    get: getFunction
  };