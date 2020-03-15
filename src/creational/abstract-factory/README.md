## The Abstract Factory

The Abstract Factory Pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes.

## Structure UML

![](../../../umls/abstract-factory.jpg)

## Actors

- **AbstractFactory**
  - declares an interface for operations that create abstract products
- **ConcreteFactory**
  - implements the operations to create concrete product objects
- **AbstractProduct**
  - declares an interface for a type of product object
- **Product**
  - defines a product object to be created by the corresponding concrete factory
  - implements the AbstractProduct interface
- **Client**
  - uses interfaces declared by AbstractFactory and AbstractProduct classes
