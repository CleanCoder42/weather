const express = require('express');
const path = require('path');
const open = require('open');
const https = require('https');

const PORT = 5001;

const app = express();

app.use('/', express.static(__dirname));
app.use('/static', express.static(path.join(__dirname, '/public/**/*')));
app.use(express.static(path.join(__dirname, 'node_modules/core-js/**/*')));
app.use(express.static(path.join(__dirname, 'node_modules/zone-js/**/*')));
app.use(express.static(path.join(__dirname, 'node_modules/systemjs/**/*')));

app.get('/api/weatherSearch/:searchString', function (req, res) {
    const apiKey = "f8aa9a4391a370300c3233ac126ece78";
    let searchString = req.params.searchString;
    let data = {};

    if (/^\d+$/.test(searchString)) {
        data.type = "zipCode search";
        res.send(data);
    }
    else {
        searchString = searchString.toLowerCase();
        searchString = searchString.replace("st. ", "saint ");
        searchString = searchString.replace(" ", "%20");
        
        const currentWeather = makeApiCall(`/data/2.5/weather?q=${searchString}&units=imperial&APPID=${apiKey}`);
        const dailyForecast = makeApiCall(`/data/2.5/forecast/daily?q=${searchString}&units=imperial&cnt=5&APPID=${apiKey}`);
        const hourlyForecast = makeApiCall(`/data/2.5/forecast?q=${searchString}&units=imperial&cnt=8&APPID=${apiKey}`);
        
        Promise.all([currentWeather, dailyForecast, hourlyForecast])
            .then(values => {
                data.currentWeather = values[0];
                data.dailyForecast = values[1];
                data.hourlyForecast = values[2];
                res.status(200).send(data);
            })
            .catch(error => {
                res.status(403).send(error);
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

makeApiCall = function (url) {
    return new Promise(function (resolve, reject) {
        https.get({
            host: 'api.openweathermap.org',
            path: url
        }, function (response) {
            let body = "";
            response.on("data", function (d) {
                body += d;
            });
            response.on("end", function () {
                resolve(JSON.parse(body));
            });
            response.on("error", function (err) {
                reject(err);
            });
        });
    });
};