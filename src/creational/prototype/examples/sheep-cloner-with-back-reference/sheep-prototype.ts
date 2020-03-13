interface Mapping {
  [key: string]: Prototype;
}

abstract class Prototype {
  public circularReference: PrototypeWithBackReference | Mapping = {};

  constructor(private name: any) {
    this.name = name;
  }

  public getName(): any {
    return this.name;
  }

  public updateName(name: any): Prototype {
    this.name = name;

    return this;
  }

  public abstract clone(): Prototype;
}

export default class SheepPrototype extends Prototype {
  constructor(name: any) {
    super(name);
  }

  public clone(): Prototype {
    const clone = Object.create(this);
    clone.name = this.getName();

    // Cloning an object that has a nested object with backreference
    // requires special treatment. After the cloning is completed, the
    // nested object should point to the cloned object, instead of the
    // original object. Spread operator can be handy for this case.
    clone.circularReference = {
      ...this.circularReference,
      prototype: { ...this }
    };

    return clone;
  }
}

class PrototypeWithBackReference {
  constructor(public prototype: SheepPrototype) {
    this.prototype = prototype;
  }
}
