# Template Method:

Defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.

## Structure UML

![](../../../umls/template-method.gif)

## Actors

- AbstractClass
  - defines abstract primitive operations that concrete subclasses define to implement steps of an algorithm
  - implements a template method defining the skeleton of an algorithm. The template method calls primitive operations as well as operations defined in AbstractClass or those of other objects.
- ConcreteClass
  - implements the primitive operations ot carry out subclass-specific steps of the algorithm
