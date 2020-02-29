import Command from "../commands/command";

class LightRemote {
  constructor(private slot: Command) {}

  setCommand(command: Command): void {
    this.slot = command;
  }

  pressButton(): void {
    this.slot.execute();
  }
}

export default LightRemote;
