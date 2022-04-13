import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { DBService } from './db/db.service';
import { IBetslip } from './db/models/iticket';
import { HttpRequestService } from './services/http-request.service';


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
    private httpRequestService: HttpRequestService
  ) {}

  ngOnInit() {
    this.httpRequestService.getData()
      .subscribe(data => console.log(data));

    // this.httpRequestService.getTickets('')
    //   .subscribe(data => {
    //   })

  }
}
