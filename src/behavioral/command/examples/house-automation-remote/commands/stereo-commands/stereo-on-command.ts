import Stereo from "../../vendors/stereo";
import Command from "../command";

class StereoOnCommand implements Command {
  constructor(private stereo: Stereo) {}

  public execute(): void {
    this.stereo.on();
  }

  public undo(): void {
    this.stereo.off();
  }
}

export default StereoOnCommand;
