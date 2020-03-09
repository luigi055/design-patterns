import Command from "./command";

class NoCommand implements Command {
  execute(): void {}
  undo(): void {}
}

export default NoCommand;
