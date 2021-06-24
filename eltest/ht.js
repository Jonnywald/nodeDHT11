const express = require("express");
const path = require("path");
const fs = require('fs');
const http = require('http');
const helmet = require('helmet');
const expressLayouts = require('express-ejs-layouts')



const app = express();

app.use(helmet());
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static('public'));
app.use(express.static(__dirname + '/public'))
app.set('trust proxy', 1) // trust first proxy


const sensor = require("node-dht-sensor");

function exec() {
  try {
   
    var res = sensor.read(11, 4);
console.log(
      `itemp: ${res.temperature.toFixed(1)}°C, ` +
        `humidity: ${res.humidity.toFixed(1)}%`
    );
    return res;
 } catch (err) {
    console.error("Failed to read sensor data:", err);
  }
}
 
app.get('/', (req, res ) => {
    var ht11 = exec();
    console.log(
      `temp: ${ht11.temperature}°C, ` +
        `humidity: ${ht11.humidity}%`
    );
    res.render('pages/home' , {temp: ht11});

});

app.get('/dados', (req, res) => {
	var ht11 = exec();
	PostDados();
	res.send(ht11);	
});

var leitura = exec();
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://15.228.18.41/lma/store',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "pipoint": "lma_dht11_5g_temperarura",
    "value": leitura.temperature
  })

};
var optionsH = {
  'method': 'POST',
  'url': 'http://15.228.18.41/lma/store',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "pipoint": "lma_dht11_5g_umidade",
    "value": leitura.humidity
  })

};
function PostDados(){
console.log("passou");
	request(options, function (error, response) {
		if (error) throw new Error(error);
		console.log(response.body);
	});

	request(optionsH, function (error, response) {
		if (error) throw new Error(error);
		console.log(response.body);
	});
}


var httpServer = http.createServer(app );
httpServer.listen(8080);
















