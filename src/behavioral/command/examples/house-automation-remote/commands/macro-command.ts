import Command from "./command";

class MacroCommand implements Command {
  constructor(private commands: Command[]) {}

  public execute(): void {
    this.commands.forEach(command => command.execute());
  }

  public undo(): void {
    for (let i = this.commands.length - 1; i >= 0; i--) {
      this.commands[i].undo();
    }
  }
}

export default MacroCommand;
