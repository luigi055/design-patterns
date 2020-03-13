abstract class Prototype {
  private id: string;

  constructor(id: string) {
    this.id = id;
  }

  public getID() {
    return this.id;
  }

  public updateID(id: string) {
    this.id = id;
  }

  public abstract clone(): Prototype;
}

class ConcretePrototype1 extends Prototype {
  constructor(id: string) {
    super(id);
  }

  public clone(): Prototype {
    const clone = Object.create(this);
    clone.id = this.getID();

    return clone;
  }
}

class ConcretePrototype2 extends Prototype {
  constructor(id: string) {
    super(id);
  }

  public clone(): Prototype {
    const clone = Object.create(this);
    clone.id = this.getID();

    return clone;
  }
}

function clientCode() {
  const prototype1 = new ConcretePrototype1("concrete 1");
  const clone1 = prototype1.clone();

  if (prototype1.getID() === clone1.getID()) {
    console.log("The id field value has been carried over to a clone. Yay!");
  }

  if (prototype1 !== clone1) {
    console.log(
      "The prototype was successfully cloned and has not reference to its father"
    );
  }

  const prototype2 = new ConcretePrototype2("concrete 2");
  const clone2 = prototype2.clone();

  prototype2.updateID("Hello world");

  if (prototype2.getID() !== clone2.getID()) {
    console.log(
      "Changing the value of the id in the parent object doesn't affect its child"
    );
    console.log(
      `Prototype object: ${prototype2.getID()}`,
      `Cloned object: ${clone2.getID()}`
    );
  }
}

clientCode();
