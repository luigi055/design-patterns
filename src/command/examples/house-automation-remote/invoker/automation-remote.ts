import { getClassName } from "./utils";
import Command, { NoCommand } from "../commands";
import { Slot, Message } from "./models/types";

class RemoteControl {
  onCommands: Command[];
  offCommands: Command[];
  undoCommand: Command;

  constructor() {
    this.onCommands = new Array(7);
    this.offCommands = new Array(7);

    const noCommand: Command = new NoCommand();

    for (let i = 0; i < 7; i++) {
      this.onCommands[i] = noCommand;
      this.offCommands[i] = noCommand;
    }
    this.undoCommand = noCommand;
  }

  public setCommand(slot: Slot, onCommand: Command, offCommand: Command): void {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  public onButtonWasPushed(slot: Slot): void {
    this.onCommands[slot].execute();
    this.undoCommand = this.onCommands[slot];
  }

  public offButtonWasPushed(slot: Slot): void {
    this.offCommands[slot].execute();
    this.undoCommand = this.offCommands[slot];
  }

  public undoButtonWasPushed(): void {
    this.undoCommand.undo();
  }

  public toString(): Message {
    let message: Message = "------ Remote Control -------\n";

    this.onCommands.forEach((__, index) => {
      message += `[Slot ${index}] ${getClassName(
        this.onCommands[index]
      )} | ${getClassName(this.offCommands[index])}\n`;
    });

    message += `[undo] ${getClassName(this.undoCommand)}\n`;
    return message;
  }
}

export default RemoteControl;
