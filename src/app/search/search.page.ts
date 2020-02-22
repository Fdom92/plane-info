import { Component } from '@angular/core';
import { AvionStackService } from '../shared/services/avionstack.service';
import { FlightsOptions } from '../models/api-options.model';
import { Flight } from '../models/flight.model';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage {

  results: boolean;

  flightNumber = '';
  flights: Array<Flight> = [];

  flightSearched = false;
  flightSelected: Flight;

  constructor(private avionStackService: AvionStackService) { }

  searchFlight() {
    if (this.flightNumber) {
      this.flightSearched = true;
      const options: FlightsOptions = {
        flight_iata: this.flightNumber
      };
      this.avionStackService.flights(options).subscribe(flightResponse => {
        this.flights = flightResponse.data;
        this.results = flightResponse.data.length > 0 ? true : false;
      });
    }
  }

  cancel() {
    this.results = null;
    this.flights = null;
    this.flightSearched = false;
  }


  openFlight(flight: Flight) {
    if (this.flightSelected === flight) {
      this.flightSelected = null;
    } else {
      this.flightSelected = flight;
    }
  }
}
