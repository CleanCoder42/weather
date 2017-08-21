import {Component} from '@angular/core';
import "rxjs/add/operator/toPromise";
import {GetWeatherService} from "../../services/getWeather.service";

@Component({
    selector: 'weather-search',
    templateUrl: 'app/components/search/search.component.html'
})

export default class SearchComponent {
    public searchString: string;

    constructor(private getWeatherService: GetWeatherService) {}

    onSubmit() {
        this.getWeatherService.makeApiCall(this.searchString);
    }

}
