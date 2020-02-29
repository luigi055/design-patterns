import { Count } from "./model/types";
import HasQuarterState from "./state/has-quarter-state";
import State from "./state/state";
import NoQuarterState from "./state/no-quarter-state";
import SoldOutState from "./state/sold-out-state";
import SoldState from "./state/sold-state";

class GumBallMachine {
  public hasQuarterState: State;
  public noQuarterState: State;
  public soldOutState: State;
  public soldState: State;

  private state: State;
  private gumballNumber: Count = 0;

  constructor(gumballNumber: Count) {
    this.gumballNumber = gumballNumber;

    this.hasQuarterState = new HasQuarterState(this);
    this.noQuarterState = new NoQuarterState(this);
    this.soldOutState = new SoldOutState(this);
    this.soldState = new SoldState(this);

    if (this.gumballNumber > 0) {
      this.state = this.noQuarterState;
    } else {
      this.state = this.soldOutState;
    }
  }

  public insertQuarter(): void {
    this.state.insertQuarter();
  }

  public ejectQuarter(): void {
    this.state.ejectQuarter();
  }

  public turnCrank(): void {
    this.state.turnCrank();
    this.state.dispense();
  }

  public releaseBall(): void {
    console.log("A gumball comes rolling out the slot...");
    if (this.gumballNumber !== 0) {
      this.gumballNumber = this.gumballNumber - 1;
      this.state = this.noQuarterState;
    }
  }

  public refill(gumballNumber: Count) {
    this.gumballNumber += gumballNumber;
    this.state = this.noQuarterState;
  }

  public getCurrentState(): State {
    return this.state;
  }

  public setState(state: State): void {
    this.state = state;
  }

  public getGumballAmount(): Count {
    return this.gumballNumber;
  }

  public getSoldOutState(): State {
    return this.soldOutState;
  }

  public getNoQuarterState(): State {
    return this.noQuarterState;
  }

  public getHasQuarterState(): State {
    return this.hasQuarterState;
  }

  public getSoldState(): State {
    return this.soldState;
  }
}

export default GumBallMachine;
