var axios = require("axios");
var fs = require("fs");

function output(info){
  console.log(info);

  fs.appendFile("log.txt", info, function(err){
    console.log(err);
  })
}

var TV = function(){
  this.findShow = function(show){
    var URL = "https://api.tvmaze.com/singlesearch/shows?q=" + show;

    axios.get(URL).then(function(response){
      //console.log(response);
      output(`
      Show Name: ${response.data.name}
      Genres: ${response.data.genres.join(" ")}
      Network: ${response.data.network.name}
      Summary: ${response.data.summary}
      -----------------------------------
      `);

    })
  }
  this.findActor = function(actor){
    var URL = "http://api.tvmaze.com/search/people?q=" + actor;

    axios.get(URL).then(function(response){
      // console.log(response.data[0]);
       output(`
      Actor Name: ${response.data[0].person.name}
      birthday: ${response.data[0].person.birthday}
      gender: ${response.data[0].person.gender}
      country: ${response.data[0].person.country.name}
       -----------------------------------
       `);

    })
  }
}

module.exports = TV;