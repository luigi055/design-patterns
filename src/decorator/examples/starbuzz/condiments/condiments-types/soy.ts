import { condimentsTypes } from "./../../model/types";
import Condiment from "../decorator";
import Beverage from "../../beverages";

class Soy extends Condiment {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription() {
    return `${this.beverage.getDescription()}, ${condimentsTypes.Soy}`;
  }

  cost() {
    const value = this.beverage.cost() + 0.15;
    return +value.toFixed(2);
  }
}

export default Soy;
