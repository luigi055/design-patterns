import { beveragesTypes } from "./../../model/types";
import Beverage from "../index";

class Decaf extends Beverage {
  constructor() {
    super();

    this.setDescription(beveragesTypes.decaf);
  }

  cost() {
    return 1.05;
  }
}

export default Decaf;
