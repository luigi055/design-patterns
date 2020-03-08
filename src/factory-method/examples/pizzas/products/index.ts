import { Name, Dough, Sauce, Topping } from "./../models/types";

export default abstract class Pizza {
  name: Name = "";
  dough: Dough = "";
  sauce: Sauce = "";
  toppings: Topping[] = [];

  prepare(): void {
    console.log("Preparing " + this.name);
    console.log("Tossing dough...");
    console.log("Adding sauce...");
    console.log("Adding toppings: ");
  }

  bake(): void {
    console.log("Bake for 25 minutes at 350");
  }

  cut(): void {
    console.log("Cutting the pizza into diagonal slices");
  }

  box(): void {
    console.log("Place pizza in official PizzaStore box");
  }

  public getName(): Name {
    return this.name;
  }
}
