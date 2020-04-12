abstract class Mediator {
  public abstract send(message: string, colleague: Colleague): void;
}

class ConcreteMediator extends Mediator {
  private colleague1!: ConcreteColleague1;
  private colleague2!: ConcreteColleague2;

  public setColleague1(colleague: ConcreteColleague1) {
    this.colleague1 = colleague;
  }

  public setColleague2(colleague: ConcreteColleague2) {
    this.colleague2 = colleague;
  }

  public send(message: string, colleague: Colleague): void {
    if (colleague === this.colleague1) {
      this.colleague2.notify(message);
    } else {
      this.colleague1.notify(message);
    }
  }
}

abstract class Colleague {
  constructor(protected mediator: Mediator) {
    this.mediator = mediator;
  }
}

class ConcreteColleague1 extends Colleague {
  constructor(mediator: Mediator) {
    super(mediator);
  }

  public send(message: string): void {
    this.mediator.send(message, this);
  }

  public notify(message: string): void {
    console.log(`Colleague1 gets message: ${message}`);
  }
}

class ConcreteColleague2 extends Colleague {
  constructor(mediator: Mediator) {
    super(mediator);
  }

  public send(message: string): void {
    this.mediator.send(message, this);
  }

  public notify(message: string): void {
    console.log(`Colleague2 gets message: ${message}`);
  }
}

class MainApp {
  static application(): void {
    const mediator: ConcreteMediator = new ConcreteMediator();

    const concreteColleague1: ConcreteColleague1 = new ConcreteColleague1(
      mediator
    );
    const concreteColleague2: ConcreteColleague2 = new ConcreteColleague2(
      mediator
    );

    mediator.setColleague1(concreteColleague1);
    mediator.setColleague2(concreteColleague2);

    concreteColleague1.send("How are you?");
    concreteColleague2.send("Fine, thanks");
  }
}

MainApp.application();
