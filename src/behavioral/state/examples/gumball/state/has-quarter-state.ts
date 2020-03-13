import State from "./state";
import GumBallMachine from "../gumball-machine";

class HasQuarterState implements State {
  constructor(private gumBallMachine: GumBallMachine) {}

  insertQuarter(): void {
    console.log("You can't insert another quarter");
  }

  public ejectQuarter(): void {
    console.log("Quarter returned");
    this.gumBallMachine.setState(this.gumBallMachine.getNoQuarterState());
  }

  public turnCrank(): void {
    console.log("You turned...");
    this.gumBallMachine.setState(this.gumBallMachine.getSoldState());
  }

  public dispense(): void {
    console.log("No gumball dispensed");
  }

  public toString(): string {
    return "waiting for turn of crank";
  }
}

export default HasQuarterState;
