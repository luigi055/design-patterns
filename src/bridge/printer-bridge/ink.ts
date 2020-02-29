export default interface IInk {
  getType(): string;
}

class Ink implements IInk {
  constructor(private type: string) {
    this.type = type;
  }

  getType() {
    return this.type;
  }
}

export class AcrylicInk extends Ink {
  constructor() {
    super("Acrylic-based");
  }
}

export class AlcoholInk extends Ink {
  constructor() {
    super("Alcohol-based");
  }
}
