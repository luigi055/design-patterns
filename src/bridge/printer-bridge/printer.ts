import IInk from "./ink";

type Print = String;

export default interface IPrinter {
  print(): Print;
}

export class HPPrinter implements IPrinter {
  private ink: IInk;
  constructor(ink: IInk) {
    this.ink = ink;
  }

  print(): Print {
    return `HP Printer with ${this.ink.getType()} ink`;
  }
}

export class EpsonPrinter implements IPrinter {
  private ink: IInk;
  constructor(ink: IInk) {
    this.ink = ink;
  }

  print(): Print {
    return `Epson Printer with ${this.ink.getType()} ink`;
  }
}
