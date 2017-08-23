import {Injectable} from "@angular/core";

@Injectable()
export class WeatherUtilityService {

    getWindDirection(degAngle: number) {
        const deg = degAngle;
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
    
    getHeatIndex(temp: number, humidity: number) {
        let heatIndex = 0.5 * (temp + 61 + ((temp-68)*1.2) + (humidity*0.094));

        const heatAvg = (heatIndex + temp) / 2;
        if (heatAvg < 80) { return Math.max(heatAvg, temp).toFixed(1); }

        heatIndex = -42.379 + 2.04901523*temp + 10.14333127*humidity - 0.22475541*temp*humidity - 0.00683783*temp*temp - 0.05481717*humidity*humidity + 0.00122874*temp*temp*humidity + 0.00085282*temp*humidity*humidity - 0.00000199*temp*temp*humidity*humidity;

        if (humidity < 13 && temp > 80 && temp < 112) {
            heatIndex -= ((13-humidity)/4) * Math.sqrt((17 - Math.abs(temp-95))/17);
        }

        if (humidity > 85 && temp > 80 && temp < 87) {
            heatIndex += ((humidity-85)/10) * ((87-temp)/5);
        }

        return Math.max(heatIndex, temp).toFixed(1);
    }
}