export interface ILeaderboard {
  [name: string]: {
    name: string;
    point: number;
    time: string;
    prize: string;
    extra: string;
  }
}
