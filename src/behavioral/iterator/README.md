# Iterator

Lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.).

## Actors:

- **Iterator** (AbstractIterator)
  defines an interface for accessing and traversing elements.
- **ConcreteIterator** (Iterator)
  implements the Iterator interface.
  keeps track of the current position in the traversal of the aggregate.
- **Aggregate** (AbstractCollection)
  defines an interface for creating an Iterator object
- **ConcreteAggregate** (Collection)
  implements the Iterator creation interface to return an instance of the proper ConcreteIterator