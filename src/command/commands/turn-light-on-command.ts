import Command from "./command";
import Light from "../light";

class TurnLightOnCommand implements Command {
  constructor(private light: Light) {}

  execute() {
    this.light.on();
  }
}

export default TurnLightOnCommand;
