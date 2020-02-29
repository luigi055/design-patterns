import State from "./state";
import GumBallMachine from "../gumball-machine";

class NoQuarterState implements State {
  constructor(private gumBallMachine: GumBallMachine) {}

  public insertQuarter(): void {
    console.log("You inserted a quarter");
    this.gumBallMachine.setState(this.gumBallMachine.getHasQuarterState());
  }

  public ejectQuarter(): void {
    console.log("There is not quarter in the machine, please insert a quarter");
    this.gumBallMachine.setState(this.gumBallMachine.getNoQuarterState());
  }

  public turnCrank(): void {
    console.log(
      "There is not quarter in the machine, please insert a quarter after turn crank the machine"
    );
    this.gumBallMachine.setState(this.gumBallMachine.getSoldState());
  }

  public dispense(): void {
    console.log("No gumball dispensed");
  }

  public toString(): string {
    return "waiting for turn of crank";
  }
}

export default NoQuarterState;
