# The Decorator Pattern:

The Decorator Pattern attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

## Structure UML

![](../../../umls/decorator.gif)

## Actors

- **Component**

  - defines the interface for objects that can have responsibilities added to them dynamically.

- **ConcreteComponent**

  - defines an object to which additional responsibilities can be attached.

- **Decorator**

  - maintains a reference to a Component object and defines an interface that conforms to Component's interface.

- **ConcreteDecorator**
  - adds responsibilities to the component.
