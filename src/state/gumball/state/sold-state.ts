import State from "./state";
import GumBallMachine from "../gumball-machine";

class SoldState implements State {
  constructor(private gumBallMachine: GumBallMachine) {}

  public insertQuarter(): void {
    console.log("Please wait, we're already giving you a gumball");
  }

  public ejectQuarter(): void {
    console.log("Sorry, you already turned the crank");
  }

  public turnCrank(): void {
    console.log("Turning twice doesn't get you another gumball!");
  }

  public dispense(): void {
    this.gumBallMachine.releaseBall();
    if (this.gumBallMachine.getGumballAmount() > 0) {
      this.gumBallMachine.setState(this.gumBallMachine.getNoQuarterState());
    } else {
      console.log("Oops, out of gumballs!");
      this.gumBallMachine.setState(this.gumBallMachine.getSoldOutState());
    }
  }

  public toString(): string {
    return "dispensing a gumball";
  }
}

export default SoldState;
