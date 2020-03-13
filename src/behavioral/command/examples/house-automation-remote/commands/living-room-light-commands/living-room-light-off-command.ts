import Command from "../command";
import Light from "../../vendors/light";

class LivingRoomLightOffCommand implements Command {
  constructor(private light: Light) {}

  public execute(): void {
    this.light.off();
  }

  public undo(): void {
    this.light.on();
  }
}

export default LivingRoomLightOffCommand;
