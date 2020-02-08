export interface FlightsOptions {
    /**
     * Specify a limit of results to return in your API response.
     * Maximum allowed value is 100 and default value is 100.
     */
    limit?: string;
    /**
     * Specify an offset for pagination. Default offset value is 0, starting with the first available result.
     * Example: Specifying an offset of 10 in combination with a limit of 10 will show results 10-20.
     */
    offset?: string;
    /**
     * Filter your results by flight status.
     * Available values: scheduled, active, landed, cancelled, incident, diverted
     */
    flight_status?: string;
    /**
     * Filter your results by providing a flight date in the format YYYY-MM-DD.
     * Example: 2019-02-31
     */
    flight_date?: string;
    /**
     * Filter your results by departure city or airport using an IATA code.
     * You can retrieve IATA codes using the Airports or Cities API endpoints.
     */
    dep_iata?: string;
    /**
     * Filter your results by arrival city or airport using an IATA code.
     * You can retrieve IATA codes using the Airports or Cities API endpoints.
     */
    arr_iata?: string;
    /**
     * Filter your results by departure airport using an ICAO code.
     * You can retrieve ICAO codes using the Airports API endpoint.
     */
    dep_icao?: string;
    /**
     * Filter your results by arrival airport using an ICAO code.
     * You can retrieve ICAO codes using the Airports API endpoint.
     */
    arr_icao?: string;
    /**
     * Filter your results by airline name.
     * You can retrieve airline names using the Airlines API endpoint.
     */
    airline_name?: string;
    /**
     * Filter your results by airline IATA code.
     * You can retrieve airline IATA codes using the Airlines API endpoint.
     */
    airline_iata?: string;
    /**
     * Filter your results by airline ICAO code.
     * You can retrieve airline ICAO codes using the Airlines API endpoint.
     */
    airline_icao?: string;
    /**
     * Filter your results by providing a flight number.
     * Example: 2557
     */
    flight_number?: string;
    /**
     * Filter your results by providing a flight IATA code.
     * Example: MU2557
     */
    flight_iata?: string;
    /**
     * Filter your results by providing a flight ICAO code.
     * Example: CES2557
     */
    flight_icao?: string;
    /**
     * Filter your results by providing a minimum amount of minutes in departure delay.
     * Example: 7 for seven minutes of delay in departure.
     */
    min_delay_dep?: string;
    /**
     * Filter your results by providing a minimum amount of minutes in arrival delay.
     * Example: 7 for seven minutes of delay in arrival.
     */
    min_delay_arr?: string;
    /**
     * Filter your results by providing a maximum amount of minutes in departure delay.
     * Example: 60 for one hour of delay in departure.
     */
    max_delay_dep?: string;
    /**
     * Filter your results by providing a maximum amount of minutes in arrival delay.
     * Example: 60 for one hour of delay in arrival.
     */
    max_delay_arr?: string;
}

export interface AirportsOptions {
    /**
     * Specify a limit of results to return in your API response.
     * Maximum allowed value is 100 and default value is 100.
     */
    limit?: string;
    /**
     * Specify an offset for pagination. Default offset value is 0, starting with the first available result.
     * Example: Specifying an offset of 10 in combination with a limit of 10 will show results 10-20.
     */
    offset?: string;
}

export interface AirlinesOptions {
    /**
     * Specify a limit of results to return in your API response.
     * Maximum allowed value is 100 and default value is 100.
     */
    limit?: string;
    /**
     * Specify an offset for pagination. Default offset value is 0, starting with the first available result.
     * Example: Specifying an offset of 10 in combination with a limit of 10 will show results 10-20.
     */
    offset?: string;
}

export interface AirplanesOptions {
    /**
     * Specify a limit of results to return in your API response.
     * Maximum allowed value is 100 and default value is 100.
     */
    limit?: string;
    /**
     * Specify an offset for pagination. Default offset value is 0, starting with the first available result.
     * Example: Specifying an offset of 10 in combination with a limit of 10 will show results 10-20.
     */
    offset?: string;
}

export interface AircraftTypesOptions {
    /**
     * Specify a limit of results to return in your API response.
     * Maximum allowed value is 100 and default value is 100.
     */
    limit?: string;
    /**
     * Specify an offset for pagination. Default offset value is 0, starting with the first available result.
     * Example: Specifying an offset of 10 in combination with a limit of 10 will show results 10-20.
     */
    offset?: string;
}

export interface TaxesOptions {
    /**
     * Specify a limit of results to return in your API response.
     * Maximum allowed value is 100 and default value is 100.
     */
    limit?: string;
    /**
     * Specify an offset for pagination. Default offset value is 0, starting with the first available result.
     * Example: Specifying an offset of 10 in combination with a limit of 10 will show results 10-20.
     */
    offset?: string;
}

export interface CitiesOptions {
    /**
     * Specify a limit of results to return in your API response.
     * Maximum allowed value is 100 and default value is 100.
     */
    limit?: string;
    /**
     * Specify an offset for pagination. Default offset value is 0, starting with the first available result.
     * Example: Specifying an offset of 10 in combination with a limit of 10 will show results 10-20.
     */
    offset?: string;
}

export interface CountriesOptions {
    /**
     * Specify a limit of results to return in your API response.
     * Maximum allowed value is 100 and default value is 100.
     */
    limit?: string;
    /**
     * Specify an offset for pagination. Default offset value is 0, starting with the first available result.
     * Example: Specifying an offset of 10 in combination with a limit of 10 will show results 10-20.
     */
    offset?: string;
}
