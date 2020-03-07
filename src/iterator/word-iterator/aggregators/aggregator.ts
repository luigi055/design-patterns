import Iterator from "../iterators";

interface Aggregator {
  getIterator(): Iterator<string>;
}

export default Aggregator;
