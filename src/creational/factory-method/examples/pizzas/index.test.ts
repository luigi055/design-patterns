import ChicagoPizzaStore from "./creators/stores/chicago";
import NYPizzaStore from "./creators/stores/new-york";
import { pizzaType } from "./models/types";

describe("Testing Pizza Stores franchise", () => {
  describe("Testing chicago pizza store", () => {
    it("should create a chicago style cheese pizza", () => {
      const chicagoPizzaStore = new ChicagoPizzaStore();

      const chicagoStyleCheesePizza = chicagoPizzaStore.createPizza(
        pizzaType.cheese
      );

      expect(chicagoStyleCheesePizza.getName()).toBe(
        "Chicago Style Deep Dish Cheese Pizza"
      );
      expect(chicagoStyleCheesePizza.dough).toBe("Extra Thick Crust Dough");
      expect(chicagoStyleCheesePizza.sauce).toBe("Plum Tomato Sauce");
      expect(chicagoStyleCheesePizza.toppings).toContain(
        "Shredded Mozzarella Cheese"
      );
    });

    it("should create a chicago style veggie pizza", () => {
      const chicagoPizzaStore = new ChicagoPizzaStore();

      const chicagoStyleCheesePizza = chicagoPizzaStore.createPizza(
        pizzaType.veggie
      );

      expect(chicagoStyleCheesePizza.getName()).toBe(
        "Chicago Deep Dish Veggie Pizza"
      );
      expect(chicagoStyleCheesePizza.dough).toBe("Extra Thick Crust Dough");
      expect(chicagoStyleCheesePizza.sauce).toBe("Plum Tomato Sauce");
      expect(chicagoStyleCheesePizza.toppings).toEqual([
        "Shredded Mozzarella Cheese",
        "Black Olives",
        "Spinach",
        "Eggplant"
      ]);
    });

    it("should create a chicago style pepperoni pizza", () => {
      const chicagoPizzaStore = new ChicagoPizzaStore();

      const chicagoStyleCheesePizza = chicagoPizzaStore.createPizza(
        pizzaType.pepperoni
      );

      expect(chicagoStyleCheesePizza.getName()).toBe(
        "Chicago Style Pepperoni Pizza"
      );
      expect(chicagoStyleCheesePizza.dough).toBe("Extra Thick Crust Dough");
      expect(chicagoStyleCheesePizza.sauce).toBe("Plum Tomato Sauce");
      expect(chicagoStyleCheesePizza.toppings).toEqual([
        "Shredded Mozzarella Cheese",
        "Black Olives",
        "Spinach",
        "Eggplant",
        "Sliced Pepperoni"
      ]);
    });

    it("should create a chicago style clam pizza", () => {
      const chicagoPizzaStore = new ChicagoPizzaStore();

      const chicagoStyleCheesePizza = chicagoPizzaStore.createPizza(
        pizzaType.clam
      );

      expect(chicagoStyleCheesePizza.getName()).toBe(
        "Chicago Style Clam Pizza"
      );
      expect(chicagoStyleCheesePizza.dough).toBe("Extra Thick Crust Dough");
      expect(chicagoStyleCheesePizza.sauce).toBe("Plum Tomato Sauce");
      expect(chicagoStyleCheesePizza.toppings).toEqual([
        "Shredded Mozzarella Cheese",
        "Frozen Clams from Chesapeake Bay"
      ]);
    });
  });

  describe("Testing new york pizza store", () => {
    it("should create a new york style cheese pizza", () => {
      const newYorkPizzaStore = new NYPizzaStore();

      const newYorkStyleCheesePizza = newYorkPizzaStore.createPizza(
        pizzaType.cheese
      );

      expect(newYorkStyleCheesePizza.getName()).toBe(
        "NY Style Sauce and Cheese Pizza"
      );
      expect(newYorkStyleCheesePizza.dough).toBe("Thin Crust Dough");
      expect(newYorkStyleCheesePizza.sauce).toBe("Marinara Sauce");
      expect(newYorkStyleCheesePizza.toppings).toContain(
        "Grated Reggiano Cheese"
      );
    });

    it("should create a new york style veggie pizza", () => {
      const newYorkPizzaStore = new NYPizzaStore();

      const newYorkStyleCheesePizza = newYorkPizzaStore.createPizza(
        pizzaType.veggie
      );

      expect(newYorkStyleCheesePizza.getName()).toBe("NY Style Veggie Pizza");
      expect(newYorkStyleCheesePizza.dough).toBe("Thin Crust Dough");
      expect(newYorkStyleCheesePizza.sauce).toBe("Marinara Sauce");
      expect(newYorkStyleCheesePizza.toppings).toEqual([
        "Grated Reggiano Cheese",
        "Garlic",
        "Onion",
        "Mushrooms",
        "Red Pepper"
      ]);
    });

    it("should create a new york style pepperoni pizza", () => {
      const newYorkPizzaStore = new NYPizzaStore();

      const newYorkStyleCheesePizza = newYorkPizzaStore.createPizza(
        pizzaType.pepperoni
      );

      expect(newYorkStyleCheesePizza.getName()).toBe(
        "NY Style Pepperoni Pizza"
      );
      expect(newYorkStyleCheesePizza.dough).toBe("Thin Crust Dough");
      expect(newYorkStyleCheesePizza.sauce).toBe("Marinara Sauce");
      expect(newYorkStyleCheesePizza.toppings).toEqual([
        "Grated Reggiano Cheese",
        "Sliced Pepperoni",
        "Garlic",
        "Onion",
        "Mushrooms",
        "Red Pepper"
      ]);
    });

    it("should create a new york style clam pizza", () => {
      const newYorkPizzaStore = new NYPizzaStore();

      const newYorkStyleCheesePizza = newYorkPizzaStore.createPizza(
        pizzaType.clam
      );

      expect(newYorkStyleCheesePizza.getName()).toBe("NY Style Clam Pizza");
      expect(newYorkStyleCheesePizza.dough).toBe("Thin Crust Dough");
      expect(newYorkStyleCheesePizza.sauce).toBe("Marinara Sauce");
      expect(newYorkStyleCheesePizza.toppings).toEqual([
        "Grated Reggiano Cheese",
        "Fresh Clams from Long Island Sound"
      ]);
    });
  });
});
