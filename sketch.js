var api = 'https://api.giphy.com/v1/gifs/search?';  //url to the api
var apiKey = '&api_key=OJoHoioaIdMCFNz35rWqX87XIWJzEUR8' // The api key
var query = '&q=dogs'; // The giphy database for all the gifs. You can change the name of the objects as well.The letter q is the search phrase.

function setup() {
  noCanvas();
  var url = api + apiKey + query; //Make the url so it won't be hard coded.
  loadJSON(url, gotData); //Load Json is a function where you give a url that will give back json. He also has a callback function called gotData

}

function gotData(giphy) { // callback function gotData
  for (var i = 0; i < giphy.data.length; i++) { // shows all of the giphy's related to rainbows. Giphy.data.length is the array
  createImg(giphy.data[i].images.original.url); // Unpack the Json. Data is the first property which is an array. Then each element after is from the gif. He also uses the createImg in order to show the image instead of the url.
}
}

function draw() {
  background(220);
}
