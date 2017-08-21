import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class GetWeatherService {
    openWeatherApiResponse: Subject<openWeatherApi>;
    openWeatherApiResponse$: Observable<openWeatherApi> = null;
    
    constructor(private http: Http) {
        this.openWeatherApiResponse = new Subject();
        this.openWeatherApiResponse$ = this.openWeatherApiResponse.asObservable();
    }
    
    makeApiCall(searchString: string) {
        this.http.get(`/api/weatherSearch/${searchString}`).toPromise()
            .then(response => {
                this.openWeatherApiResponse.next(response.json() as openWeatherApi);
            });
    }
}