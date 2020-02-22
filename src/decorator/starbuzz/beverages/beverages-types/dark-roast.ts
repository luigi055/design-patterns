import { beveragesTypes } from "./../../model/types";
import Beverage from "../index";

class DarkRoast extends Beverage {
  constructor() {
    super();

    this.setDescription(beveragesTypes.darkRoast);
  }

  cost() {
    return 0.99;
  }
}

export default DarkRoast;
