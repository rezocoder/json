import { BetslipStates } from "./emums/betslip-states.enum";
import { OutcomeStates } from "./emums/outcome-states.enum";
import { TicketStates } from "./emums/ticket-states.enum"

export interface ITickets {
  [name: string]: {
    state: TicketStates;
    betslip: IBetslip[];
  }
}

export interface IBetslip {
  firstTeam: string;
  firstTeamFlag: string;
  secondTeam: string;
  secondTeamFlag: string;
  startDate: string;
  state: BetslipStates;
  outcomes: IOutcome[];
}

export interface IOutcome {
  name: string;
  odd: number;
  state: OutcomeStates;
}
