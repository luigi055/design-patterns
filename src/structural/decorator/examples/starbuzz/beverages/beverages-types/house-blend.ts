import { beveragesTypes } from "./../../model/types";
import Beverage from "../index";

class HouseBlend extends Beverage {
  constructor() {
    super();

    this.setDescription(beveragesTypes.houseBlend);
  }

  cost() {
    return 0.89;
  }
}

export default HouseBlend;
