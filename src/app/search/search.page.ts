import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { AvionStackService } from '../shared/services/avionstack.service';
import { FlightsOptions } from '../models/api-options.model';
import { Flight } from '../models/flight.model';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
  animations: [
    trigger('openClose', [
      state('closed', style({
        width: '70%',
        height: '25%'
      })),
      state('opened', style({
        width: '100%',
        height: '100%',
        'border-radius': '0',
        background: 'rgba(255, 255, 255, 1)'
      })),
      transition('closed => opened', [
        animate('1s')
      ]),
      transition('opened => closed', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class SearchPage {

  results: boolean;

  flight: Flight;
  flights: Array<Flight> = [];
  flightNumber: string;

  constructor(private avionStackService: AvionStackService) { }

  searchFlight() {
    if (this.flightNumber) {
      const options: FlightsOptions = {
        flight_iata: this.flightNumber
      };
      this.avionStackService.flights(options).subscribe(flightResponse => {
        this.flights = flightResponse.data;
        this.results = flightResponse.data.length > 0 ? true : false;
        setTimeout(() => {
          this.flight = this.flights[0];
        }, 1100);
      });
    }
  }

}
