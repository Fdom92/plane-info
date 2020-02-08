import { Flight } from './flight.model';
import { Airport } from './airport.model';
import { Airline } from './airline.model';
import { Airplane } from './airplane.model';
import { AircraftType } from './aircraft-type.model';
import { Tax } from './tax.model';
import { City } from './city.model';
import { Country } from './country.model';

export interface FlightResponse {
    pagination: {
        limit: number;
        offset: number;
        count: number;
        total: number;
    };
    data: Array<Flight>;
}

export interface AirportResponse {
    pagination: {
        limit: number;
        offset: number;
        count: number;
        total: number;
    };
    data: Array<Airport>;
}

export interface AirlineResponse {
    pagination: {
        limit: number;
        offset: number;
        count: number;
        total: number;
    };
    data: Array<Airline>;
}

export interface AirplaneResponse {
    pagination: {
        limit: number;
        offset: number;
        count: number;
        total: number;
    };
    data: Array<Airplane>;
}

export interface AircraftTypesResponse {
    pagination: {
        limit: number;
        offset: number;
        count: number;
        total: number;
    };
    data: Array<AircraftType>;
}

export interface TaxesResponse {
    pagination: {
        limit: number;
        offset: number;
        count: number;
        total: number;
    };
    data: Array<Tax>;
}

export interface CitiesResponse {
    pagination: {
        limit: number;
        offset: number;
        count: number;
        total: number;
    };
    data: Array<City>;
}

export interface CountriesResponse {
    pagination: {
        limit: number;
        offset: number;
        count: number;
        total: number;
    };
    data: Array<Country>;
}