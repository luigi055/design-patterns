import Stereo from "../../vendors/stereo";
import Command from "../command";

class StereoOffCommand implements Command {
  constructor(private stereo: Stereo) {}

  public execute(): void {
    this.stereo.off();
  }

  public undo(): void {
    this.stereo.on();
  }
}

export default StereoOffCommand;
