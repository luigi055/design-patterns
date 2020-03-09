import Command from "../command";
import { SpeedLevel } from "../../vendors/ceiling-fan/models/types.d";
import CeilingFan from "../../vendors/ceiling-fan";
import { OFF, HIGH, MEDIUM, LOW } from "./../../vendors/ceiling-fan/models";

class CeilingFanOffCommand implements Command {
  private prevSpeed: SpeedLevel;

  constructor(private ceilingFan: CeilingFan) {
    this.prevSpeed = OFF;
  }

  public execute(): void {
    this.prevSpeed = this.ceilingFan.getSpeed();
    this.ceilingFan.off();
  }
  public undo(): void {
    switch (this.prevSpeed) {
      case HIGH:
        this.ceilingFan.high();
        break;
      case MEDIUM:
        this.ceilingFan.medium();
        break;
      case LOW:
        this.ceilingFan.low();
        break;
      default:
        this.ceilingFan.off();
        break;
    }
  }
}

export default CeilingFanOffCommand;
