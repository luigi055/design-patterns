# Prototype

Specify the kinds of objects to create using a prototypical instance, and create new objects by copying this prototype.

Lets you copy existing objects without making your code dependent on their classes.

## Structure UML

![](../../../umls/prototype.gif)

## Actors

- Prototype
  declares an interface for cloning itself
- ConcretePrototype (Color)
  implements an operation for cloning itself
- Client
  creates a new object by asking a prototype to clone itself
