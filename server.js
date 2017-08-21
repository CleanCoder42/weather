var express = require('express');
var path = require('path');
var open = require('open');
var https = require('https');

var PORT = 5001;

var app = express();

app.use('/', express.static(__dirname));
app.use('/static', express.static(path.join(__dirname, '/public/**/*')));
app.use(express.static(path.join(__dirname, 'node_modules/core-js/**/*')));
app.use(express.static(path.join(__dirname, 'node_modules/zone-js/**/*')));
app.use(express.static(path.join(__dirname, 'node_modules/systemjs/**/*')));

app.get('/api/weatherSearch/:searchString', function (req, res) {
    const apiKey = "f8aa9a4391a370300c3233ac126ece78";
    let searchString = req.params.searchString;
    console.log('search string is ', searchString);
    let data = {};

    if (/^\d+$/.test(searchString)) {
        data.type = "zipCode search";
        res.send(data);
    }
    else {
        searchString = searchString.toLowerCase();
        searchString = searchString.replace("st. ", "saint ");
        searchString = searchString.replace(" ", "%20");
        https.get({
            host: 'api.openweathermap.org',
            path: `/data/2.5/weather?q=${searchString}&units=imperial&APPID=${apiKey}`
        }, function (response) {
            let body = "";
            response.on("data", function (d) {
                body += d;
            });
            response.on("end", function () {
                const parsed = JSON.parse(body);
                res.status(200).send(parsed);
            });
        });
    }
});

app.listen(PORT, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('server listening on port: ' + PORT);
        open('http://localhost:' + PORT, 'firefox');
    }
});