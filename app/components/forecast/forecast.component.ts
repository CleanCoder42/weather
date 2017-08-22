import {Component} from '@angular/core';
import {AppStore} from "../../app.store";

@Component({
    selector: 'weather-forecast',
    templateUrl: 'app/components/forecast/forecast.component.html',
    styleUrls: ['app/components/forecast/forecast.component.css']
})

export default class ForecastComponent {
    dailyForecast: dailyForecastApi;
    
    constructor(private appStore: AppStore) {
        this.dailyForecast = appStore.getState().dailyForecast;
        this.appStore.changes.subscribe((value) => {
            this.dailyForecast = value.dailyForecast;
        });
    }
    
    forecastExists() {
        return (this.dailyForecast.city && this.dailyForecast.city.name && this.dailyForecast.city.name !== "")
    }
    
    getTimeStamp(unixUtxTime: number) {
        return new Date(unixUtxTime*1000);
    }
    
}
