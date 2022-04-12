export interface IMissions {
  [name: string]: {
    [missionname: string]: {
      min: number;
			max: number;
			current: number
			isFullfilled: boolean;
    }
  }
}
