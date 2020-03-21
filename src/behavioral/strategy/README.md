# Strategy:

Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it.

## Structure UML

### Original from GOF using inheritance

![](../../../umls/strategy.gif)

### modern approach using composition

![](../../../umls/strategy-composition.png)

## Actors

- **Strategy**

  - declares an interface common to all supported algorithms. Context uses this interface to call the algorithm defined by a ConcreteStrategy.

- **ConcreteStrategy**

  - implements the algorithm using the Strategy interface.

- **Context**

  - is configured with a ConcreteStrategy object.
  - maintains a reference to a Strategy object.

– may define an interface that lets Strategy access its data.
