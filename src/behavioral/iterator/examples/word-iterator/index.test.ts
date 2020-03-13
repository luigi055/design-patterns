import { WordsCollection } from "./aggregators";

describe("Testing WeatherData observer", () => {
  beforeEach(() => {
    global.console.log = jest.fn();
  });

  it("should start the wordsCollection without items", () => {
    const collection = new WordsCollection();

    expect(collection.getCount()).toBe(0);
    expect(collection.getItems()).toEqual([]);
  });

  it("should add items to the collection", () => {
    const collection = new WordsCollection();
    collection.addItem("First");
    collection.addItem("Second");

    expect(collection.getCount()).toBe(2);
    expect(collection.getItems()).toEqual(["First", "Second"]);
  });

  it("should return the first item using the iterator", () => {
    const collection = new WordsCollection();
    collection.addItem("First");
    collection.addItem("Second");

    const iterator = collection.getIterator();

    expect(iterator.next()).toBe("First");
    expect(iterator.valid()).toBe(true);
  });

  it("should return the second value when call next twice", () => {
    const collection = new WordsCollection();
    collection.addItem("First");
    collection.addItem("Second");
    collection.addItem("Third");

    const iterator = collection.getIterator();
    iterator.next();
    expect(iterator.next()).toBe("Second");
    expect(iterator.valid()).toBe(true);
  });

  it("should return the third value when call next and getReverseIterator", () => {
    const collection = new WordsCollection();
    collection.addItem("First");
    collection.addItem("Second");
    collection.addItem("Third");

    const iterator = collection.getReverseIterator();
    expect(iterator.next()).toBe("Third");
    expect(iterator.valid()).toBe(true);
  });

  it("should return the second value when call next twice and getReverseIterator", () => {
    const collection = new WordsCollection();
    collection.addItem("First");
    collection.addItem("Second");
    collection.addItem("Third");

    const iterator = collection.getReverseIterator();
    iterator.next();
    expect(iterator.next()).toBe("Second");
    expect(iterator.valid()).toBe(true);
  });

  it("should valid method return false when call next twice and there is only one item", () => {
    const collection = new WordsCollection();
    collection.addItem("First");

    const iterator = collection.getReverseIterator();
    iterator.next();
    expect(iterator.next()).toBe(undefined);
    expect(iterator.valid()).toBe(false);
  });
});
