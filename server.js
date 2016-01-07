var PORT = process.env.PORT || 3000;
var express  = require('express');
var app = express();
app.use(express.static(__dirname +'/public'))
var http = require('http').Server(app);
http.listen(PORT,function(){
	console.log("server is now running at port",+PORT);
});