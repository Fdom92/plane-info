import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AVIONSTACK_KEY } from 'src/app/config/config';
import {
    AircraftTypesResponse,
    AirlineResponse,
    AirplaneResponse,
    AirportResponse,
    FlightResponse,
    TaxesResponse,
    CitiesResponse,
    CountriesResponse
} from 'src/app/models/api-response.model';

@Injectable({ providedIn: 'root' })
export class AvionStackService {

    private baseUrl = 'https://api.aviationstack.com/v1/';
    constructor(private http: HttpClient) { }


    flights(): Observable<FlightResponse> {
        return this.http.get<FlightResponse>(this.baseUrl + `/flights?access_key=${AVIONSTACK_KEY}`);
    }

    airports(): Observable<AirportResponse> {
        return this.http.get<AirportResponse>(this.baseUrl + `/airports?access_key=${AVIONSTACK_KEY}`);
    }

    airlines(): Observable<AirlineResponse> {
        return this.http.get<AirlineResponse>(this.baseUrl + `/airlines?access_key=${AVIONSTACK_KEY}`);
    }

    airplanes(): Observable<AirplaneResponse> {
        return this.http.get<AirplaneResponse>(this.baseUrl + `/airplanes?access_key=${AVIONSTACK_KEY}`);
    }

    aircraftTypes(): Observable<AircraftTypesResponse> {
        return this.http.get<AircraftTypesResponse>(this.baseUrl + `/aircraft_types?access_key=${AVIONSTACK_KEY}`);
    }

    taxes(): Observable<TaxesResponse> {
        return this.http.get<TaxesResponse>(this.baseUrl + `/taxes?access_key=${AVIONSTACK_KEY}`);
    }

    cities(): Observable<CitiesResponse> {
        return this.http.get<CitiesResponse>(this.baseUrl + `/cities?access_key=${AVIONSTACK_KEY}`);
    }

    countries(): Observable<CountriesResponse> {
        return this.http.get<CountriesResponse>(this.baseUrl + `/countries?access_key=${AVIONSTACK_KEY}`);
    }
}
