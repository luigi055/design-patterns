# The Command Pattern

The Command Pattern encapsulates a request as an object, thereby letting you parameterize other objects with different requests, queue or log requests, and support undoable operations.

## Actors:

**Commands**: The Command interface declares a method for executing a command,some commands can implement simple operations on their own. However, some commands can delegate more complex operations to other objects, called "receivers."

**client, Source or Invoker:** the button, toolbar button, or menu item clicked, the shortcut key pressed by the user. The Invoker does not depend on concrete command or receiver classes. The Invoker passes a request to a receiver indirectly, by executing a command.

**Receiver, Target Object:** The receiver object owns the method that is called by the command's execute method. The receiver is typically also the target object. For example, if the receiver object is a cursor and the method is called moveUp, then one would expect that the cursor is the target of the moveUp action. On the other hand, if the code is defined by the command object itself, the target object will be a different object entirely.

The Receiver classes contain some important business logic. They know how to perform all kinds of operations, associated with carrying out a request. In fact, any class may serve as a Receiver.
