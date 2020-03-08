import { Description, Money } from "../model/types";

abstract class Beverage {
  description: Description = "Unknown Beverage";

  getDescription(): Description {
    return this.description;
  }

  setDescription(description: Description) {
    this.description = description;
  }

  abstract cost(): Money;
}

export default Beverage;
