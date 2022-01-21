// requiring the request library
const request = require('request');



// creating fetchBreedDescription function
const fetchBreedDescription = function(breedName, callback) {

  // declaring endpoint variable and setting its value to the API endpoint (corresponding to a particular breed name)
  const endpoint = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  // if no breed name value is entered:
  // calling the callback function (in fetchBreedDescription function call in index.js) with "Please enter breed name" passed into the error parameter
  // returning whatever the callback function evaluates to
  if (!breedName) {
    return callback("Please enter breed name");
  }
  // making a GET request to the API endpoint 
  request(endpoint, (error, response, body) => {


    // if there is something wrong with the request:
    // calling the callback function (in fetchBreedDescription function call in index.js)
    // since no value is passed to the error variable, the error variable will take on the error value that results from the failed AIP request
    // returning whatever the callback function evaluates to
    if (error) {
      return callback(error, body);
    };

    // declaring data variable and getting its value to JSON.parse(body)
    // JSON.parse() is taking the data that was retrived by the API GET request and converting it from raw JSON into an actual object.
    const data = JSON.parse(body);


    // declaring desc variable and setting its value to the first index of the array retrived by the API GET request.
    const desc = data[0];

    // checking if desc exists by checking if it evaluates to true 
    // if desc evaluated to true, calling the callback function (in fetchBreedDescription function call in index.js) with the description property on desc(which is the object at the first index of the array retrived by the API GET request)
    //returning what the callback evaluates to, ie. the breed description
    if (desc) {
      return callback(error, desc.description);
    } else {
      // if desc evaluates to false 
      //calling the callback function (in fetchBreedDescription function call in index.js) with "No breed found" passed into the error parameter
      //returning whatever the callback evalutes to 
      return callback("No breed found")
    }
  });

};

// exporting fetchBreedDescription function 
module.exports = {fetchBreedDescription};