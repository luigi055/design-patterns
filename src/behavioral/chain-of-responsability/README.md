# Chain of Responsability

Lets you pass requests along a chain of han­dlers. Upon receiv­ing a request, each han­dler decides either to process the request or to pass it to the next han­dler in the chain.

## Structure UML

![](../../../umls/chain-of-responsability.gif)

## Actors

- **Handler**
  - defines an interface for handling the requests
  - (optional) implements the successor link
- **Base Han­dler**
  - It's an option­al class where you can put the boil­er­plate code that’s com­mon to all han­dler classes.
- **ConcreteHandler**
  - handles requests it is responsible for
  - can access its successor
  - if the ConcreteHandler can handle the request, it does so; otherwise it forwards the request to its successor
- **Client**
  - initiates the request to a ConcreteHandler object on the chain
