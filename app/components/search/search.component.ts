import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";

@Component({
    selector: 'weather-search',
    templateUrl: 'app/components/search/search.component.html'
})

export default class SearchComponent {
    public searchString: string;

    constructor(private http: Http) {}

    onSubmit() {
        this.http.get(`/api/weatherSearch/${this.searchString}`).toPromise()
            .then(response => {
                const data = response.json();
                console.log('received this from server ', data);
            });
    }

}
