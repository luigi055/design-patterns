import Light from "./../../vendors/light";
import Command from "../command";

class LightOffCommand implements Command {
  constructor(private light: Light) {}

  public execute(): void {
    this.light.off();
  }

  public undo(): void {
    this.light.on();
  }
}

export default LightOffCommand;
