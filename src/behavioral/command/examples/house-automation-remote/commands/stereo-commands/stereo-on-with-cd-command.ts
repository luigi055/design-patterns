import Stereo from "../../vendors/stereo";
import Command from "../command";

class StereoOnWithCDCommand implements Command {
  constructor(private stereo: Stereo) {}

  public execute(): void {
    this.stereo.on();
    this.stereo.setCD();
    this.stereo.setVolume(11);
  }

  public undo(): void {
    this.stereo.off();
  }
}

export default StereoOnWithCDCommand;
