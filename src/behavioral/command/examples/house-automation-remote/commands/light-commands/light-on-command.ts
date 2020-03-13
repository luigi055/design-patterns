import Light from "./../../vendors/light";
import Command from "../command";

class LightOnCommand implements Command {
  constructor(private light: Light) {}

  public execute(): void {
    this.light.on();
  }

  public undo(): void {
    this.light.off();
  }
}

export default LightOnCommand;
