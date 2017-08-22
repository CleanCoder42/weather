"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_store_1 = require("../../app.store");
var CurrentWeatherComponent = (function () {
    function CurrentWeatherComponent(appStore) {
        var _this = this;
        this.appStore = appStore;
        this.currentWeather = appStore.getState().currentWeather;
        this.appStore.changes.subscribe(function (value) {
            _this.currentWeather = value.currentWeather;
        });
    }
    CurrentWeatherComponent.prototype.weatherExists = function () {
        return (this.currentWeather.name && this.currentWeather.name !== "");
    };
    CurrentWeatherComponent.prototype.getWeatherDescription = function () {
        if (this.currentWeather && this.currentWeather.weather.length > 0) {
            var aux = this.currentWeather.weather[0].description;
            return aux[0].toUpperCase() + aux.substring(1);
        }
        return "";
    };
    CurrentWeatherComponent.prototype.getTimeStamp = function () {
        if (this.currentWeather && this.currentWeather.dt) {
            return new Date(this.currentWeather.dt * 1000);
        }
        return "";
    };
    CurrentWeatherComponent.prototype.getWindDirection = function () {
        if (this.currentWeather && this.currentWeather.wind) {
            var deg = this.currentWeather.wind.deg;
            if (deg > 348.75 || deg < 11.25) {
                return 'N';
            }
            if (deg < 33.75) {
                return 'NNE';
            }
            if (deg < 56.25) {
                return 'NE';
            }
            if (deg < 78.75) {
                return 'ENE';
            }
            if (deg < 101.25) {
                return 'E';
            }
            if (deg < 123.75) {
                return 'ESE';
            }
            if (deg < 146.25) {
                return 'SE';
            }
            if (deg < 168.75) {
                return 'SSE';
            }
            if (deg < 191.25) {
                return 'S';
            }
            if (deg < 213.75) {
                return 'SSW';
            }
            if (deg < 236.25) {
                return 'SW';
            }
            if (deg < 258.75) {
                return 'WSW';
            }
            if (deg < 281.25) {
                return 'W';
            }
            if (deg < 303.75) {
                return 'WNW';
            }
            if (deg < 326.25) {
                return 'NW';
            }
            return 'NNW';
        }
        return '';
    };
    CurrentWeatherComponent.prototype.getHeatIndex = function () {
        if (this.currentWeather && this.currentWeather.main) {
            var humidity = this.currentWeather.main.humidity;
            var temp = this.currentWeather.main.temp;
            var heatIndex = 0.5 * (temp + 61 + ((temp - 68) * 1.2) + (humidity * 0.094));
            var heatAvg = (heatIndex + temp) / 2;
            if (heatAvg < 80) {
                return Math.max(heatAvg, temp).toFixed(1);
            }
            heatIndex = -42.379 + 2.04901523 * temp + 10.14333127 * humidity - 0.22475541 * temp * humidity - 0.00683783 * temp * temp - 0.05481717 * humidity * humidity + 0.00122874 * temp * temp * humidity + 0.00085282 * temp * humidity * humidity - 0.00000199 * temp * temp * humidity * humidity;
            if (humidity < 13 && temp > 80 && temp < 112) {
                heatIndex -= ((13 - humidity) / 4) * Math.sqrt((17 - Math.abs(temp - 95)) / 17);
            }
            if (humidity > 85 && temp > 80 && temp < 87) {
                heatIndex += ((humidity - 85) / 10) * ((87 - temp) / 5);
            }
            return Math.max(heatIndex, temp).toFixed(1);
        }
        return 0;
    };
    CurrentWeatherComponent = __decorate([
        core_1.Component({
            selector: 'current-weather',
            templateUrl: 'app/components/currentWeather/currentWeather.component.html',
            styleUrls: ['app/components/currentWeather/currentWeather.component.css']
        }),
        __metadata("design:paramtypes", [app_store_1.AppStore])
    ], CurrentWeatherComponent);
    return CurrentWeatherComponent;
}());
exports.default = CurrentWeatherComponent;
//# sourceMappingURL=currentWeather.component.js.map