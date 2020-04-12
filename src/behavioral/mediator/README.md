# Mediator Pattern:

Define an object that encapsulates how a set of objects interact. Mediator promotes loose coupling by keeping objects from referring to each other explicitly, and it lets you vary their interaction independently.

## Structure UML

![](../../../umls/mediator.gif)

## Actors

**Mediator**

- defines an interface for communicating with Colleague objects

- **ConcreteMediator**

  - implements cooperative behavior by coordinating Colleague objects
  - knows and maintains its colleagues

- **Colleague classes**
  - each Colleague class knows its Mediator object
  - each colleague communicates with its mediator whenever it would have otherwise communicated with another colleague
