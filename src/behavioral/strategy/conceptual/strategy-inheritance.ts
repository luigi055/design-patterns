abstract class Strategy {
  public abstract algorithmInterface(): void;
}

class ConcreteStrategyA extends Strategy {
  public algorithmInterface(): void {
    console.log("Called ConcreteStrategyA.algorithmInterface()");
  }
}

class ConcreteStrategyB extends Strategy {
  public algorithmInterface(): void {
    console.log("Called ConcreteStrategyB.algorithmInterface()");
  }
}

class ConcreteStrategyC extends Strategy {
  public algorithmInterface(): void {
    console.log("Called ConcreteStrategyC.algorithmInterface()");
  }
}

class Context {
  constructor(private strategy: Strategy) {
    this.strategy = strategy;
  }

  public contextInterface(): void {
    this.strategy.algorithmInterface();
  }
}

function clientCode() {
  let context: Context;

  context = new Context(new ConcreteStrategyA());
  context.contextInterface();

  context = new Context(new ConcreteStrategyB());
  context.contextInterface();

  context = new Context(new ConcreteStrategyC());
  context.contextInterface();
}
