class Context {}

abstract class AbstractExpression {
  public abstract interpret(context: Context): void;
}

class TerminalExpression extends AbstractExpression {
  public interpret(context: Context): void {
    console.log("Called Terminal.Interpret()");
  }
}

class NonterminalExpression extends AbstractExpression {
  public interpret(context: Context): void {
    console.log("Called Nonterminal.Interpret()");
  }
}

class MainApp {
  static application(): void {
    const context: Context = new Context();

    const expressions = [];

    expressions.push(new TerminalExpression());
    expressions.push(new NonterminalExpression());
    expressions.push(new TerminalExpression());
    expressions.push(new TerminalExpression());

    expressions.forEach((expression) => expression.interpret(context));
  }
}

MainApp.application();
