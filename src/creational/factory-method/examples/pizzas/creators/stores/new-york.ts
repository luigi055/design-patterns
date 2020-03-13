import PizzaStore from "..";
import Pizza from "../../products";
import {
  CheesePizza,
  VeggiePizza,
  PepperoniPizza,
  ClamPizza
} from "../../products/new-york-style";
import { pizzaType } from "../../models/types";

class NYPizzaStore extends PizzaStore {
  createPizza(item: pizzaType): Pizza {
    if (item === pizzaType.cheese) {
      return new CheesePizza();
    } else if (item === pizzaType.veggie) {
      return new VeggiePizza();
    } else if (item === pizzaType.clam) {
      return new ClamPizza();
    } else if (item === pizzaType.pepperoni) {
      return new PepperoniPizza();
    } else {
      throw new Error("Not Valid Pizza Type");
    }
  }
}

export default NYPizzaStore;
