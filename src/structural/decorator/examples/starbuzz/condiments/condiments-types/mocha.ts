import { condimentsTypes } from "./../../model/types";
import Condiment from "../decorator";
import Beverage from "../../beverages";

class Mocha extends Condiment {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription() {
    return `${this.beverage.getDescription()}, ${condimentsTypes.Mocha}`;
  }

  cost() {
    const value = this.beverage.cost() + 0.2;
    return +value.toFixed(2);
  }
}

export default Mocha;
