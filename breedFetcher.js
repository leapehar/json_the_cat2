// requiring the request library
const request = require('request');

// declaring breed variable and setting its value to the argument passed in by the user
const breed = process.argv[2];


// declaring endpoint variable and setting its value to the api endpoint
// using template literal appent the breed variable to the end of the API endpoint so that the endpoint will corespond with the breed the user searched for
const endpoint = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;


// making a GET request to the API endpoint
request(endpoint, (error, response, body) => {

  // Edge Case: Request Failed
  // if there is something wrong with the request, console logging an error message and the error
  if (error) {
    console.log('Failed request', error);
    return;
  }

  // declaring data variable and getting its value to JSON.parse(body)
  // JSON.parse() is taking the data that was retrived by the API GET request and converting it from raw JSON into an actual object.
  const data = JSON.parse(body);

  // Edge Case: Breed Not Found
  // Checking the character length of the data retrived by the API GET request
  // if no date is retrived, console logging 'breed not found'
  if (data.length < 1) {
    console.log('breed not found');
    return;
  }

  // declaring description variable and setting its value to the description property of the object retrived by the API GET request.
  const description = data[0].description;

  // console logging the breed description
  console.log(`${breed} Cat Description: ${description}`);
});