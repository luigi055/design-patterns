# Bridge

Bridge is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.

Use the Bridge Pattern to vary not only your implementations, but also your abstractions.

## Structure UML

![](../../../umls/bridge.gif)

## Actors

- **Abstraction**

  - defines the abstraction's interface.
  - maintains a reference to an object of type Implementor.

- **RefinedAbstraction**

  - extends the interface defined by Abstraction.

- **Implementor**

  - defines the interface for implementation classes. This interface doesn't have to correspond exactly to Abstraction's interface; in fact the two interfaces can be quite different. Typically the Implementation interface provides only primitive operations, and Abstraction defines higher-level operations based on these primitives.

- **ConcreteImplementor**
  - implements the Implementor interface and defines its concrete implementation.

## Benefits of Bridge

- Decouples an implementation so that it is not bound permanently to an interface.
- Abstraction and implementation can be extended independently.
- Changes to the concrete abstraction classes don’t affect the client.

## Bridge Uses and drawbacks

- Useful in graphics and windowing systems that need to run over multiple platforms.
- Useful any time you need to vary an interface and an implementation in different ways.
- Increases complexity.
