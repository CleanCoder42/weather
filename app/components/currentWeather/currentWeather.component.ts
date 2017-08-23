import {Component} from '@angular/core';
import {AppStore} from "../../app.store";
import {WeatherUtilityService} from "../../services/weatherUtility.service";

@Component({
    selector: 'current-weather',
    templateUrl: 'app/components/currentWeather/currentWeather.component.html',
    styleUrls: ['app/components/currentWeather/currentWeather.component.css']
})

export default class CurrentWeatherComponent {
    currentWeather: currentWeatherApi;
    
    constructor(private appStore: AppStore, private weatherUtilityService: WeatherUtilityService) {
        this.currentWeather = appStore.getState().currentWeather;
        this.appStore.changes.subscribe((value) => {
            this.currentWeather = value.currentWeather;
        });
    }
    
    weatherExists() {
        return (this.currentWeather.name && this.currentWeather.name !== "");
    }
    
    getWeatherDescription() {
        
        if (this.currentWeather && this.currentWeather.weather.length > 0) {
            const aux = this.currentWeather.weather[0].description;
            return aux[0].toUpperCase() + aux.substring(1);
        }
        
        return "";
    }
    
    getTimeStamp() {
        if (this.currentWeather && this.currentWeather.dt) {
            return new Date(this.currentWeather.dt*1000);
        }
        
        return "";
    }
    
    getWindDirection() {
        
        if (this.currentWeather && this.currentWeather.wind) {
            return this.weatherUtilityService.getWindDirection(this.currentWeather.wind.deg);
        }
        
        return '';
    }
    
    getHeatIndex() {
        
        if (this.currentWeather && this.currentWeather.main) {
            return this.weatherUtilityService.getHeatIndex(this.currentWeather.main.temp, this.currentWeather.main.humidity);
        }
        
        return 0;
    }
}
