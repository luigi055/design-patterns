import Command from "../command";
import Hottub from "../../vendors/hottub";

class HottubOnCommand implements Command {
  constructor(private hottub: Hottub) {}

  public execute(): void {
    this.hottub.on();
    this.hottub.setTemperature(104);
    this.hottub.circulate();
  }

  public undo(): void {
    this.hottub.off();
  }
}

export default HottubOnCommand;
