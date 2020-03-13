import Pizza from "..";

class ChicagoStyleClamPizza extends Pizza {
  constructor() {
    super();
    this.name = "Chicago Style Clam Pizza";
    this.dough = "Extra Thick Crust Dough";
    this.sauce = "Plum Tomato Sauce";

    this.toppings.push("Shredded Mozzarella Cheese");
    this.toppings.push("Frozen Clams from Chesapeake Bay");
  }
}

export default ChicagoStyleClamPizza;
