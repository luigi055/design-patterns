# The Factory Method:

The Factory Method Pattern defines an interface for creating an object, but lets subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

## Structure UML

![](../../../umls/factory-method.jpg)

## Actors:

- **Product**
  - defines the interface of objects the factory method creates
- **ConcreteProduct**
  - implements the Product interface
- **Creator**
  - declares the factory method, which returns an object of type Product. Creator may also define a default implementation of the factory method that returns a default ConcreteProduct object.
  - may call the factory method to create a Product object.
- **ConcreteCreator**
  - overrides the factory method to return an instance of a ConcreteProduct.
