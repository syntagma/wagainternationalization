var express = require('express');

var mainPort = process.env.PORT || 1337;

var app = express();	

app.use('/',express.static(__dirname));

app.get('/internationalization', function (req, res){
	res.sendfile("internationalization/internationalization.html");	
});


app.listen(mainPort);
