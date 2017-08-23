import {Component} from '@angular/core';
import {AppStore} from "../../app.store";
import {WeatherUtilityService} from "../../services/weatherUtility.service";

@Component({
    selector: 'hourly-forecast',
    templateUrl: 'app/components/hourlyForecast/hourlyForecast.component.html',
    styleUrls: ['app/components/hourlyForecast/hourlyForecast.component.css']
})

export default class HourlyForecastComponent {
    hourlyForecast: hourlyForecastApi;

    constructor(private appStore: AppStore, private weatherUtilityService: WeatherUtilityService) {
        this.hourlyForecast = appStore.getState().hourlyForecast;
        this.appStore.changes.subscribe((value) => {
            this.hourlyForecast = value.hourlyForecast;
        });
    }

    forecastExists() {
        return (this.hourlyForecast && this.hourlyForecast.city.name && this.hourlyForecast.city.name !== "");
    }

    getTimeStamp(unixTime: number) {
        return new Date(unixTime * 1000);
    }

    getWindDirection(angleDeg: number) {
        return this.weatherUtilityService.getWindDirection(angleDeg);
    }
}
