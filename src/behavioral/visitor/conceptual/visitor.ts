abstract class Visitor {
  public abstract visitConcreteElementA(
    concreteElementA: ConcreteElementA
  ): void;
  public abstract visitConcreteElementB(
    concreteElementB: ConcreteElementB
  ): void;
}

class ConcreteVisitor1 extends Visitor {
  public visitConcreteElementA(concreteElementA: ConcreteElementA): void {
    console.log("concreteElementA visited by ConcreteVisitor1");
  }

  public visitConcreteElementB(concreteElementB: ConcreteElementB): void {
    console.log("concreteElementB visited by ConcreteVisitor1");
  }
}

class ConcreteVisitor2 extends Visitor {
  public visitConcreteElementA(concreteElementA: ConcreteElementA): void {
    console.log("concreteElementA visited by ConcreteVisitor2");
  }

  public visitConcreteElementB(concreteElementB: ConcreteElementB): void {
    console.log("concreteElementB visited by ConcreteVisitor2");
  }
}

abstract class Element {
  public abstract accept(visitor: Visitor): void;
}

class ConcreteElementA extends Element {
  public accept(visitor: Visitor): void {
    visitor.visitConcreteElementA(this);
  }

  public operationA(): void {}
}

class ConcreteElementB extends Element {
  public accept(visitor: Visitor): void {
    visitor.visitConcreteElementB(this);
  }

  public operationB(): void {}
}

class ObjectStructure {
  private elements: Element[] = [];

  public attach(element: Element): void {
    this.elements.push(element);
  }

  public detach(element: Element): void {
    // this.elements.Remove(element); // TODO
    for (var i = this.elements.length - 1; i >= 0; i--) {
      if (this.elements[i] === element) {
        this.elements.splice(i, 1);
      }
    }
  }

  public accept(visitor: Visitor): void {
    this.elements.forEach((element) => element.accept(visitor));
  }
}

class MainApp {
  static application(): void {
    const object: ObjectStructure = new ObjectStructure();
    object.attach(new ConcreteElementA());
    object.attach(new ConcreteElementB());

    const v1: ConcreteVisitor1 = new ConcreteVisitor1();
    const v2: ConcreteVisitor2 = new ConcreteVisitor2();

    object.accept(v1);
    object.accept(v2);
  }
}

MainApp.application();
