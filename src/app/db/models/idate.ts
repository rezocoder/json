export interface IDate {
  currentDate: string;
  days: IDay[];
}

export interface IDay {
  date: string;
  isActive: boolean;
}
