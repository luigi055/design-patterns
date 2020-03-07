interface IIterator {
  first(): any;
  currentItem(): any;
  next(): any;
  isDone(): boolean;
}

/**
 * Concrete Iterators implement various traversal algorithms. These classes
 * store the current traversal position at all times.
 */

class ConcreteIterator implements IIterator {
  private currentPosition: number = 0;

  constructor(private aggregate: ConcreteAggregate) {}

  public first() {
    return this.aggregate.getItems()[0];
  }

  public next() {
    const nextItem = this.aggregate.getItems()[this.currentPosition];
    this.currentPosition++;
    return nextItem;
  }

  public currentItem() {
    return this.aggregate.getItems()[this.currentPosition];
  }

  public isDone() {
    const isCurrentBiggerOrEqualThanAggregateItems =
      this.currentPosition >= this.aggregate.count();

    return isCurrentBiggerOrEqualThanAggregateItems;
  }
}

interface Aggregate {
  createIterator(): IIterator;
}

/**
 * Concrete Collections provide one or several methods for retrieving fresh
 * iterator instances, compatible with the collection class.
 */

class ConcreteAggregate implements Aggregate {
  private items: any[] = [];

  public createIterator(): IIterator {
    return new ConcreteIterator(this);
  }

  public count(): number {
    return this.items.length;
  }

  public getItems() {
    return this.items;
  }

  public addItem(item: any) {
    this.items.push(item);
  }
}

/**
 * The client code may or may not know about the Concrete Iterator or Collection
 * classes, depending on the level of indirection you want to keep in your
 * program.
 */
function client() {
  const concreteAggregate = new ConcreteAggregate();
  concreteAggregate.addItem("Item A");
  concreteAggregate.addItem("Item B");
  concreteAggregate.addItem("Item C");
  concreteAggregate.addItem("Item D");

  const iterator: IIterator = concreteAggregate.createIterator();

  console.log("Iterating over collection");

  while (!iterator.isDone()) {
    console.log(iterator.next());
  }
}

client();
