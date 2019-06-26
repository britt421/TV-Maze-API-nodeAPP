



// Variables for dependencies
var fs = require("fs");
var axios = require("axios");
var moment = require("moment");

// Variable for user commands
var command = process.argv[2];
console.log(command);

// Variable for user data inputs. Joins multiple words into index[3].
var userInput = process.argv.splice(3).join(" ");
console.log(userInput);

if (!userInput) {
        userInput = "andy griffith";
        movie(userInput);
}