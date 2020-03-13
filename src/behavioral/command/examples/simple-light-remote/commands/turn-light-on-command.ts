import Command from "./command";
import Light from "../receiver/light";

class TurnLightOnCommand implements Command {
  constructor(private light: Light) {}

  execute() {
    this.light.on();
  }
}

export default TurnLightOnCommand;
