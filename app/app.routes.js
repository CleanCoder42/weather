"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var currentWeather_component_1 = require("./components/currentWeather/currentWeather.component");
var forecast_component_1 = require("./components/forecast/forecast.component");
var hourlyForecast_component_1 = require("./components/hourlyForecast/hourlyForecast.component");
var routes = [
    { path: "", component: currentWeather_component_1.default },
    { path: "currentWeather", component: currentWeather_component_1.default },
    { path: "forecast", component: forecast_component_1.default },
    { path: "hourly", component: hourlyForecast_component_1.default }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map