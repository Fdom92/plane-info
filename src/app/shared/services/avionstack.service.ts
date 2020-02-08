import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AVIONSTACK_KEY } from 'src/app/config/config';
import {
    AircraftTypesResponse,
    AirlinesResponse,
    AirplanesResponse,
    AirportsResponse,
    FlightsResponse,
    TaxesResponse,
    CitiesResponse,
    CountriesResponse
} from 'src/app/models/api-response.model';
import {
    FlightsOptions,
    AirportsOptions,
    AirlinesOptions,
    AirplanesOptions,
    AircraftTypesOptions,
    TaxesOptions,
    CitiesOptions,
    CountriesOptions
} from 'src/app/models/api-options.model';

@Injectable({ providedIn: 'root' })
export class AvionStackService {

    private baseUrl = 'http://api.aviationstack.com/v1';
    constructor(private http: HttpClient) { }


    flights(options?: FlightsOptions): Observable<FlightsResponse> {
        if (options) {
            const params = this.convertParams(options);
            return this.http.get<FlightsResponse>(this.baseUrl + `/flights?access_key=${AVIONSTACK_KEY}${params}`);
        } else {
            return this.http.get<FlightsResponse>(this.baseUrl + `/flights?access_key=${AVIONSTACK_KEY}`);
        }
    }

    airports(options?: AirportsOptions): Observable<AirportsResponse> {
        if (options) {
            const params = this.convertParams(options);
            return this.http.get<AirportsResponse>(this.baseUrl + `/airports?access_key=${AVIONSTACK_KEY}${params}`);
        } else {
            return this.http.get<AirportsResponse>(this.baseUrl + `/airports?access_key=${AVIONSTACK_KEY}`);
        }
    }

    airlines(options?: AirlinesOptions): Observable<AirlinesResponse> {
        if (options) {
            const params = this.convertParams(options);
            return this.http.get<AirlinesResponse>(this.baseUrl + `/airlines?access_key=${AVIONSTACK_KEY}${params}`);
        } else {
            return this.http.get<AirlinesResponse>(this.baseUrl + `/airlines?access_key=${AVIONSTACK_KEY}`);
        }
    }

    airplanes(options?: AirplanesOptions): Observable<AirplanesResponse> {
        if (options) {
            const params = this.convertParams(options);
            return this.http.get<AirplanesResponse>(this.baseUrl + `/airplanes?access_key=${AVIONSTACK_KEY}${params}`);
        } else {
            return this.http.get<AirplanesResponse>(this.baseUrl + `/airplanes?access_key=${AVIONSTACK_KEY}`);
        }
    }

    aircraftTypes(options?: AircraftTypesOptions): Observable<AircraftTypesResponse> {
        if (options) {
            const params = this.convertParams(options);
            return this.http.get<AircraftTypesResponse>(this.baseUrl + `/aircraft_types?access_key=${AVIONSTACK_KEY}${params}`);
        } else {
            return this.http.get<AircraftTypesResponse>(this.baseUrl + `/aircraft_types?access_key=${AVIONSTACK_KEY}`);
        }
    }

    taxes(options?: TaxesOptions): Observable<TaxesResponse> {
        if (options) {
            const params = this.convertParams(options);
            return this.http.get<TaxesResponse>(this.baseUrl + `/taxes?access_key=${AVIONSTACK_KEY}${params}`);
        } else {
            return this.http.get<TaxesResponse>(this.baseUrl + `/taxes?access_key=${AVIONSTACK_KEY}`);
        }
    }

    cities(options?: CitiesOptions): Observable<CitiesResponse> {
        if (options) {
            const params = this.convertParams(options);
            return this.http.get<CitiesResponse>(this.baseUrl + `/cities?access_key=${AVIONSTACK_KEY}${params}`);
        } else {
            return this.http.get<CitiesResponse>(this.baseUrl + `/cities?access_key=${AVIONSTACK_KEY}`);
        }
    }

    countries(options?: CountriesOptions): Observable<CountriesResponse> {
        if (options) {
            const params = this.convertParams(options);
            return this.http.get<CountriesResponse>(this.baseUrl + `/countries?access_key=${AVIONSTACK_KEY}${params}`);
        } else {
            return this.http.get<CountriesResponse>(this.baseUrl + `/countries?access_key=${AVIONSTACK_KEY}`);
        }
    }

    private convertParams(options: FlightsOptions |
        AirportsOptions |
        AirlinesOptions |
        AirplanesOptions |
        AircraftTypesOptions |
        TaxesOptions |
        CitiesOptions |
        CountriesOptions): string {
        const keys = Object.keys(options);
        let queryParams = '';
        for (const key of keys) {
            queryParams += '&' + key + '=' + options[key];
        }
        return queryParams;
    }
}
