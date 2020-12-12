let request = require('request');
 
//let apiKey = 'a7c09ca98b3e2da00c386f206f27c9d3';
let apiKey = 'd29a19185a62f3e1b369d88b37cb7222';
let cidade = 'Guarda';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric`
 
request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});