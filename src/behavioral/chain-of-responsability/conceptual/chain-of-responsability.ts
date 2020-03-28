abstract class Handler {
  protected successor!: Handler;

  public setSuccessor(successor: Handler): void {
    this.successor = successor;
  }

  public abstract handleRequest(request: number): void;
}

class ConcreteHandler1 extends Handler {
  public handleRequest(request: number): void {
    if (request >= 0 && request < 10) {
      console.log("{0} handled request {1}", "ConcreteHandler1", request);
    } else if (this.successor != null) {
      this.successor.handleRequest(request);
    }
  }
}

class ConcreteHandler2 extends Handler {
  public handleRequest(request: number): void {
    if (request >= 10 && request < 20) {
      console.log("{0} handled request {1}", "ConcreteHandler2", request);
    } else if (this.successor != null) {
      this.successor.handleRequest(request);
    }
  }
}

class ConcreteHandler3 extends Handler {
  public handleRequest(request: number): void {
    if (request >= 20 && request < 30) {
      console.log("{0} handled request {1}", "ConcreteHandler3", request);
    } else if (this.successor != null) {
      this.successor.handleRequest(request);
    }
  }
}

class MainApp {
  static main(): void {
    const h1: Handler = new ConcreteHandler1();
    const h2: Handler = new ConcreteHandler2();
    const h3: Handler = new ConcreteHandler3();
    h1.setSuccessor(h2);
    h2.setSuccessor(h3);

    const requests: number[] = [2, 5, 14, 22, 18, 3, 27, 20];

    requests.forEach(request => {
      h1.handleRequest(request);
    });
  }
}

MainApp.main();
