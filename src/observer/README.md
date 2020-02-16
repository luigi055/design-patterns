# The Observer Pattern:

defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.

Publisher = Subject.
Subscribers = Observers.
Publishers + Subscribers = Observer Pattern.

## Loose Coupling

When two objects are loosely coupled, they can interact, but have very little knowledge of each other.

The Observer Pattern provides an object design where subjects and observers are loosely coupled.

Why?

The only thing the subject knows about an observer is that it implements a certain interface (the Observer interface). It doesn’t need to know the concrete class of the observer, what it does, or anything else about it.
