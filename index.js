const cros = require('cors');
const app = express();
const endpointUrl = new URL('https://www.themealdb.com/api/json/v1/1/random.php'); //open source api, for random meals
const options = {
  method: 'GET' //method to be performed
};

app.use(cors());
async function fetchRandomMeal() { //async makes a function return a Promise
  try { //await makes a function wait for a Promise
    const response = await fetch(endpointUrl, options); //starts an HTTP request to the assigned URL to perform the assigned method
    printResponse(response); //function call to print the response
  } catch (error) { //catch the error (if any)
    printError(error); //function all to print the error
  }
}

async function printResponse(response) { //async makes a function return a Promise
  try {
    const content = await response.json(); //await makes a function wait for a Promise

    // Printing a clean JSON response
    const formattedJson = JSON.stringify(content, null, 4);
    console.log(formattedJson);
  } catch (err) {
    // Print your custom error message here
    console.log(`Error: ${err}`);
  }
}

function printError(err) {
  // Print your custom error message here
  console.log(`Error: ${err}`);
}

fetchRandomMeal();