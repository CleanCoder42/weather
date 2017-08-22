import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {AppStore} from "../app.store";

@Injectable()
export class GetWeatherService {
    
    constructor(private http: Http, private appStore: AppStore) {}
    
    makeApiCall(searchString: string) {
        this.http.get(`/api/weatherSearch/${searchString}`).toPromise()
            .then(response => {
                this.appStore.setState(response.json() as openWeatherApi);
            });
    }
}