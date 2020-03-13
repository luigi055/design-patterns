import Television from "../../vendors/television";
import Command from "../command";

class TVOnCommand implements Command {
  constructor(private tv: Television) {}

  public execute(): void {
    this.tv.on();
    this.tv.setInputChannel();
  }

  public undo(): void {
    this.tv.off();
  }
}

export default TVOnCommand;
