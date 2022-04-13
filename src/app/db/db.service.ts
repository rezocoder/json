import { Injectable } from "@angular/core";
import { BehaviorSubject, debounceTime, filter, of, switchMap, timeout } from "rxjs";
import { IDate } from "./models/idate";
import { ILeaderboard } from "./models/ileaderboard";
import { IMissions } from "./models/imissions";
import { ITickets } from "./models/iticket";

@Injectable({
  providedIn: 'root'
})
export class DBService {
  private _dates!: IDate;
  private _tickets!: ITickets;
  private _missions!: IMissions;
  private _leaderboardDates!: IDate;
  private _leaderboard!: ILeaderboard;
  private _isLoaded$ = new BehaviorSubject<boolean>(false);
  private _routerMap!: { [name: string]: any };
  constructor() {
    this.loadJSON();
    setTimeout(() => {
      this._routerMap = {
        'api/GetDates': this._dates,
        'api/GetTickets': this._tickets,
        'api/GetMissions': this._missions,
        'api/GetLeaderboardDates': this._leaderboardDates,
        'api/GetLeaderboard': this._leaderboard
      };
      this._isLoaded$.next(true);
    }, 500);
  }
  getBetslip(date: string) {
    return this.tickets[date].betslip;
  }

  httpGet(route: string) {
    return this._isLoaded$
      .pipe(
        filter(isloaded => isloaded),
        switchMap(() => {
          console.log(this._routerMap, this._routerMap[route])
          return of(this._routerMap[route])
        })
      );
  }

  get isLoaded$() {
    return this._isLoaded$;
  }

  get dates() {
    return this._dates;
  }
  get tickets() {
    return this._tickets;
  }
  get missions() {
    return this._missions;
  }
  get leaderboardDates() {
    return this._leaderboardDates;
  }
  get leaderboard() {
    return this._leaderboard;
  }

  private loadJSON() {
    this.loadDates();
    this.loadTickets();
    this.loadMissions();
    this.loadLeaderboardDates();
    this.loadLeaderboard();
  }

  private loadDates() {
    fetch('assets/db/date.json')
      .then(res => res.json())
      .then(res => this._dates = res);
  }

  private loadTickets() {
    fetch('assets/db/tickets.json')
      .then(res => res.json())
      .then(res => this._tickets = res);
  }

  private loadMissions() {
    fetch('assets/db/missions.json')
      .then(res => res.json())
      .then(res => this._missions = res);
  }

  private loadLeaderboardDates() {
    fetch('assets/db/leaderboard-dates.json')
      .then(res => res.json())
      .then(res => this._leaderboardDates = res)
  }

  private loadLeaderboard() {
    fetch('assets/db/leaderboard.json')
      .then(res => res.json())
      .then(res => this._leaderboard = res);
  }
}
