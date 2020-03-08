import { beveragesTypes } from "./../../model/types";
import Beverage from "../index";

class Espresso extends Beverage {
  constructor() {
    super();

    this.setDescription(beveragesTypes.espresso);
  }

  cost() {
    return 1.99;
  }
}

export default Espresso;
