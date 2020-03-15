# Flyweight

Use sharing to support large numbers of fine-grained objects efficiently.

Lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects, instead of keeping all of the data in each object.

## Structure UML

![](../../../umls/flyweight.gif)

## Actors

- **Flyweight**

  - declares an interface through which flyweights can receive and act on extrinsic state.

- **ConcreteFlyweight**

  - implements the Flyweight interface and adds storage for intrinsic state, if any. A ConcreteFlyweight object must be sharable. Any state it stores must be intrinsic, that is, it must be independent of the ConcreteFlyweight object's context.

- **UnsharedConcreteFlyweight**

  - not all Flyweight subclasses need to be shared. The Flyweight interface enables sharing, but it doesn't enforce it. It is common for UnsharedConcreteFlyweight objects to have - - ConcreteFlyweight objects as children at some level in the flyweight object structure (as the Row and Column classes have).

- **FlyweightFactory**

  - creates and manages flyweight objects
  - ensures that flyweight are shared properly. When a client requests a flyweight, the FlyweightFactory objects assets an existing instance or creates one, if none exists.

- **Client**
  - maintains a reference to flyweight(s).
  - computes or stores the extrinsic state of flyweight(s)
