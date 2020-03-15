# Adapter

Provides a unified interface that allows objects with incompatible interfaces to collaborate.

## Structure UML

![](../../../umls/adapter.gif)

## Actors

- **Target**
  defines the domain-specific interface that Client uses.

- **Client**
  collaborates with objects conforming to the Target interface.

- **Adaptee**
  contains some useful behavior, but its interface is incompatible with the existing client code. The Adaptee needs some adaptation before the client code can use it.

- **Adapter**
  adapts the interface of Adaptee to the Target interface.
