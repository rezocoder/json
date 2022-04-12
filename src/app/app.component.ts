import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { throws } from 'assert';
import { DBService } from './db/db.service';
import { IBetslip } from './db/models/iticket';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'json';
  betslip!: IBetslip[];
  //countryList:{name:String, code:String}[]=countries;

  constructor(
    private dbService: DBService
  ) {}

  ngOnInit() {
    let date = this.dbService.dates;

    let ticket = this.dbService.tickets;
    this.betslip = this.dbService.getBetslip(date.currentDate);

  }
}
