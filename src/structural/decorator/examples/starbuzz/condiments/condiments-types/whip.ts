import { condimentsTypes } from "./../../model/types";
import Condiment from "../decorator";
import Beverage from "../../beverages";

class Whip extends Condiment {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription() {
    return `${this.beverage.getDescription()}, ${condimentsTypes.Whip}`;
  }

  cost() {
    const value = this.beverage.cost() + 0.1;
    return +value.toFixed(2);
  }
}

export default Whip;
