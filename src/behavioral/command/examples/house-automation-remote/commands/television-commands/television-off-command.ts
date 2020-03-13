import Television from "../../vendors/television";
import Command from "../command";

class TVOffCommand implements Command {
  constructor(private tv: Television) {}

  public execute(): void {
    this.tv.off();
  }

  public undo(): void {
    this.tv.on();
  }
}

export default TVOffCommand;
