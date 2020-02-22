import Beverage from "../beverages";
import { Description } from "../model/types";

abstract class Condiment extends Beverage {
  abstract getDescription(): Description;
}

export default Condiment;
