import Command from "../command";
import Hottub from "../../vendors/hottub";

class HottubOffCommand implements Command {
  constructor(private hottub: Hottub) {}

  public execute(): void {
    this.hottub.setTemperature(98);
    this.hottub.off();
  }

  public undo(): void {
    this.hottub.on();
  }
}

export default HottubOffCommand;
