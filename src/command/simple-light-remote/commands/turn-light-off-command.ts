import Command from "./command";
import Light from "../light";

class TurnLightOffCommand implements Command {
  constructor(private light: Light) {}

  execute() {
    this.light.off();
  }
}

export default TurnLightOffCommand;
