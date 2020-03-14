class SubSystemOne {
  public methodOne(): void {
    console.log(" SubSystemOne Method");
  }
}

class SubSystemTwo {
  public methodTwo(): void {
    console.log(" SubSystemTwo Method");
  }
}

class SubSystemThree {
  public methodThree(): void {
    console.log(" SubSystemThree Method");
  }
}

class SubSystemFour {
  public methodFour(): void {
    console.log(" SubSystemFour Method");
  }
}

class Facade {
  private subSystemOne: SubSystemOne;
  private subSystemTwo: SubSystemTwo;
  private subSystemThree: SubSystemThree;
  private subSystemFour: SubSystemFour;

  public constructor() {
    this.subSystemOne = new SubSystemOne();
    this.subSystemTwo = new SubSystemTwo();
    this.subSystemThree = new SubSystemThree();
    this.subSystemFour = new SubSystemFour();
  }

  public methodA(): void {
    console.log("MethodA() ---- ");
    this.subSystemOne.methodOne();
    this.subSystemTwo.methodTwo();
    this.subSystemFour.methodFour();
  }

  public methodB(): void {
    console.log("MethodB() ---- ");
    this.subSystemTwo.methodTwo();
    this.subSystemThree.methodThree();
  }
}

function clientCode() {
  const facade: Facade = new Facade();

  facade.methodA();
  facade.methodB();
}

clientCode();
