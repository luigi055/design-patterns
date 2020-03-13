import HouseBlend from "./beverages/beverages-types/house-blend";
import Espresso from "./beverages/beverages-types/espresso";
import DarkRoast from "./beverages/beverages-types/dark-roast";
import Decaf from "./beverages/beverages-types/decaf";
import Mocha from "./condiments/condiments-types/mocha";
import Soy from "./condiments/condiments-types/soy";
import Whip from "./condiments/condiments-types/whip";
import SteamedMilk from "./condiments/condiments-types/steamed-milk";

describe("Testing StarBuzz beverages and condiments", () => {
  it("should return the cost (0.89) when the client ask for a house blend coffee", () => {
    const houseBlend = new HouseBlend();

    expect(houseBlend.getDescription()).toBe("House Blend Coffee");
    expect(houseBlend.cost()).toBe(0.89);
  });

  it("should return the cost (1.99) when the client ask for a Espresso", () => {
    const houseBlend = new Espresso();

    expect(houseBlend.getDescription()).toBe("Espresso");
    expect(houseBlend.cost()).toBe(1.99);
  });

  it("should return the cost (0.99) when the client ask for a Dark Roast", () => {
    const houseBlend = new DarkRoast();

    expect(houseBlend.getDescription()).toBe("Dark Roast Coffee");
    expect(houseBlend.cost()).toBe(0.99);
  });

  it("should return the cost (1.05) when the client ask for a Decaf coffee", () => {
    const houseBlend = new Decaf();

    expect(houseBlend.getDescription()).toBe("Decaf Coffee");
    expect(houseBlend.cost()).toBe(1.05);
  });

  it("should return the cost (1.09) when the client ask for a house blend coffee with mocha", () => {
    const houseBlend = new HouseBlend();
    const mochaHouseBlend = new Mocha(houseBlend);

    expect(mochaHouseBlend.getDescription()).toBe("House Blend Coffee, Mocha");
    expect(mochaHouseBlend.cost()).toBe(1.09);
  });

  it("should return the cost (2.19) when the client ask for a Espresso with mocha", () => {
    const espresso = new Espresso();
    const mochaEspresso = new Mocha(espresso);

    expect(mochaEspresso.getDescription()).toBe("Espresso, Mocha");
    expect(mochaEspresso.cost()).toBe(2.19);
  });

  it("should return the cost (1.20) when the client ask for a Decaf coffee with soy", () => {
    const decaf = new Decaf();
    const soyDecaf = new Soy(decaf);

    expect(soyDecaf.getDescription()).toBe("Decaf Coffee, Soy");
    expect(soyDecaf.cost()).toBe(1.2);
  });

  it("should return the cost (1.09) when the client ask for a Dark Roast with whip", () => {
    const darkRoast = new DarkRoast();
    const whipDarkRoast = new Whip(darkRoast);

    expect(whipDarkRoast.getDescription()).toBe("Dark Roast Coffee, Whip");
    expect(whipDarkRoast.cost()).toBe(1.09);
  });

  it("should return the cost (1.19) when the client ask for a Dark Roast with whip and steamed milk", () => {
    const darkRoast = new DarkRoast();
    const whipDarkRoast = new Whip(darkRoast);
    const steamedMilkWhipDarkRoast = new SteamedMilk(whipDarkRoast);

    expect(steamedMilkWhipDarkRoast.getDescription()).toBe(
      "Dark Roast Coffee, Whip, Steamed Milk"
    );
    expect(steamedMilkWhipDarkRoast.cost()).toBe(1.19);
  });

  it("should return the cost (1.19) when the client ask for a double mocha soy latte with milk", () => {
    const latte = new DarkRoast();
    const doubleMochaLatte = new Mocha(new Mocha(latte));
    const doubleMochaSoyLatte = new Soy(doubleMochaLatte);
    const doubleMochaSoyLatteWithMilk = new SteamedMilk(doubleMochaSoyLatte);

    expect(doubleMochaSoyLatteWithMilk.getDescription()).toBe(
      "Dark Roast Coffee, Mocha, Mocha, Soy, Steamed Milk"
    );
    expect(doubleMochaSoyLatteWithMilk.cost()).toBe(1.64);
  });
});
