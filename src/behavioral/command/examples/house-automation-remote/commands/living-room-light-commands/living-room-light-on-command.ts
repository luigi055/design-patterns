import Command from "../command";
import Light from "../../vendors/light";

class LivingRoomLightOnCommand implements Command {
  constructor(private light: Light) {}

  public execute(): void {
    this.light.on();
  }

  public undo(): void {
    this.light.off();
  }
}

export default LivingRoomLightOnCommand;
