import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { DBService } from "../db/db.service";
import { IDate } from "../db/models/idate";
import { ITickets } from "../db/models/iticket";

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  // 'api/GetDates'
  // 'api/GetTickets'
  // 'api/GetMissions'
  // 'api/GetLeaderboardDates'
  // 'api/GetLeaderboard'
  private _isLoaded = false;
  constructor(
    private dbService: DBService
  ) {
    this.dbService.isLoaded$
      .subscribe(() => {
        this._isLoaded = true;
      });
  }

  getData(): Observable<IDate> {
    return this.dbService.httpGet('api/GetDates');
  }

  getTickets(date: string): Observable<ITickets> {
    throw new Error('Implement this');
  }
}
